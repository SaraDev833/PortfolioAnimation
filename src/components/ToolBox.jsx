import { twMerge } from "tailwind-merge";
import { TechIcon } from "./TechIcon";
import { Fragment } from "react";

const ToolBox = ({ items , itemsWrapper }) => {
    return (

        <div className=' flex py-2 ' style={{maskImage: 'linear-gradient(to right,transparent,black 10%,black 90% , transparent)'}}>
            <div className={twMerge("flex flex-none gap-6 mb-2 " , itemsWrapper)} >
                {[... new Array(2)].fill(0).map((_ ,i)=>(
                    <Fragment key={i}>
                               {items.map(item => (
                                <div key={item.name} className='inline-flex justify-center items-center py-2 px-3 gap-2 outline-2 outline-white/15 outline rounded-lg'>
                                    <TechIcon component={item.iconType} />
                                    <span>{item.name}</span>
                                </div>
                            ))
                
                            }
                </Fragment>
                ))}
               </div>
        </div>

    );
};

export default ToolBox;
