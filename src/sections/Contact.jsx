import ArrowUp from "@/assets/icons/arrow-up-right.svg"

const Contact = () => {
  return (
    <div className='pt-24 md:pt-30 lg:pt-35' id='contact'>
            <div className='container'>
                     <div className='bg-gradient-to-r from-emerald-300 to-sky-400 py-4 px-6 rounded-3xl'> 
                            <div className='md:grid md:grid-cols-3'>
                        <div className='md:col-span-2'>
                                   <h2 className="tracking-wide md:mb-2 xs:mb-3 xs:text-center text-2xl text-black font-serif md:text-left">Let's create something amazing together</h2>
                                   <p className=" text-sm font-normal text-black text-center md:text-left mb-4 md:mb-2">Ready to bring your next project to life? Let's connect and discuss how i can help achieve your goals.</p>
                        </div>
                        <div className='md:col-span-1 flex items-center justify-center'>
                              <button className='inline-flex justify-center items-center bg-black px-4 py-2 rounded-lg'>
                                    <span className=''>Contact Me</span>
                                    <ArrowUp/>
                              </button>
                        </div>
                            </div>
                     </div>
            </div>
    </div>
  )
}

export default Contact
