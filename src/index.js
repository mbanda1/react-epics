import React from 'react'
import ReactDOM from 'react-dom/client'
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import {store} from './store'
import { Provider } from 'react-redux'
import { createRoot } from "react-dom/client";
// Components
import App from './App'
import NewEntryForm from './components/addNew/newEntry';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const theRoutes = [
  {
    path: "add",
    element: <NewEntryForm/>
  },
]

const router = createBrowserRouter([
   {
    path: "/",
    element: <App/>,
    },
    ...theRoutes.map(x => {
     return {
      path: x.path,
      element: x.element,
     }
    })
]);


// As of React 18
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
)