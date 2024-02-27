import React from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Button, Modal } from 'semantic-ui-react'
import './style.css'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { useQuery, useMutation } from '@tanstack/react-query'

const validationSchema = yup.object({
  value: yup.number().typeError('Value is equired'),
  description: yup.string().required('Required'),
})

interface formInput {
  value: number;
  description: string;
  id: string;
}

const ModalEdit = () => {

  const navigate = useNavigate()
  const { postId } = useParams()

  const { data, isSuccess } = useQuery({
    queryKey: ['GET_ENTRY', { postId }],
    queryFn: () => axios.get(`http://localhost:3001/entries/${postId}`),
    // onSuccess: ({ description, value, id }) => {
    //   reset({ description, value, id })
    // }
  })
  

  const defaultValues = { ...data?.data }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<formInput>({
    resolver: yupResolver(validationSchema),
  })

  const updateEntryRedux = useMutation({
    mutationFn: (values: formInput) =>
      axios.post('/', {
        value: values.value,
        description: values.description,
      }),
    onError: (error: { response: { data: string } }) => {
      window.alert(error.response.data)
    },
    onSettled: () => navigate('/'),
  })

  return (
    <Modal open={true}>
      <Modal.Header>Edit entry</Modal.Header>
      <Modal.Content>
        <div>
          {errors.description && <p>{errors.description?.message}</p>}
          <form
            onSubmit={handleSubmit((data: formInput) => updateEntryRedux.mutate(data))}
          >
            <label htmlFor="fname">Value</label>
            <input
              type="number"
              {...register('value')}
              placeholder="999"
              defaultValue={defaultValues.value}
            />
            {errors.value && <p>{errors.value?.message}</p>}

            <br />
            <label htmlFor="fname">Description</label>
            <input
              type="text"
              {...register('description')}
              placeholder="Tea"
              defaultValue={defaultValues.description}
            />
          </form>
        </div>
      </Modal.Content>

      <Modal.Actions>
        <Button onClick={() => navigate('/')}>Close</Button>
        <Button
          onClick={handleSubmit((data: formInput) => updateEntryRedux.mutate(data))}
          primary
        >
          Update
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default ModalEdit
