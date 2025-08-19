import Sidebar from '../../components/Sidebar/Sidebar'
import Feed from '../../components/Feed/Feed'
import './Home.css'
import { useState } from 'react'

export default function Home({ sideBar }) {
  const [category, setCategory] = useState(0) 

  return (
    <>
      <Sidebar sideBar={sideBar} category={category} setCategory={setCategory}/> 
      <div className={`container ${sideBar ? "" : "large-container"}`}>
        <Feed category={category}/> 
      </div>
    </>
  )
}
