import React, { useContext } from 'react'
import { UserContext } from './context/UserContext'

export const LoginPage = () => {
  const {user} = useContext(UserContext)
  return (
    <>
      <h1>LoginPage</h1>
      <pre>
        {JSON.stringify(user,null, 4)}
      </pre>
    </>
  )
}
