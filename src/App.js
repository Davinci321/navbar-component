import './App.css';
import { useState } from 'react';

function App() {
  const[toggleDropdown, setToggleDropdown] = useState(false);

  return (
    <div className="w-100 h-100 ">
      <div className='flex w-full mb-16 pt-3 bg-rose-200 justify-between py-4'>

    <div className="font-bold text-2xl ml-3">
      <h1>Maluda Tech</h1>
    </div>

      {/* Desktop Navigation */}
        <ul className=' justify-end gap-2 pr-3 text-sm pt-1 sm:text-lg sm:flex hidden'>
          <li><a href='#'>About</a></li>
          <li><a href='#'>Projects</a></li>
          <li><a href='#'>Contact</a></li>
          <li><a href='#'>Skills</a></li>
        </ul>

      {/* Mobile Navigation */}
      <div className='sm:hidden flex relative'>
      <button className='mr-2 bg-black rounded-full text-white p-2' onClick={()=>{setToggleDropdown((prev)=>!prev)}}>Click me</button>

      {toggleDropdown && (
        <div>
          <ul className=' absolute right-0 top-full  mt-3 w-full p-5 rounded-lg bg-white min-w-[150px] flex flex-col gap-2  pr-10 justify-end items-end'>
          <li className=' border-b-2'><a href='#'>About</a></li>
          <li className=' border-b-2'><a href='#'>Projects</a></li>
          <li className=' border-b-2'><a href='#'>Contact</a></li>
          <li className=' border-b-2'><a href='#'>Skills</a></li>
        </ul>
        </div>
      )}
      
    </div>
    </div>
      

    </div>
  );
}

export default App;
