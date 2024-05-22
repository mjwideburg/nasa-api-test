
export const getPhotoOfTheDay = async () => {
    const url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}`
    const response = await fetch(url)
    return await response.json()
}

export const getAsteroids = async (date: string) => {
    const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${date}&end_date=${date}&api_key=${process.env.REACT_APP_NASA_API_KEY}`
    const response = await fetch(url); 
    return await response.json();
}