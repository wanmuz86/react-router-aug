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

                <li><NavLink to="/about" className={({ isActive, isPending }) =>
                    isActive ?
                        "active"
                        : isPending ?
                            "pending"
                            : ""}>About</NavLink></li>
                <li><NavLink to="/products" className={({ isActive, isPending }) =>
                    isActive ?
                        "active"
                        : isPending ?
                            "pending"
                            : ""}>Products</NavLink></li>

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