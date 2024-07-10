import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import Sidebar from './component/Sidebar'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <div className="p-4">
          <Outlet/>
          {/* <h1 className="text-2xl font-bold mb-4">Welcome to MyApp</h1>
          <p>This is the main content area.</p> */}
        </div>
      </div>
    </div>
    </>
  )
}

export default App
