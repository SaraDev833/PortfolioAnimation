import React from 'react'

function SectionHeader({subTitle , title , description}) {
  return (
    <>
      <div className='flex justify-center'>
                    <p className='uppercase sm:text-lg  bg-gradient-to-r from-cyan-400 via-indigo-500 to-sky-500 text-transparent bg-clip-text font-semibold'>{subTitle}</p>
                </div>
                <h1 className='font-serif text-2xl font-medium text-center mt-4 sm:text-3xl md:text-4xl'>{title}</h1>
                <p className='text-white/60 font-medium text-sm text-center my-6 max-w-sm mx-auto sm:text-[16px] sm:my-8 md:text-lg'>{description}</p>
               
    </>
  )
}

export default SectionHeader
