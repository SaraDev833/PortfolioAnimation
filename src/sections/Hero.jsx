import mimojiImage from "@/assets/images/memoji-computer.png"
import Image from "next/image"
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg"

import Star from "@/components/Star";

const Hero = () => {
    return (
        <div className="pt-24 md:pt-30 lg:pt-35 relative z-0 overflow-x-clip" id='home'>
            <div className="absolute inset-0 " style={{ maskImage: "linear-gradient(to bottom, transparent, black 3%, black 70%, transparent)" }}>
                <div className="absolute inset-0 opacity-5 -z-30" style={{ backgroundImage: `url(${grainImage})` }}></div>
                <div className="h-[420px] w-[420px] hero-ring"></div>
                <div className="sm:h-[620px] sm:w-[620px] hero-ring"></div>
                <div className="md:h-[820px] md:w-[820px] hero-ring"></div>
                <div className="lg:h-[1020px] lg:w-[1020px] hero-ring"></div>
                <div className="lg:h-[1220px] lg:w-[1220px] hero-ring"></div>
                <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
                    <Star rotation={10} md={500} lg={550} sm={500} xs={375} rotate={80} size={18} OrbitalSpinDuration="24s" />
                </div>
                <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
                    <div className={` lg:size-[530] md:size-[500px] sm:size-[450px] xs:size-[375px] `} style={{ transform: `rotate(180deg)` }}>
                        <div className="h-1 w-1 bg-white/70 rounded-full"></div>
                    </div>
                </div>
                <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
                    <Star rotation={-72} md={600} lg={700} sm={400} xs={375} rotate={72} size={14} OrbitalSpinDuration="20s" />
                </div>
                <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
                    <Star rotation={-60} md={600} lg={630} sm={400} xs={375} rotate={72} size={9} color='text-white' sparkle={true} sparkColor='text-white' sparkRotate={58} OrbitalSpinDuration="30s" />
                </div>
                <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
                    <div className={` lg:size-[600px] md:size-[500px] sm:size-[450px] xs:size-[375px] `} style={{ transform: `rotate(-18deg)` }}>
                        <div className="h-5 w-5 bg-white/15 rounded-full"></div>
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
                    <div className={` lg:size-[700] md:size-[500px] sm:size-[450px] xs:size-[375px] `} style={{ transform: `rotate(145deg)` }}>
                        <div className="h-2 w-2 bg-white/15 rounded-full"></div>
                    </div>
                </div>
                <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
                    <div className={` lg:size-[400] md:size-[500px] sm:size-[450px] xs:size-[375px] `} style={{ transform: `rotate(120deg)` }}>
                        <div className="h-2 w-2 bg-white/20 rounded-full"></div>
                    </div>
                </div>
                <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
                    <Star rotation={180} md={600} lg={550} sm={400} xs={375} rotate={90} size={9} color='text-white' OrbitalSpinDuration="18s" />
                </div>
                <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
                    <Star rotation={-25} md={600} lg={700} sm={400} xs={375} rotate={115} size={9} color='text-white/15' OrbitalSpinDuration="22s" />
                </div>
                <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
                    <Star rotation={-50} md={600} lg={100} sm={400} xs={375} rotate={10} size={20} color='text-cyan-400/15' OrbitalSpinDuration="20s" />
                </div>

                <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
                    <Star rotation={60} md={600} lg={630} sm={400} xs={375} rotate={72} size={9} color='text-white' sparkle={true} sparkColor='text-white' sparkRotate={30} OrbitalSpinDuration="26s" />
                </div>
                <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
                    <Star rotation={120} md={600} lg={640} sm={400} xs={375} rotate={72} size={14} color='text-red-400' sparkle={true} sparkColor='text-white/80' sparkRotate={57} OrbitalSpinDuration="19s" />
                </div>
                <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
                    <Star rotation={100} md={600} lg={700} sm={400} xs={375} rotate={80} size={14} color='text-white/20' OrbitalSpinDuration="22s" />
                </div>


            </div>

            <div className="container">
                <div className="flex flex-col items-center justify-center w-full">

                    <div className="flex flex-col items-center justify-center max-w-lg">
                        <Image src={mimojiImage} height={150} width={150} alt='' />
                        <div className="z-10 px-2 py-1 bg-black rounded-full flex items-center justify-center gap-2">
                            <div className="bg-green-500 size-2 rounded-full relative ">
                                <div className="absolute bg-green-500 inset-0 animate-ping-lg rounded-full"></div>
                            </div>
                            <div className="text-sm font-normal ">Available for new projects</div>
                        </div>
                        <div className="mt-5 ">
                            <h2 className=" font-serif  text-2xl font-medium text-center tracking-wider lg:text-4xl">Building Exceptional User Experiences</h2>
                            <p className="lg:my-6 mt-3 text-sm text-white/60 text-center lg:text-lg">I specialize in transforming designs into functional high-performing web applications. Let's discuss your new project</p>
                        </div>
                        <div className="flex flex-col md:flex-row mt-3 gap-3 ">
                            <a href='#contact' className="z-10 lg:text-lg flex font-medium bg-transparent border-2 border-white/20 px-3 py-2 rounded-lg text-sm gap-1 items-center justify-center">
                                <span>Explore My Work</span>
                                <ArrowDown className='h-4 w-4' />
                            </a>


                            <a target='_blank' href='https://github.com/SaraDev833' className="flex  cursor-pointer z-10 font-medium bg-white text-slate-900 px-3 py-2 rounded-lg text-sm gap-1 items-center justify-center lg:text-lg">
                                <span>👋</span>
                                <span>Let's Connect</span>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;
