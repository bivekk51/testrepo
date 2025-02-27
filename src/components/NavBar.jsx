import React from 'react';

import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white px-6 py-3 flex justify-between items-center">
      <div>
        <NavLink to="/" ><h1 className='hover:underline text-2xl font-semibold' >Violence Detector</h1></NavLink>
      </div>
      <div className='flex gap-8'>
      <NavLink to="/" ><h1 className='hover:underline text-lg'>Home</h1></NavLink>
      <NavLink to="/technicaldetails" ><h1 className='hover:underline text-lg'>Technical Details</h1></NavLink>

      </div>
    </nav>
  );
};

export default Navbar;
