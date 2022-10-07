import { createAction, createReducer } from '@reduxjs/toolkit'

const increment = createAction('increment')
const decrement = createAction('decrement')
createAction('FETCH_NUMBER_SAGA')

const initialValues = {}

const reducer = createReducer(
  initialValues,
   {
      [increment] :(state, action) => ({
        ...state,
        counter: action.payload
      }),
      [decrement]: (state, action) => ({
        counter: state.counter -= action.payload
      }),
  }
)

export default reducer
