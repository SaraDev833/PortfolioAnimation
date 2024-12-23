import StarIcon from "@/assets/icons/star.svg"
import SparkleIcon from "@/assets/icons/sparkle.svg"



const Star = ({ rotation, md, lg, sm, xs, rotate  , size, color, sparkle , sparkColor ,sparkRotate}) => {
   

    return (

        <div className={` lg:size-[${lg}px] md:size-[${md}px] sm:size-[${sm}px] xs:size-[${xs}px] `} style={{ transform: `rotate(${rotation}deg)` }}>
            {sparkle ?  <SparkleIcon className ={`${sparkColor} size-3 `} style={{transform: `rotate(${sparkRotate}deg) `}}/>
            :
            <StarIcon className={` size-${size} text-emerald-500    ${color} `} style={{transform: `rotate(${rotate}deg)`}}/>}
        </div>

    )
}

export default Star
