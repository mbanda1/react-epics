import React from 'react'
import ReactDOM from 'react-dom/client'
import 'semantic-ui-css/semantic.min.css'
import './index.css'
// Components
import App from './App'
import NewEntryForm from './components/addNew/newEntry'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { BrowserRouter as Router, useRoutes } from 'react-router-dom'
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
