import React, { useEffect } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import * as PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { Button, Modal } from 'semantic-ui-react'
import './style.css'
import { useForm } from 'react-hook-form'

const validationSchema = yup.object({
  value: yup.number().typeError('Value is equired'),
  description: yup.string().required('Required'),
})

function ModalEdit({
  isOpen,
  description,
  value,
  id,
  setNotification,
  setUpdated,
}) {
  useEffect(() => {
    reset({ description, value, id })
  }, [description, value])

  const defaultValues = {
    isOpen,
    description,
    value,
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  })

  const updateEntryRedux = (payload) => {
    dispatch({
      type: 'UPDATE_ENTRY',
      payload: {
        description: payload.description,
        value: payload.value,
        id,
      },
    })
    setNotification(new Date())
    close()
    setUpdated(new Date())
  }

  const close = () => dispatch({ type: 'CLOSE_EDIT_MODAL' })

  const dispatch = useDispatch()

  return (
    <Modal open={isOpen}>
      <Modal.Header>Edit entry</Modal.Header>
      <Modal.Content>
        <div>
          {errors.description && <p>{errors.description?.message}</p>}
          <form onSubmit={handleSubmit((data) => updateEntryRedux(data))}>
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
        <Button onClick={() => close()}>Close</Button>
        <Button
          onClick={handleSubmit((data) => updateEntryRedux(data))}
          primary
        >
          Update
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

ModalEdit.defaultProps = {
  isOpen: false,
  description: '',
}

ModalEdit.propTypes = {
  isOpen: PropTypes.bool,
  description: PropTypes.string,
  value: PropTypes.number,
  id: PropTypes.string,
  setNotification: PropTypes.func,
  setUpdated: PropTypes.func,
}

export default ModalEdit
