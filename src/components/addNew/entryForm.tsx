import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import './style.css'

const validationSchema = yup.object({
  value: yup.number().typeError('Value is equired'),
  description: yup.string().required('Required'),
})

type entryFormProps = {
  isLoading: boolean,
  addEntry: any,
  // addEntry: React.ChangeEventHandler<HTMLElement>,
}

interface formInput {
  value: number;
  description: string;
}

export default ({addEntry, isLoading=false}: entryFormProps) => {

    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formInput>({ resolver: yupResolver(validationSchema) });


  return (
    <div>
      <form onSubmit={handleSubmit((data: formInput) => addEntry(data))}>
        <label htmlFor="fname">Value</label>
        <input type="number" {...register('value')} placeholder="999" />
        {errors.value && <p>{errors.value?.message}</p>}

        <br />
        <label htmlFor="fname">Description</label>
        <input type="text" {...register('description')} placeholder="Tea" />
        {errors.description && <p>{errors.description?.message}</p>}
        <br />
        <input type="submit" value={isLoading ? 'Loading...' : 'submit'} />
      </form>
    </div>
  )
}