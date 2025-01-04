import StarIcon from "@/assets/icons/star.svg"

const AboutInfo = ({title , description}) => {
  return (
    <div>
        <div className="flex items-center gap-4">
      <StarIcon className="size-8 text-cyan-400 "/>
      <span className="font-serif text-3xl">{title}</span>
      </div>
    
        <p className="mt-4 mb-4 text-white/60  text-sm">{description}</p>
     
    </div>
  )
}

export default AboutInfo
