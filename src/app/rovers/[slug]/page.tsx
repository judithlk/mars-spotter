import fetchManifest from "@/api/rovers/route"
import { useState, useEffect } from "react"
import "@/app/globals.css"
import { orbitron, josefin_sans } from "@/app/fonts"

export default async function Rover({params,} : {params: {slug: string}}) {
    const result = await fetchManifest(params.slug)
    const rover = result.photo_manifest
    const url = 'https://en.wikipedia.org/wiki/' + rover.name + '_(rover)'
    
    return (
        <div className={`w-[100%]md:w-[78vw] md:ml-[20vw] p-10 text-xl ${josefin_sans.className}`}>
            <h1 className={`text-2xl ${orbitron.className}`}>{rover.name}</h1>
            <h1>Launched on: {rover.launch_date}</h1>
            <h1>Landed on: {rover.landing_date}</h1>
            <h1>It is curently {rover.status}</h1>
            <span>{rover.name} has taken a total of {rover.total_photos} photos since its launch date.</span>
            <h1>Date of most recent photos: {rover.max_date}</h1>
            <span>Read more about {rover.name} <a href={url} target="_blank">here</a></span>
        </div>
    )
}