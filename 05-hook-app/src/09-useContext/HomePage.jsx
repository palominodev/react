import React, { useContext } from 'react'
import { UserContext } from './context/UserContext'

export const HomePage = () => {
  const {user,setUser} = useContext(UserContext)
  return (
    <>
      <h1>HomePage : {user?.name}</h1>
      <hr />
      <pre>
        { JSON.stringify( user, null, 4 ) }
      </pre>

      <button 
        onClick={() => setUser({id: 123,name: 'Jeremy',email:'jeremy@gmail.com'})}
        className='btn btn-primary'>
        Set user
      </button>
    </>

  )
}
