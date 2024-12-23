import mimojiImage from "@/assets/images/memoji-computer.png"
import Image from "next/image"
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg"

import Star from "@/components/Star";

const Hero = () => {
    return (
        <div className="py-24 md:py-30 lg:py-35 relative z-0 overflow-x-clip">
            <div className="absolute inset-0 opacity-5 -z-30" style={{ backgroundImage: `url(${grainImage})` }}></div>
            <div className="h-[420px] w-[420px] hero-ring"></div>
            <div className="sm:h-[620px] sm:w-[620px] hero-ring"></div>
            <div className="md:h-[820px] md:w-[820px] hero-ring"></div>
            <div className="lg:h-[1020px] lg:w-[1020px] hero-ring"></div>
            <div className="lg:h-[1220px] lg:w-[1220px] hero-ring"></div>

            <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
                <Star rotation={10} md={500} lg={550} sm={500} xs={375} rotate={80} size={10} />
            </div>
            <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
                <div className={` lg:size-[530] md:size-[500px] sm:size-[450px] xs:size-[375px] `} style={{ transform: `rotate(180deg)` }}>
                    <div className="h-1 w-1 bg-white/70 rounded-full"></div>
                </div>
            </div>
            <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
                <div className={` lg:size-[534] md:size-[500px] sm:size-[450px] xs:size-[375px] `} style={{ transform: `rotate(-50deg)` }}>
                    <div className="h-1 w-1 bg-white/70 rounded-full"></div>
                </div>
            </div>
            <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
                <div className={` lg:size-[400px] md:size-[500px] sm:size-[450px] xs:size-[375px] `} style={{ transform: `rotate(50deg)` }}>
                    <div className="h-1 w-1 bg-white/70 rounded-full"></div>
                </div>
            </div>
            {/* Second Star */}
            <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
                <Star rotation={-72} md={600} lg={700} sm={400} xs={375} rotate={72} size={14} />
            </div>
            <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
                <div className={` lg:size-[400] md:size-[500px] sm:size-[450px] xs:size-[375px] `} style={{ transform: `rotate(120deg)` }}>
                    <div className="h-2 w-2 bg-white/20 rounded-full"></div>
                </div>
            </div>
            <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
                <Star rotation={180} md={600} lg={550} sm={400} xs={375} rotate={90} size={9} color='text-white' />
            </div>
            <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
                <Star rotation={-25} md={600} lg={700} sm={400} xs={375} rotate={115} size={9} color='text-white/15' />
            </div>
            <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
                <Star rotation={-60} md={600} lg={630} sm={400} xs={375} rotate={72} size={9} color='text-white' sparkle={true} sparkColor='text-white' sparkRotate={58} />
            </div>
            <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
                <Star rotation={60} md={600} lg={630} sm={400} xs={375} rotate={72} size={9} color='text-white' sparkle={true} sparkColor='text-white' sparkRotate={30} />
            </div>




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
