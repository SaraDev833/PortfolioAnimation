import ArrowUp from "@/assets/icons/arrow-up-right.svg"

const Contact = () => {
  return (
    <div className='pt-24 md:pt-30 lg:pt-35' id='contact'>
            <div className='container'>
                     <div className='bg-gradient-to-l  from-indigo-800 via-indigo-900 to-black py-4 px-6 rounded-3xl border  border-cyan-900'> 
                            <div className='md:grid md:grid-cols-3'>
                        <div className='md:col-span-2'>
                                   <h2 className="tracking-wide md:mb-2 xs:mb-3 xs:text-center text-2xl text-white font-serif md:text-left">Let's create something amazing together</h2>
                                   <p className=" text-sm font-normal text-white text-center md:text-left mb-4 md:mb-2">Ready to bring your next project to life? Let's connect and discuss how i can help achieve your goals.</p>
                        </div>
                        <div className='md:col-span-1 flex items-center justify-center'>
                              <a href="mailto:sksara706@gmail.com?subject=Let's Connect&body=Hi, I'd like to discuss a potential project." className='inline-flex justify-center items-center bg-white px-4 py-2 rounded-lg text-black'>
                                    <span className='text-black'>Contact Me</span>
                                    <ArrowUp />
                              </a>
                        </div>
                            </div>
                     </div>
            </div>
    </div>
  )
}

export default Contact
