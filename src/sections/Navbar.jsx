'use client'
import {useState} from 'react'

const Navbar = () => {
    const [active , setActive] = useState('home');

    return (
        <div className='w-full fixed top-2 z-50'>
        <div className=' mt-3 flex items-center w-full justify-center'>
            <nav className='flex items-center justify-center bg-white/15 py-1 px-1 rounded-full border border-white/70 backdrop-blur z-30'>
                <a href="#home" className={`nav-item ${active === 'home'? 'bg-white text-slate-900': ''}`} onClick={()=>setActive('home')}>Home</a>
                <a href="#project" className={`nav-item ${active === 'project'? 'bg-white text-slate-900': ''}`} onClick={()=>setActive('project')}>Projects</a>
                <a href="#about" className={`nav-item ${active === 'about' ? 'bg-white text-slate-900': ''}`} onClick = {()=>setActive('about')}>About</a>
                <a href="#contact" className={`nav-item ${active === 'contact' ? 'bg-white text-slate-900' : ''}`} onClick={()=>setActive('contact')}>Contact</a>
            </nav>
        </div>
        </div>
    )
}

export default Navbar
