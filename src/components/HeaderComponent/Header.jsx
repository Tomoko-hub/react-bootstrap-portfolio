import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <div className="logo">
            <h3>Tomoko</h3>
        </div>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/blog">About me</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header