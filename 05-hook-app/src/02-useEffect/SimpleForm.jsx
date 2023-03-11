import { useEffect, useState } from "react"
import { Message } from "./Message"

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: "",
        email: "",
    })

    const { username, email } = formState

    const onInputChange = ({target}) => {
        const {name,value} = target
        setFormState({
            ...formState,
            [name]: value
        })
    }


    useEffect(() => {
    //   console.log('useEffect called')
    },[])

    useEffect(() => {
    //   console.log('useEffect CHANGE')
    },[formState])

    useEffect(() => {
    //   console.log('useEffect CHANGE EMAIL')
    },[formState.email])
    
    
    


    return (
        <>
            <h1>Formulario Simple</h1>
            <hr />
            <input 
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
                />
            <input 
                type="email" 
                className="form-control mt-2"
                placeholder="jeremy@gmail.com"
                name="email" 
                value={email}
                onChange={onInputChange}
                />
            {
                (username === 'jeremy') && <Message />
            }
        </>
  )
}
