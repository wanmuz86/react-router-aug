import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const NavMenu = () => {
    return (
        <nav>
            <ul>
                <li><NavLink to="/" className={({ isActive, isPending }) =>
                    isActive ?
                        "active"
                        : isPending ?
                            "pending"
                            : ""}>Home</NavLink></li>
            </ul>
            <ul>
                <li><NavLink to="/about" className={({ isActive, isPending }) =>
                    isActive ?
                        "active"
                        : isPending ?
                            "pending"
                            : ""}>About</NavLink></li>
            </ul>
            <ul>
                <li><NavLink to="/contact" className={({ isActive, isPending }) =>
                    isActive ?
                        "active"
                        : isPending ?
                            "pending"
                            : ""}>Contact</NavLink></li>
            </ul>
        </nav>
    )
}

export default NavMenu