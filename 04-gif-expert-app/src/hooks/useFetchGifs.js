import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"

export const useFetchGifs = (category) => {
    const [gifs, setGifs] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    const fetchGifs = async () => {
        const data = await getGifs(category)
        setGifs(data)
        setTimeout(() => {
            setIsLoading(false)
        },1000);
    }

    useEffect(() => {
        fetchGifs()
    }, [category])
    
  return {
    gifs,
    isLoading
  }
}
