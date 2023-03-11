import { useState } from 'react'
import { AddCategory, GifGrid } from './components'
import './styles.css'

export const GifExpertApp = () => {
    const [ categories, setCategories ] = useState([])

    const isRepeat = (category) => {
        const repeat = categories.some(cat => cat === category)
        return !repeat
    }

    const addCategory = (category) => {
        if (!isRepeat(category)) return 
        setCategories([category,...categories,])
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory 
                add={addCategory}
            />

            {
                categories.map((category) => (
                    <GifGrid 
                        key={category} 
                        category={category} />
                ))
            }
        </>
    )  
}
