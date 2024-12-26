import AboutInfo from '@/components/AboutInfo'
import SectionHeader from '@/components/SectionHeader'
import Book from "@/assets/images/book-cover.png"
import Image from 'next/image'

import Chrome from "@/assets/icons/chrome.svg";
import Github from "@/assets/icons/github.svg";
import Css from "@/assets/icons/css3.svg"
import Html from "@/assets/icons/html5.svg";
import ReactIcon from "@/assets/icons/react.svg"
import Js from "@/assets/icons/square-js.svg";
import ToolBox from '@/components/ToolBox';
import { TechIcon } from '@/components/TechIcon';




const About = () => {
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
      top: "10%",
    },
    {
      name: "gaming",
      emoji: "🕹️",
      left: "",
      top: ""
    },
    {
      name: "Cooking",
      emoji: "🍳",
      left: "",
      top: "",
    },
    {
      name: "Music",
      emoji: "🎵",
      left: '',
      top: "",
    },
    {
      name: "Fitness",
      emoji: "⛹️‍♀️",
      left: "",
      top: ""
    },
    {
      name: "Reading",
      emoji: "📖",
      left: "",
      top: ""
    }
  ]

  return (
    <div className='pb-24 md:pb-30 lg:pb-35'>
      <div className='container'>
        <SectionHeader title="A Glimpse Into My World" subTitle="About Me" description="Learn more about who I am , what I do and What inspires me." />

        <div className='py-10 flex flex-col lg:flex-row flex-wrap gap-16 justify-center items-center'>
          <div className=' card'>
            <AboutInfo title="My Reads" description="Explore the books shaping my perspectives." />
            <div className=' mt-12 flex justify-center items-center'>
              <Image src={Book} width={150} alt='bookcover' className='-mt-10' />
            </div>
          </div>
          <div className='card'>
            <AboutInfo title="My Toolbox" description="Explore the technologies and tools i use to craft exceptional digital experiences." />
            <div className='mb-5'>
              <ToolBox items={upperSkills} />
              <ToolBox items={lowerSkills} itemswrap="translate-x-1/2" />
            </div>


          </div>
          <div className='card'>
            <AboutInfo title="Beyond The Code" description="Explore my interests and hobbies beyond digital realm" />
            <div className='px-0 relative'>
              {hobbies.map(hobby => (
                <div key={hobby.name} className='inline-flex items-center justify-center px-2 py-1 rounded-3xl bg-gradient-to-r from-emerald-300 to-sky-400 ' style={{ left: hobby.left, top: hobby.top }}>
                  <span className='text-black font-medium text-lg'>{hobby.name}</span>
                  <span className='text-lg'>{hobby.emoji}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
