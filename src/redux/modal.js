import { createAction, createReducer } from "@reduxjs/toolkit";

const open = createAction("OPEN_EDIT_MODAL");
const close = createAction("CLOSE_EDIT_MODAL");

const initialValues = {};

const reducer = createReducer(initialValues, {
  [open]: (state, action) => ({
    ...state,  isOpen:true, id: action.payload
  }),
  [close]: (state, action) => ({
    ...state,  isOpen:true, id: null
  })
});

export default reducer;