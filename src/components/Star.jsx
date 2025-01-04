import StarIcon from "@/assets/icons/star.svg"
import SparkleIcon from "@/assets/icons/sparkle.svg"



const Star = ({ rotation, md, lg, sm, xs, rotate, size, color, sparkle, sparkColor, sparkRotate, OrbitalSpinDuration }) => {
    
     
    return (
        <div className="animate-spin" style={{ animationDuration: OrbitalSpinDuration }}>
            <div className={`  lg:size-[${lg}px] md:size-[${md}px] sm:size-[${sm}px] xs:size-[${xs}px] `} style={{ transform: `rotate(${rotation}deg)` }}>
                {sparkle ? <SparkleIcon className={`${sparkColor} size-4 `} style={{ transform: `rotate(${sparkRotate}deg) ` }} />
                    :
                    <StarIcon className={` size-${size} text-cyan-500 animate-spin  ${color} size-12`} style={{ transform: `rotate(${rotate}deg)`, animationDuration: '10s' }} />}
            </div>
        </div>

    )
}

export default Star
