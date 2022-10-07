import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import entriesReducer from '../redux/reducers';
import saga from '../sagas'

// export default configureStore({
//   reducer: {entriesReducer},
// })


let sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]

export const store = configureStore({
  reducer: {
    entriesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
})

sagaMiddleware.run(saga)