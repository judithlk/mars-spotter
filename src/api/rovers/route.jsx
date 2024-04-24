export default async function fetchManifest(rover) {
    const apiKey = process.env.NASA_API_KEY
    console.log(apiKey)

    const result = await fetch(`https://api.nasa.gov/mars-photos/api/v1/manifests/` + rover + `/?api_key=` + apiKey)

    if(!result.ok) {
        throw new Error('Failed to fetch data')
    }
    
    const data =  await result.json()

    console.log
    
    return data
}