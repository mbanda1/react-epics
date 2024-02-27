import React from 'react'
import { Button, Icon } from 'semantic-ui-react'
import EntryForm from './entryForm.tsx'
import { v4 as uuidv4 } from 'uuid'
import MainHeader from '../header.tsx'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { QueryCache, useMutation, useQueryClient, } from '@tanstack/react-query'

type formInput = {
  id: string;
  value: number;
  description: string;
  notification?: string;
}

const NewEntryForm = () => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const {isPending} = useMutation({
    mutationFn: (values: formInput) =>
      axios.post('/', {
        id: uuidv4(),
        value: values.value,
        description: values.description,
        notification: 'Inserted',
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['GET_ENTRIES'] }) // Not necessary
    },
    onError: (error: { response: { data: string } }) => {
      window.alert(error.response.data)
    },
    onSettled: () => navigate('/'),
  })

  const addComment_Two = useMutation({
    mutationFn: (values: {value:string, description: string}) =>
      axios.post('/', {
        value: values.value,
        description: values.description,
      }),
    onSettled: () => navigate('/'),
    onMutate: (values) => {
      // Runs optimistc update,the data is added immidiattley to the list without waiting for the serve
      queryClient.setQueryData(['GET_ENTRIES'], (oldEntries:formInput) => {
        return [
          ...oldEntries,
          {
            id: Date.now(),
            ...values,
          },
        ]
      })
    },
  })


  return (
    <>
      <MainHeader title="Add new transaction" type="h3" />
      <EntryForm
        addEntry={(x) => addComment_Two.mutate(x)}
        isLoading={isPending}
      />

      <Button icon labelPosition="left" onClick={() => navigate('/')}>
        Back
        <Icon name="arrow left" />
      </Button>
    </>
  )
}

export default NewEntryForm
