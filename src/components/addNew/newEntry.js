
import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Form, Icon } from 'semantic-ui-react';
import EntryForm from './entryForm';
import { v4 as uuidv4 } from 'uuid';
// import useEntryDetails from '../hooks/useEntryDetails';
import MainHeader from '../header';
import { useNavigate } from 'react-router-dom';

function NewEntryForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addEntryRedux = (payload) => {
    dispatch({
      type: 'ADD_ENTRY_RESULT',
      payload: {
        id: uuidv4(),
        value: payload.value,
        description: payload.description,
      }
    })
    navigate('/')
  }

  return (
    <>

      <MainHeader title='Add new transaction' type='h3' />
      <EntryForm
        addEntryRedux={addEntryRedux}
      />

      <Button icon labelPosition='left'
        onClick={() => navigate('/')}>
        Back
        <Icon name='left arrow' />
      </Button>

    </>
  );
}

export default NewEntryForm;