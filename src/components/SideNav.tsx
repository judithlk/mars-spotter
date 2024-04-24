'use client'
import "../app/globals.css"
import Link from "next/link"
import { orbitron } from "@/app/fonts"
import { josefin_sans } from "@/app/fonts"

export default function SideNav() {

    const showNav = () => {
        if(document.getElementById('my-info')!.style.display == 'none') {
            document.getElementById('nasa-rovers')!.style.display = "block"
            document.getElementById('my-info')!.style.display = "block"
        } else if(document.getElementById('my-info')?.style.display == 'block') {
            document.getElementById('nasa-rovers')!.style.display = "none"
            document.getElementById('my-info')!.style.display = "none"
        }
    }
    
    return (
        <div className="relative w-[100vw]  md:float-left md:h-[100%] md:w-[20vw] bg-red-800 md:fixed p-5 text-center md:text-left">
            <div>
                <Link href="/"><h1 className={`text-white text-xl md:text-3xl ${orbitron.className}`}>Mars Spotter</h1></Link>
                <span className={`${josefin_sans.className}`}>Enjoy the sights of Mars from NASA's Rovers.</span>
            </div>
            <div className={`mt-10 md:mt-20 text-xs md:text-base hidden md:block ${josefin_sans.className}`} id="nasa-rovers">
                <h1>The ROVERS</h1>
                <div>
                    <Link href="/rovers/curiosity">
                        <h1 className="my-2 hover:underline hover:underline-offset-8 hover:font-semibold">CURIOSITY</h1>
                    </Link>
                    <Link href="/rovers/opportunity">
                        <h1 className="my-2 hover:underline hover:underline-offset-8 hover:font-semibold">OPPORTUNITY</h1>
                    </Link>
                    <Link href="/rovers/perseverance">
                        <h1 className="my-2 hover:underline hover:underline-offset-8 hover:font-semibold">PERSEVERANCE</h1>
                    </Link>
                    <Link href="/rovers/spirit">
                        <h1 className="my-2 hover:underline hover:underline-offset-8 hover:font-semibold">SPIRIT</h1>
                    </Link>
                </div>
            </div>

            <div className="md:absolute md:bottom-5 hidden md:block" id="my-info">
                <h1 className="text-sm">Built by <a href="https://judithyusuf.netlify.app" target="_blank" className="underline font-semibold">Judith Yusuf</a></h1>
                <span className="text-xs">View source code on <a href="#" className="underline">Github</a></span>
            </div>
                <div className="md:hidden mx-3 mt-3 " onClick={showNav}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
        </div>
    )
}