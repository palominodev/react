import React, { useContext } from 'react'
import { UserContext } from './context/UserContext'

export const HomePage = () => {
  const {name} = useContext(UserContext)
  return (
    <h1>HomePage : {name}</h1>
  )
}
