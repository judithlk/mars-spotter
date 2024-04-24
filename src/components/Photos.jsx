"use client"
import fetchQuery from "@/api/photos/route"
import { useEffect, useState } from "react"
import Link from "next/link"
import "../app/globals.css"
import { orbitron, josefin_sans } from "@/app/fonts"
import Image from "next/image"


export default function Photos({ param1, param2 }) {
    const [photos,setPhotos] = useState([])

    useEffect(()=> {
        fetchQuery(param1, param2).then((d)=> setPhotos(d.photos))
    },[param1, param2])
    // console.log(photos)

    // const photos = fetchQuery(param1, param2)
    const capName = param2.toUpperCase()
    //console.log(param2)

    return(
        <>
            <h1 className={`text-base text-center block ${orbitron.className}`}>Photos taken by <Link href={`/rovers/` + param2} className="font-semibold">{capName}</Link> on {param1}</h1>
            <div className="px-2 md:px-25 justify-center container w-[100%] flex flex-wrap mt-3">
                {/* {JSON.stringify(photos)} */}
                {photos?.map(item => {
                    return (
                        <Link href={item.img_src} key={item.id} target="_blank">
                            <div className="m-5 rounded-xl relative justify-center text-transparent font-bold hover:text-gray-100">
                                <Image
                                    src={item.img_src}
                                    alt=""
                                    className="rounded-xl transition-all duration-500 hover:scale-110 hover:-rotate-2 hover:opacity-70 w-[60vw] sm:w-[30vw] md:w-[15vw]"
                                />
                                <div className="absolute top-0 text-center md:h-[100%] w-[100%] p-1 md:p-2 rounded-xl md:bg-transparent hover:bg-slate-800 ">
                                    <h1 className={`text-xs md:text-base my-1 lg:my-3 ${josefin_sans.className}`}>Captured by {item.camera.full_name}</h1>
                                </div>
                            </div>
                        </Link>
                    )
                })} 
            </div>
        </>
    )
}