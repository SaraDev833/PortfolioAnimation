import { twMerge } from "tailwind-merge";
import { TechIcon } from "./TechIcon";

const ToolBox = ({ items, itemsWrap }) => {
    return (
        <div className="flex w-full">
            <div className="flex flex-none gap-9 ml-2 py-2 w-full" style={{ maskImage: "linear-gradient(to right,transparent,black 3%,black 70%, transparent)" }}>
                {items.map(item => {
                    return (
                        <div key={item.name} className={twMerge("inline-flex px-4 py-2.5 bg-transparent gap-2 border border-white/20 rounded-xl justify-center items-center " , itemsWrap)}>
                            <TechIcon component={item.iconType} />
                            <span className="font-medium text-sm">{item.name}</span>
                        </div>

                    )
                })}
            </div>
        </div>
    );
};

export default ToolBox;
