"use client"
import { useState } from "react"
import "../app/globals.css"
import fetchQuery from "@/api/photos/route"

export default function Search({ setQuery }) {
    // const [search, setSearch] = useState({date: "", rover: ""})

    function handleSubmit(event) {
        // console.log(event)
        event.preventDefault()
        
        // console.log(event.target.date.value)
        setQuery({
            date: event.target.date.value,
            rover: event.target.rover.value 
        })
    }

    const today = new Date().toISOString().split('T')[0]
    // console.log(today)

    function toggleForm() {
        document.getElementById('the-form').style.display = "flex"
        document.getElementById('search-icon').style.display = "none"
    }

    function toggleSearch() {
        document.getElementById('the-form').style.display = "none"
        document.getElementById('search-icon').style.display = "block"
    }


    return(
        <div className="md:float-right w-[100%] text-sm md:text-base p-3 pt-0 my-2 mb-4">
            <form id="the-form" onSubmit={(e) => handleSubmit(e)} className="w-[100%] container hidden bg-black bg-opacity-80 p-3 justify-end">
                <div className="m-1 mt-0 md:m-2">
                    <label htmlFor="date-query" className="block mt-2">Select date:</label>
                    <input type="date" name="date" id="date" className="m-2 text-red-800" max={today} />
                </div>

                <div className="m-1 md:m-2 pt-3">
                    <h1>Select rover:</h1>
                    <div className="md:flex md:flex-wrap ">
                        <div className="m-1 md:m-3">
                            <input type="radio" name="rover" id="rover1" value="curiosity" />
                            <label htmlFor="rover1">Curiosity</label>
                        </div>
                        <div className="m-1 md:m-3">
                            <input type="radio" name="rover" id="rover2" value="opportunity" />
                            <label htmlFor="rover2">Opportunity</label>
                        </div>
                        <div className="m-1 md:m-3">
                            <input type="radio" name="rover" id="rover3" value="perseverance" defaultChecked />
                            <label htmlFor="rover3">Perseverance</label>
                        </div>
                        <div className="m-1 md:m-3">
                            <input type="radio" name="rover" id="rover4" value="spirit" />
                            <label htmlFor="rover4">Spirit</label>
                        </div>
                    </div>
                </div>
                <div className="m-4 ml-5">
                    {/* <button type="button" onClick={handleSubmit}>Submit</button> */}
                    <input type="submit" value="Submit" className="bg-gray-500 p-2 cursor-pointer hover:bg-red-800" onClick={toggleSearch}/>
                </div>
            </form>
            <div onClick={toggleForm} id="search-icon" className="float-right">
                <i>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </i>
            </div>
        </div>
    )
}