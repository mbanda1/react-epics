import { createAction, createReducer } from "@reduxjs/toolkit";

const open = createAction("OPEN_EDIT_MODAL");
const close = createAction("CLOSE_EDIT_MODAL");

const initialValues = {};

const reducer = createReducer(initialValues, {
  [open]: (state, action) => ({
    ...state,  isOpen:true, entry: action.payload
  }),
  [close]: (state) => ({
    ...state,  isOpen:false, entry: null
  })
});

export default reducer;