"use client"
import AboutInfo from '@/components/AboutInfo'
import SectionHeader from '@/components/SectionHeader'
import Book from "@/assets/images/book-cover.png"
import Image from 'next/image'
import SmileEMoji from "@/assets/images/memoji-smile.png"
import Chrome from "@/assets/icons/chrome.svg";
import Github from "@/assets/icons/github.svg";
import Css from "@/assets/icons/css3.svg"
import Html from "@/assets/icons/html5.svg";
import ReactIcon from "@/assets/icons/react.svg"
import Js from "@/assets/icons/square-js.svg";
import ToolBox from '@/components/ToolBox';
import { TechIcon } from '@/components/TechIcon';
import { motion } from 'framer-motion'
import {useRef} from 'react'


const About = () => {
  const refrence = useRef(null);
  const skills = [
    {
      iconType: Js,
      name: 'Javascript',
    },
    {
      iconType: Html,
      name: "HTML5",
    },
    {
      iconType: ReactIcon,
      name: "React",
    },
    {
      iconType: Css,
      name: 'CSS3',
    },
    {
      iconType: Github,
      name: "Github",
    },
    {
      iconType: Chrome,
      name: "chrome",
    },
    {
      iconType: Css,
      name: 'Next js',
    },
    {
      iconType: Github,
      name: "Mongodb",
    },
    {
      iconType: Chrome,
      name: "Laravek",
    },
  ]
  const upperSkills = skills;
  const lowerSkills = [...skills].reverse();

  const hobbies = [
    {
      name: "Painting",
      emoji: "🎨",
      left: "50%",
      top: "50%",
    },
    {
      name: "Photography",
      emoji: "📷",
      left: "40%",
      top: "5%",
    },
    {
      name: "gaming",
      emoji: "🕹️",
      left: "10%",
      top: "60%"
    },
    {
      name: "Cooking",
      emoji: "🍳",
      left: "80%",
      top: "30%",
    },
    {
      name: "Music",
      emoji: "🎵",
      left: '1%',
      top: "30%",
    },
    {
      name: "Fitness",
      emoji: "⛹️‍♀️",
      left: "30%",
      top: "36%"
    },
    {
      name: "Reading",
      emoji: "📖",
      left: "3%",
      top: "5%"
    }
  ]

  return (
    <div className='pt-24 md:pt-30 lg:pt-35' id='about'>
      <div className='container'>
        <SectionHeader title="A Glimpse Into My World" subTitle="About Me" description="Learn more about who I am , what I do and What inspires me." />

        <div className='py-10 flex flex-col md:flex-row flex-wrap  gap-16 justify-center items-center'>
          <div className=' card lg:w-[300px]'>
            <AboutInfo title="My Reads" description="Explore the books shaping my perspectives." />
            <div className=' mt-12 flex justify-center items-center'>
              <Image src={Book} width={150} alt='bookcover' className='-mt-10 ' />
            </div>
          </div>
          <div className='card lg:w-[430px]  relative' >
            <AboutInfo title="My Toolbox" description="Explore the technologies and tools i use to craft exceptional digital experiences." />
            <ToolBox items={skills} itemsWrapper='animate-move-left [animation-duration:30s]'/>
            <ToolBox items={skills} itemsWrapper= '-translate-x-1/2 animate-move-right [animation-duration:20s]' />


          </div>
          <div className='card flex flex-col lg:w-[430px]' >
            <AboutInfo title="Beyond The Code" description="Explore my interests and hobbies beyond digital realm" />
            <div className=' relative flex-1' ref={refrence} >
              {hobbies.map(hobby => (
                <motion.div key={hobby.name} className='inline-flex items-center justify-center px-2 py-1 rounded-3xl bg-gradient-to-r from-emerald-300 to-sky-400 absolute' style={{ left: hobby.left, top: hobby.top }} drag dragConstraints={refrence}>
                  <span className='text-black font-medium text-lg'>{hobby.name}</span>
                  <span className='text-lg'>{hobby.emoji}</span>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="card padding outline outline-2 firstWidth outline-white/20 lg:w-[300px]" >
            <div className='h-full w-full relative'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.269379127599!2d90.41771767353428!3d23.702072490633412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9a57188d3ed%3A0xa803350dfbdaf099!2sLoharpul%20Masjid!5e0!3m2!1sen!2sbd!4v1735278824827!5m2!1sen!2sbd" className='h-full w-full'></iframe>
           
              <div className='absolute h-[50px] w-[50px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full'>
              <Image src={SmileEMoji} width={50} height={50} alt='smile' className='z-10 absolute object-cover h-full w-full '/>
              <div className='absolute inset-0 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full -z-1 animate-ping '></div>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
