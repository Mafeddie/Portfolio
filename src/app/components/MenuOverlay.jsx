import React from 'react'
import NavLink from './NavLink'

const MenuOverlay = ({links }) => {
  return (
    // console.log(links),
    <ul className='flex flex-col py-4 items-center'>
        {links.map((link, index) => {
            // console.log(link.path, link.title, index),
            <li key={index}>
            <NavLink href={link.path} title={link.title} />
            </li>
        })}
    <li>
        <h1>One</h1>
        <h1>One</h1>
        <h1>One</h1>
        <h1>One</h1>

    </li>
    </ul>
  )
}

export default MenuOverlay