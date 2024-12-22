import mimojiImage from "@/assets/images/memoji-computer.png"
import Image from "next/image"
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg"

const Hero = () => {
    return (
        <div className="py-24 md:py-30 lg:py-35 relative z-0">
            <div className="absolute inset-0 opacity-5 -z-30" style={{ backgroundImage: `url(${grainImage})` }}></div>
      <div className="h-[420px] w-[420px] hero-ring"></div>
      <div className="sm:h-[620px] sm:w-[620px] hero-ring"></div>
      <div className="md:h-[820px] md:w-[820px] hero-ring"></div>
      <div className="lg:h-[1020px] lg:w-[1020px] hero-ring"></div>
      <div className="lg:h-[1220px] lg:w-[1220px] hero-ring"></div>
      
      
            <div className="container">
                <div className="flex flex-col items-center justify-center w-full">
                    <div className="flex flex-col items-center justify-center max-w-lg">
                        <Image src={mimojiImage} height={150} width={150} alt='' />
                        <div className="px-2 py-1 bg-black rounded-full flex items-center justify-center">
                            <div className="bg-green-500 size-2 rounded-full"></div>
                            <div className="text-sm font-normal ">Available for new projects</div>
                        </div>
                        <div className="mt-5">
                            <h2 className="text-2xl font-medium text-center tracking-wide">Building Exceptional User Experiences</h2>
                            <p className="mt-3 text-sm text-white/25 text-center">I specialize in transforming designs into functional high-performing web applications. Let's discuss your new project</p>
                        </div>
                        <div className="flex flex-col md:flex-row mt-3 gap-3">
                            <button className="flex font-medium bg-transparent border border-white/20 px-3 py-2 rounded-lg text-sm gap-1 items-center justify-center">
                                <span>Explore My Work</span>
                                <ArrowDown className='h-4 w-4' />
                            </button>
                            <button className="flex font-medium bg-white text-slate-900 px-3 py-2 rounded-lg text-sm gap-1 items-center justify-center">
                                <span>👋</span>
                                <span>Let's Connect</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;
