import React from 'react'
import ReactDOM from 'react-dom/client'
import 'semantic-ui-css/semantic.min.css'
import './index.css'
import { store } from './store'
import { Provider } from 'react-redux'
// Components
import App from './App'
import NewEntryForm from './components/addNew/newEntry'
import { QueryClient, QueryClientProvider } from 'react-query'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ModalEdit from './components/addNew/modalEdit'

const theRoutes = [
  {
    path: '/:postId',
    element: <ModalEdit />,
  },
  {
    path: 'add',
    element: <NewEntryForm />,
  },
]

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  ...theRoutes.map((x) => {
    return {
      path: x.path,
      element: x.element,
    }
  }),
])

// As of React 18
const root = ReactDOM.createRoot(document.getElementById('root'))

const queryClient = new QueryClient()

root.render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </Provider>,
)
