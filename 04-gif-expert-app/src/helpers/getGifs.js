const API_KEY = 'Ekc3t9pLfExeUosJ4jb2Wr9OXNGOca3l'
const LIMIT = 10

export const getGifs = async (category) => {
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?q=${category}&api_key=${API_KEY}&limit=${LIMIT}`)
    const resp = await response.json()
    const {data} = resp

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
           
    }))
    return gifs
}