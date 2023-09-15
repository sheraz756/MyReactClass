import React, { useState,useEffect} from 'react'
import styles from './Header.module.css'
import About from '../About/About'
const Header = () => {
  const [count,setCount] = useState(0)
  const [show,setShow] = useState(false)
  const handleCount = ()=>{
    setCount(count+1)
    setShow(true)

   
  }
  useEffect(()=>{
    setShow(false)
    alert('you add a number')
   
  },[count])
  return (
   <>
    <div>{count}</div>
    <button onClick={handleCount}>Count Here</button>
    <About />
    </>
  )
}

export default Header