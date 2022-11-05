import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const LogOut = () => {
    const navigate=useNavigate()
    const logout=()=>{
        localStorage.clear()
        navigate('/')
    }
    useEffect(()=>{
        logout()
    })
  return (
<></>  )
}

export default LogOut