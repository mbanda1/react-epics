import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import entriesReducer from '../redux';
import { initSagas } from '../sagas'


let sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]

export const store = configureStore({
  reducer: {
    ...entriesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
})

initSagas(sagaMiddleware)