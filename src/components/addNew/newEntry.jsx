import React from 'react'
import { Button, Icon } from 'semantic-ui-react'
import EntryForm from './entryForm'
import { v4 as uuidv4 } from 'uuid'
import MainHeader from '../header'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { QueryCache, useMutation, } from '@tanstack/react-query'

function NewEntryForm() {
  const navigate = useNavigate()

  const addComment = useMutation({
    mutationFn: (values) =>
      axios.post('/', {
        id: uuidv4(),
        value: values.value,
        description: values.description,
        notification: 'Inserted',
      }),
    onSuccess: () => {
      QueryCache.invalidateQueries('GET_ENTRIES') // Not necessary
    },
    onError: (error) => {
      window.alert(error.response.data)
    },
    onSettled: () => navigate('/'),
  })

  const addComment_Two = useMutation({
    mutationFn: (values) =>
      axios.post('/', {
        value: values.value,
        description: values.description,
      }),
    onSettled: () => navigate('/'),
    onMutate: (values) => {
      // Runs optimistc update,the data is added immidiattley to the list without waiting for the serve
      QueryCache.setQueryData('GET_ENTRIES', (oldEntries) => {
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

  const { isInitialLoading } = addComment

  return (
    <>
      <MainHeader title="Add new transaction" type="h3" />
      <EntryForm
        addEntry={(x) => addComment_Two.mutate(x)}
        isLoading={isInitialLoading}
      />

      <Button icon labelPosition="left" onClick={() => navigate('/')}>
        Back
        <Icon name="left arrow" />
      </Button>
    </>
  )
}

export default NewEntryForm
