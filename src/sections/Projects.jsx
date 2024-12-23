import React from 'react'
import projectOneImage from "@/assets/images/dark-saas-landing-page.png"
import projectTwoImage from "@/assets/images/light-saas-landing-page.png"
import projectThreeImage from "@/assets/images/ai-startup-landing-page.png"
import ArrowIcon from "@/assets/icons/arrow-up-right.svg"
import Link from 'next/link'
import Image from 'next/image'
import Hero from './Hero';
const Projects = () => {
    const projects = [
        {
            company: "ACME CORP",
            date: '2022',
            title: "Dark Sass Landing Page",
            description: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus ducimus doloribus ex assumenda in corporis, ad esse facilis iste aliquam",
            Link: "saradevsolutions.com",
            image: projectOneImage
        },
        {
            company: "INNOVATIVE CO",
            date: "2021",
            title: "Light Saas Landing Page",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere blanditiis aperiam delectus esse optio sed pariatur, ea numquam incidunt quaerat nemo voluptatum fuga a sequi, quos consequuntur eius facilis ipsa!",
            link: "#",
            image: projectTwoImage
        },
        {
            company: "QUANTUM DYNAMICS",
            date: "2023",
            title: "AI Startup Landing Page",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, ipsa laborum. Aut, eligendi. Earum quis, libero delectus fuga dolore ut autem qui sit provident doloremque? Dolore temporibus voluptas doloribus voluptates.",
            link: "#",
            image: projectThreeImage,

        }
    ]

    return (
        <div>
            <div className='container'>
                <div className='flex justify-center'>
                    <p className='uppercase sm:text-lg  bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text font-semibold'>real-world results</p>
                </div>
                <h1 className='font-serif text-2xl font-medium text-center mt-4 sm:text-3xl md:text-4xl'>Featured Projects</h1>
                <p className='text-white/60 font-medium text-sm text-center my-6 max-w-sm mx-auto sm:text-[16px] sm:my-8 md:text-lg'>See how I transformed concepts into engaging digital experiences.</p>
                <div className='flex flex-col gap-16 mt-8'>
                    {projects.map((project) => {
                        return (
                            <div key={project.title} className='bg-gray-800 px-8 pt-8 rounded-3xl z-0 relative after:content-[""] after:absolute  after:inset-0 after:-z-10 after:outline-2 after:outline after:outline-white/20 after:-outline-offset-2 after:rounded-3xl'>
                                <div className='text-sm bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent  bg-clip-text font-bold sm:text-[16px] md:text-lg'>
                                    <span >{project.company}</span>
                                    <span> &bull; </span>
                                    <span >{project.date}</span>
                                </div>
                                <h3 className='mt-4  font-medium font-serif  text-xl tracking-wider sm:text-3xl md:text-4xl'>{project.title}</h3>
                                <hr className='mt-4 border-white/20' />
                                <p className=' mt-4 sm:mt-6  text-white/60 text-sm sm:text-[16px] md:text-lg'>{project.description}</p>
                                <a href={project.link}>
                                    <div className='flex items-center justify-center sm:mt-6 md:mt-10 mb-6'>
                                        <button className='inline-flex px-4 py-2 bg-white text-slate-900 font-bold text-sm m-0 justify-center items-center mb-6 rounded-3xl cursor-pointer sm:text-[16px] gap-1 sm:py-3 sm:px-6 md:text-lg'>Visit Live Site
                                            <ArrowIcon className="size-4 sm:size-6" />
                                        </button>
                                    </div>

                                </a>
                                <Image src={project.image} alt='projectImage' className='mb-[2px]' />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Projects
