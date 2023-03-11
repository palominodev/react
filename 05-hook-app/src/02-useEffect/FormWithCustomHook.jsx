import { useEffect, useState } from "react"
import { useForm } from "../hooks/useForm"
import { Message } from "./Message"

export const FormWithCustomHook = () => {
    
    // const [formState, setFormState] = useState({
    //     username: "",
    //     email: "",
    //     password: "",
    // })

    // const { username, email, password } = formState

    // const onInputChange = ({target}) => {
    //     const {name,value} = target
    //     setFormState({
    //         ...formState,
    //         [name]: value
    //     })
    // }

    const {username,email,password,terminos, onInputChange, onInputCheck,onReset} = useForm({
        username: "",
        email: "",
        password: "",
        terminos: false
    })


    // useEffect(() => {
    // //   console.log('useEffect called')
    // },[])

    // useEffect(() => {
    // //   console.log('useEffect CHANGE')
    // },[formState])

    // useEffect(() => {
    // //   console.log('useEffect CHANGE EMAIL')
    // },[formState.email])
    
    
    


    return (
        <>
            <h1>Form with custom hook</h1>
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
            <input 
                type="password" 
                className="form-control mt-2"
                placeholder="password"
                name="password"
                value={password}
                onChange={onInputChange}
                />
            <label htmlFor="">
                <p>Terminos y condiciones</p>
                <input
                    type="checkbox"
                    // className="form-control mt-2"
                    placeholder="terminos y condiciones"
                    name="terminos"
                    value={terminos}
                    onClick={onInputCheck}
                    checked={terminos}
                    />
            </label>
            <button
                type="button"
                className="btn btn-primary mt-2"
                onClick={onReset}
            >
                Reset
            </button>
            {
                (username === 'jeremy') && <Message />
            }
        </>
  )
}
