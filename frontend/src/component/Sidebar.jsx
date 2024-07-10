// src/components/Sidebar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
function Sidebar ()  {
  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <div className="mb-4">
        <h2 className="text-xl font-bold">Menu</h2>
      </div>
      <ul className="space-y-2">
        <li>
          {/* <a href="#dashboard" className="block p-2 hover:bg-gray-700 rounded">Dashboard</a> */}
          <NavLink to={''} className="block p-2 hover:bg-gray-700 rounded">Dashboard</NavLink>
        </li>
        <li>
           <NavLink to={'/CreateEmp'} className="block p-2 hover:bg-gray-700 rounded">Create Employee</NavLink>
        </li>
        <li>
        <NavLink to={'/EmpList'} className="block p-2 hover:bg-gray-700 rounded">Create Employee</NavLink>

        </li>
        {/* <li>
          <a href="#help" className="block p-2 hover:bg-gray-700 rounded">Help</a>
        </li> */}
      </ul>
    </div>
  );
};

export default Sidebar;
