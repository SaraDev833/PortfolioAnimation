import React from 'react'

const Navbar = () => {
    return (
        <div className='w-full'>
        <div className=' mt-3 flex items-center w-full justify-center'>
            <nav className='flex items-center justify-center bg-white/15 py-1 px-1 rounded-full border border-white/70 backdrop-blur '>
                <a href="#" className='nav-item'>Home</a>
                <a href="#" className='nav-item'>Projects</a>
                <a href="#" className='nav-item'>About</a>
                <a href="#" className='nav-item'>Contact</a>
            </nav>
        </div>
        </div>
    )
}

export default Navbar
