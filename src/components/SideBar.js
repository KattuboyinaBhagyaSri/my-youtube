import React from 'react'
import { useSelector } from 'react-redux'

const SideBar = () => {
  const isOpenMenu = useSelector((store) => store.app.isMenuOpen)

  if(!isOpenMenu) return null
  return (
    <div className='shadow-lg p-2 m-2 w-48'>
       <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Videos</li>
      </ul>
      <h1 className='font-bold pt-2'>Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Movies</li>
        <li>Games</li>
      </ul>
      <h1 className='font-bold pt-2'>History</h1>
      <ul>
        <li>Likes</li>
        <li>Saved Videos</li>
        <li>Playlists</li>
      </ul>
    </div>
  )
}

export default SideBar