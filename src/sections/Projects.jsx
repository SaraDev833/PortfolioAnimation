import React from 'react'
import projectOneImage from "@/assets/images/dark-saas-landing-page.png"
import projectTwoImage from "@/assets/images/light-saas-landing-page.png"
import projectThreeImage from "@/assets/images/ai-startup-landing-page.png"
import GrainImage from "@/assets/images/grain.jpg"
import ArrowIcon from "@/assets/icons/arrow-up-right.svg"
import Link from 'next/link'
import Image from 'next/image'
import Hero from './Hero';
import SectionHeader from '@/components/SectionHeader'
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
        <div className='pb-24 md:pb-30 lg:pb-35'>
            <div className='container'>
                <SectionHeader title="Featured Projects" subTitle="real-world results" description="See how I transformed concepts into engaging digital experiences."/>
                <div className='flex flex-col gap-16 mt-8'>
                    {projects.map((project) => {
                        return (
                            <div key={project.title} className='bg-gray-800 px-8 pt-8 lg:pt-16 lg:pr-0 rounded-3xl z-0 relative after:content-[""] after:absolute  after:inset-0 after:-z-10 after:outline-2 after:outline after:outline-white/20 
                            after:-outline-offset-2 after:rounded-3xl after:pointer-events-none'>
                                <div className='absolute inset-0 -z-10 opacity-5' style={{ backgroundImage: `url(${GrainImage.src})` }}></div>
                                <div className='lg:grid lg:grid-cols-2 lg:gap-16 '>

                                    <div className='lg:pb-16'>
                                        <div className='text-sm bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent  bg-clip-text font-bold sm:text-[16px] md:text-lg whitespace-nowrap'>
                                            <span >{project.company}</span>
                                            <span> &bull; </span>
                                            <span >{project.date}</span>
                                        </div>
                                        <h3 className='mt-4  font-medium font-serif  text-xl tracking-wider sm:text-2xl md:text-3xl'>{project.title}</h3>
                                        <hr className='mt-4 border-white/20' />
                                        <p className=' mt-4 sm:mt-6  text-white/60 text-sm sm:text-[16px] md:text-lg xs:my-6'>{project.description}</p>
                                        <a href={project.link}>
                                            <div className='flex items-center justify-center sm:mt-6 md:mt-10 mb-4 md:justify-start '>
                                                <button className='inline-flex px-4 py-2 bg-white text-slate-900 font-bold text-sm m-0 justify-center items-center mb-6 rounded-3xl cursor-pointer sm:text-[16px] gap-1 sm:py-3 sm:px-6 md:text-lg'>Visit Live Site
                                                    <ArrowIcon className="size-4 sm:size-6" />
                                                </button>
                                            </div>

                                        </a>
                                    </div>
                                    <div className='lg:relative lg:overflow-hidden'>
                                        <Image src={project.image} alt='projectImage' className='mb-[2px] lg:absolute lg:h-full lg:w-auto  lg:max-w-none lg:mt-0 lg:bottom-[1px] lg:-z-10 ' /
                                        
                                        >
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Projects
