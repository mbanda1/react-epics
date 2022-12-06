import React, { useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useDispatch } from 'react-redux';
import { Button, Modal } from 'semantic-ui-react';
import './style.css';
import { useForm } from 'react-hook-form';


const validationSchema = yup.object({
  value: yup.number().typeError("Value is equired"),
  description: yup.string().required("Required")
});

function ModalEdit({ isOpen, description, value, id }) {
  useEffect(() => {
    reset({ description, value, id })
  }, [description, value])

  const defaultValues = {
    isOpen, description, value
  }

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const updateEntryRedux = (payload) => {
    dispatch({
      type: 'UPDATE_ENTRY',
      payload:{
        description:payload.description,
        value: payload.value,
        id
      }})
      close()
   }

  const close = () => dispatch({type: 'CLOSE_EDIT_MODAL'})

  const dispatch = useDispatch();

  return (
    <Modal open={isOpen}>
      <Modal.Header>Edit entry</Modal.Header>
      <Modal.Content>
      <div>
      {errors.description && <p>{errors.description?.message}</p>}
        <form onSubmit={handleSubmit(data => updateEntryRedux(data))}>
          <label for="fname">Value</label>
          <input type="number"
            {...register("value")}
            placeholder="999"
            defaultValue={defaultValues.value}
          />
          {errors.value && <p>{errors.value?.message}</p>}

          <br />
          <label for="fname">Description</label>
          <input
            type="text"
            {...register("description")}
            placeholder="Tea"
            defaultValue={defaultValues.description}
          />
        </form>
      </div>
     </Modal.Content>

      <Modal.Actions>
        <Button onClick={() => close()}>Close</Button>
        <Button onClick={handleSubmit(data => updateEntryRedux(data))} primary>
          Update
        </Button>
      </Modal.Actions>

    </Modal>
  );
}

export default ModalEdit;
