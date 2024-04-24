export default async function fetchQuery(x, y) {
    
    const apiKey = process.env.NEXT_PUBLIC_NASA_API
    
    async function fetchPhotos(date, rover) {
        const result = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/` + rover + `/photos?earth_date=` + date + `&api_key=${apiKey}`)
        
        if(!result.ok) {
            throw new Error('Failed to fetch data')
        }
        
        const data =  await result.json()
        
        return data
        
    }
    const data = await fetchPhotos(x, y)
    return data
}
