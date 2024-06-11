import React, { useContext, useRef } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext'
import nav_drop_down from '../Assets/nav_dropdown.png'

const Navbar = () => {
    const [menu, setmenu] = useState("Shop");
    const { getTotalCartItems } = useContext(ShopContext)
    const menuRef = useRef();

    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }

    return (
        <div className='navbar'>

            <div className='nav-logo'>
                <Link className='nav-logo-link' style={{ textDecoration: 'none' }} to='/' onClick={() => { setmenu("Shop") }}>

                    <img src={logo} alt="" />
                    <p>JustShop</p>
                </Link>
            </div>

            <img className='nav-dropdown' onClick={dropdown_toggle} src= {nav_drop_down} alt="" />
            <ul ref={menuRef} className="nav-menu">
                <li onClick={() => { setmenu("Shop") }}> <Link style={{ textDecoration: 'none' }} to='/'>Shop</Link> {menu === 'Shop' ? <hr /> : <></>} </li>
                <li onClick={() => { setmenu("Mens") }}> <Link style={{ textDecoration: 'none' }} to='/mens'>Men</Link> {menu == 'Mens' ? <hr /> : <></>} </li>
                <li onClick={() => { setmenu("Womens") }}> <Link style={{ textDecoration: 'none' }} to='/womens'>Women</Link> {menu == 'Womens' ? <hr /> : <></>} </li>
                <li onClick={() => { setmenu("Kids") }}> <Link style={{ textDecoration: 'none' }} to='/kids'>Kids</Link> {menu == 'Kids' ? <hr /> : <></>}</li>
            </ul>

            <div className="nav-login-cart">
                {localStorage.getItem('auth-token')
                ? <button onClick={() => {localStorage.removeItem('auth-token'); window.location.replace('/')}}>Logout</button> 
                : <Link to='/login'> <button>Login</button> </Link> }
                <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                <div className='nav-cart-count'>{getTotalCartItems()}</div>
            </div>
        </div>
    )
}

export default Navbar
