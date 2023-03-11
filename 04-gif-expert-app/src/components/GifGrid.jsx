import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifItem } from './GifItem'

export const GifGrid = ({category}) => {
    const {gifs, isLoading} = useFetchGifs(category)
  return (
    <>
        <h3>{category}</h3>
        <section className='card-grid'>
            {isLoading 
                ? <h3>Loading...</h3>
                : gifs.map((image) => 
                    <GifItem 
                        key={image.id}
                        {...image}
                    /> )
            }
        </section>
    </>
  )
}
