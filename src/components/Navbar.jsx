import { navIcons, navLinks } from "#constants"
import { useWindowStore } from "#store/window"
import dayjs from "dayjs"
import { useState, useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(useGSAP)

const Navbar = () => {
    const { openWindow } = useWindowStore()
    const [hoveredIndex, setHoveredIndex] = useState(null)
    const navRef = useRef(null)
    const pillRef = useRef(null)

    const handleMouseEnter = (index, e) => {
        setHoveredIndex(index)
        
        if (!navRef.current || !pillRef.current) return
        
        const targetRect = e.currentTarget.getBoundingClientRect()
        const navRect = navRef.current.getBoundingClientRect()

        gsap.to(pillRef.current, {
            x: targetRect.left - navRect.left,
            y: targetRect.top - navRect.top,
            width: targetRect.width,
            height: targetRect.height,
            opacity: 1,
            duration: 0.4,
            ease: "power3.out",
            overwrite:true
        })
    }

    const handleMouseLeave = () => {
        setHoveredIndex(null)
        if (pillRef.current) {
            gsap.to(pillRef.current, {
                opacity: 0,
                duration: 0.3,
                ease: "power2.inOut",
                overwrite:true
            })
        }
    }

    return (
        <nav ref={navRef} onMouseLeave={handleMouseLeave} className="fixed top-2 left-2 right-2 rounded-2xl bg-white/50 backdrop-blur-3xl p-2 px-5 select-none opacity-80 z-50 flex justify-between items-center shadow-sm ">
            
            <div 
                ref={pillRef} 
                className="nav-pill"
            />

            <div className="flex items-center gap-5 max-sm:w-full max-sm:justify-center relative z-10 opacity-100 ">
                <div className="flex items-center gap-2">
                    <img src="/images/logo.svg" alt="logo"/>
                    <p className="font-bold cursor-pointer hover:opacity-80">Rishabh's Portfolio</p>
                </div>

                <ul className="flex items-center max-sm:hidden gap-1" onMouseLeave={handleMouseLeave}>
                    {navLinks.map(({id, name, type}, index) => (
                        <li 
                            key={id} 
                            onClick={() => openWindow(type)}
                            onMouseEnter={(e) => handleMouseEnter(index, e)}
                            className="relative px-3 py-1 cursor-pointer"
                        >
                            <p className="relative z-10 text-sm font-medium no-underline">{name}</p>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="flex items-center gap-5 max-sm:hidden relative z-10">
                <ul className="flex items-center gap-1" onMouseLeave={handleMouseLeave}>
                    {navIcons.map(({id, img}, index) => {
                        const iconHoverIndex = index + navLinks.length;
                        return (
                        <li 
                            key={id}
                            onMouseEnter={(e) => handleMouseEnter(iconHoverIndex, e)}
                            className="relative px-2 py-1 cursor-pointer flex items-center justify-center"
                        >
                            <img src={img} alt={`icon-${id}`} className="icon-hover relative z-10 opacity-70" />
                        </li>
                    )})}
                </ul>
                <div 
                    className="relative px-3 py-1 cursor-pointer" 
                    onMouseEnter={(e) => handleMouseEnter(999, e)} 
                    onMouseLeave={handleMouseLeave}
                >
                    <time className="relative z-10 text-sm font-medium text-black">{dayjs().format("ddd MMM D h:mm A")}</time>
                </div>
            </div>
        </nav>
    )
}

export default Navbar