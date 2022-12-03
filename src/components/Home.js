import React from 'react'
import "./Home.css";
import {Outlet} from "react-router-dom"

export default function Home() {
  return (
    <div className='home-wrapper'>
        <Outlet/>
    </div>
  )
}
