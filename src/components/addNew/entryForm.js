import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import './style.css';


const validationSchema = yup.object({
  value: yup.number().typeError("Value is equired"),
  description: yup.string().required("Required")
});

export default function App({addEntryRedux}) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
  });

  return (
    <div>
      <form onSubmit={handleSubmit(data => addEntryRedux(data))}>
      <label for="fname">Value</label>
      <input type="number" {...register("value")}  placeholder="999" />
      {errors.value && <p>{errors.value?.message}</p>}

      <br/>
      <label for="fname">Description</label>
      <input type="text" {...register("description")} placeholder="Tea" />
      {errors.description && <p>{errors.description?.message}</p>}
      <br/>
      <input type="submit" />
    </form>
    </div>
  );
}

