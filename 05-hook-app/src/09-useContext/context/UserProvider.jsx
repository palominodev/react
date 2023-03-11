import React from 'react'
import { UserContext } from './UserContext'

const user = {
    id: 123,
    name: 'Jeremy'
}

export const UserProvider = ({children}) => {
  return (
    <UserContext.Provider value={user}>
        { children }
    </UserContext.Provider>
  )
}
