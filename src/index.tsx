import React from 'react'
import ReactDOM from 'react-dom/client'
import 'semantic-ui-css/semantic.min.css'
import './index.css'
// Components
import App from './App.tsx'
import NewEntryForm from './components/addNew/newEntry.jsx'
import { BrowserRouter as Router, useRoutes } from 'react-router-dom'
import ModalEdit from './components/addNew/modalEdit.jsx'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'


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

const TheRoutesDefination = () => {
  const routeElement = useRoutes([
    {
      path: '/',
      element: <App/>,
    },
    ...theRoutes.map((x) => {
      return {
        path: x.path,
        element: x.element,
      }
    }),
  ])

  return routeElement
}

// As of React 18
const root = ReactDOM.createRoot(document.getElementById('root'))

const queryClient = new QueryClient()

root.render(
  <QueryClientProvider client={queryClient}>
    <Router>
      <TheRoutesDefination/>
    </Router>
    <ReactQueryDevtools />
  </QueryClientProvider>,
)
