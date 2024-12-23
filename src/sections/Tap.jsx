import StartIcon from "@/assets/icons/star.svg"
 
const items =[
    "performant",
    "Accessible",
    "secure",
    "interactive",
    "scalable",
    "user friendly",
    "responsive",
    "maintainable",
    "search optimized",
    "usable",
    "reliable"
]

const Tap = () => {
  return (
    <div className='py-16'>
      <div className=" overflow-x-clip bg-gradient-to-r from-emerald-300 to-sky-400 py-3 gap-4 -rotate-3 -mx-1" >
        <div style={{maskImage:"linear-gradient(to right , transparent , black 10% ,black 90% , transparent )"}} className="flex justify-evenly">
        {items.map(item =>(
          <div key={item} className="flex justify-center items-center gap-1">
            <span className='whitespace-nowrap uppercase text-slate-900 font-bold text-sm'>{item}</span>
                <StartIcon className="text-slate-900"/>
            </div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default Tap
