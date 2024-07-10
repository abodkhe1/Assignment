import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from 'react-router-dom'
import Dashboard from './component/dashboard.jsx'
import CreateEmp from './component/Create_Emp.jsx'
import EmpList from './component/Emp_List.jsx'
import store from './store/appStore.js'
import { Provider } from 'react-redux'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Dashboard />} />
      <Route path='/CreateEmp' element={<CreateEmp />} />
      <Route path='/EmpList' element={<EmpList />} />
      <Route path='/edit/:empid' element={<CreateEmp />} />
      
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
