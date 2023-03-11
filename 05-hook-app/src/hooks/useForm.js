import { useState } from 'react'

export const useForm = (initialState={}) => {
    const [formState, setFormState] = useState(initialState)


    const onInputChange = ({target}) => {
        const {name,value} = target
        setFormState({
            ...formState,
            [name]: value
        })
    }
    const onInputCheck = ({target}) => {
        const {name,checked} = target
        setFormState({
            ...formState,
            [name]:checked
        })
    }

    const onReset = () => {
        setFormState(initialState)
    }

    return {
        ...formState,
        onInputChange,
        onInputCheck,
        onReset
    }
}
