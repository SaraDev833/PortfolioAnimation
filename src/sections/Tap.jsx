import StarIcon from "@/assets/icons/star.svg"
import { Fragment } from "react"

const items = [
  "performant",
  "accessible",
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
      <div className="overflow-x-clip bg-gradient-to-r from-emerald-300 to-sky-400 py-3 gap-4 -rotate-3 -mx-1">
        {/* Masked gradient for clipping effect */}
        <div
          style={{
            animationDuration: '10s',

          }}
          className="flex flex-none gap-4 -translate-x-0 animate-move-left"
        >
          {/* Render the items twice */}
          {[...new Array(2)].fill(0).map((_, i) => (
            <Fragment key={i}>
              {items.map(item => (
                <div key={item} className="flex justify-center items-center gap-1 ">
                  <span className='whitespace-nowrap uppercase text-slate-900 font-bold text-sm'>{item}</span>
                  <StarIcon className="text-slate-900" />
                </div>
              ))}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Tap
