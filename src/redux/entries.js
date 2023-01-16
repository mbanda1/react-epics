import { createAction, createReducer } from '@reduxjs/toolkit'

const populate = createAction('POPULATE_ENTRIES')
const add = createAction('ADD_ENTRY_RESULT')
const remove = createAction('REMOVE_ENTRY_RESULT')
const updateEntry = createAction('UPDATE_ENTRY')

const initialValues = []

const reducer = createReducer(initialValues, {
  [populate]: (state, action) => ({
    data: action.payload?.data,
  }),
  [add]: (state, action) => ({
    ...state,
    data: [...state.data, action.payload],
  }),
  [remove]: (state, action) => ({
    ...state,
    data: state.data.filter((entry) => entry.id !== action.payload),
  }),
  [updateEntry]: (state, action) => {
    const currentEntries = state.data
    const index = currentEntries.findIndex(
      (entry) => entry.id === action.payload.id,
    )
    currentEntries[index] = {
      ...currentEntries[index],
      value: action.payload.value,
      description: action.payload.description,
    }
    state.data = currentEntries
  },
})

export default reducer
