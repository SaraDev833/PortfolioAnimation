import ArrowUp from "@/assets/icons/arrow-up-right.svg";

const Footer = () => {
    const Links = [
        {
            name: "Github",
            link: "https://github.com/SaraDev833",
        },
        {
            name: "Gmail",
            link: "mailto:your-email@example.com",  // Fix the capitalization here
        },
        {
            name: "WhatsApp",
            link: "https://wa.me/01327409706",  // Ensure this is correct
        }
    ];

    return (
        <div className="relative w-full overflow-x-clip z-0 pt-24 md:pt-30 lg:pt-35">
            <div className="absolute inset-0 w-full h-full bg-emerald-300/30 bottom-0 left-1/2 -translate-x-1/2 -z-10" style={{ maskImage: "radial-gradient(50% 60% at bottom center , black , transparent)" }}></div>
            <div className='container'>
                <div className='flex flex-col lg:flex-row border-t-2 border-white/15 justify-center items-center py-8 lg:justify-between'>
                    <div className="text-sm text-white/60">
                        &copy;<span>2024. All rights reserved</span>
                    </div>
                    <div className="flex flex-col gap-6 mt-6 lg:flex-row lg:m-0 cursor-pointer">
                        {Links.map(link => (
                            <a
                                href={link.link}
                                className="flex gap-1 items-center justify-center text-white font-semibold"
                                key={link.name}
                                target="_blank" // Opens link in new tab
                                rel="noopener noreferrer" // Security best practices for external links
                            >
                                <span>{link.name}</span>
                                <ArrowUp className="h-4 w-4" />  {/* Adjust size of the icon */}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
