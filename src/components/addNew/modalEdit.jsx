import React from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Button, Modal } from 'semantic-ui-react'
import './style.css'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { QueryCache, useMutation, useQuery } from 'react-query'
import axios from 'axios'

const validationSchema = yup.object({
  value: yup.number().typeError('Value is equired'),
  description: yup.string().required('Required'),
})
function ModalEdit() {
  const navigate = useNavigate()
  const { postId } = useParams()

  const { data } = useQuery(
    ['GET_ENTRY', { postId }],
    () => axios.get(`http://localhost:3001/entries/${postId}`),
    {
      onSuccess: ({ description, value, id }) => {
        reset({ description, value, id })
      },
    },
  )

  const defaultValues = { ...data?.data }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  })

  const updateEntryRedux = useMutation({
    mutationFn: (values) =>
      axios.post(`/`, {
        value: values.value,
        description: values.description,
      }),
    onSuccess: (data, values) => {
      QueryCache.setQueryData(['GET_ENTRY', postId], data) // Not necessary
      QueryCache.invalidateQueries(['GET_ENTRY', postId]) // Not necessary
    },
    onError: (error) => {
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
            onSubmit={handleSubmit((data) => updateEntryRedux.mutate(data))}
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
          onClick={handleSubmit((data) => updateEntryRedux.mutate(data))}
          primary
        >
          Update
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

ModalEdit.defaultProps = {}

ModalEdit.propTypes = {}

export default ModalEdit
