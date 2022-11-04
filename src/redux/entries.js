import { createAction, createReducer } from "@reduxjs/toolkit";

const populate = createAction("POPULATE_ENTRIES");
const add = createAction("ADD_ENTRY_RESULT");
const remove = createAction("REMOVE_ENTRY_RESULT");
const populateDetails = createAction("POPULATE_ENTRY_DETAILS");
const updateEntry = createAction("UPDATE_ENTRY");

const initialValues = {};

const reducer = createReducer(initialValues, {
  [populate]: (state, action) => ({
    data: action.payload,
  }),
  [add]: (state, action) => ({
    ...state,
    data: state.concat({ ...action.payload }),
  }),
  [remove]: (state, action) => ({
    ...state,
    data: state.filter((entry) => entry.id !== action.payload.id),
  }),
  [updateEntry]: (state, action) => {
    const newEntries = [...state];
    const index = newEntries.findIndex(
      (entry) => entry.id === action.payload.id
    );
    newEntries[index] = { ...newEntries[index], ...action.payload.entry };
    return { data: newEntries };
  },
});

export default reducer;
