import React from 'react'
import NavbarImage from '../Images/NavbarIcon.png'
const Navbar = () => {
  return (
    <header className="text-gray-600 body-font ">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
       <img src={NavbarImage} className='w-[7rem]'/>
      </a>
      <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
        <a className="ms-[4rem] hover:cursor-pointer hover:text-orange-400  text-white ">Pricing</a>
        <a className="ms-[4rem] hover:cursor-pointer hover:text-orange-400  text-white ">About</a>
        <a className="ms-[4rem] hover:cursor-pointer hover:text-orange-400  text-white ">Tools</a>
        <a className="ms-[4rem] hover:cursor-pointer hover:text-orange-400  text-white ">How It Works</a>
        <a className="ms-[4rem] hover:cursor-pointer hover:text-orange-400  text-white ">Testimonials</a>
        <a className="ms-[4rem] hover:cursor-pointer hover:text-orange-400  text-white ">FAQ</a>
      </nav>
      <button className="inline-flex items-center bg-orange-500 border-0 py-2 px-4 focus:outline-none hover:bg-white text-white  rounded text-base mt-4 md:mt-0 hover:text-orange-400 ">
        Calculate Solar
      </button>
    </div>
  </header>
  
  )
}

export default Navbar
