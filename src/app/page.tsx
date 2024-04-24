// @ts-nocheck
"use client"
import { useEffect, useState } from "react"
import "./globals.css"
import Search from "../components/Search.jsx"
import Photos from "../components/Photos"


export default function Home() {
  const [query, setQuery] = useState({date: "2024-04-18", rover: "perseverance"})
  //console.log(query)

  return (
    <div className="w-[100vw] md:w-[78vw] md:ml-[20vw] container pb-0 text-red-700">
      <Search {...{query, setQuery}} />
      <Photos param1={query.date} param2={query.rover}  />     
    </div>
  )
}