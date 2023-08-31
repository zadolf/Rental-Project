import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg" id='navbar'>
            <div className="container-fluid">
                <a className="navbar-brand fw-bold text-light ps-5" href="#">RenTAm</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menus" aria-controls="menus" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="menus">
                <ul className="navbar-nav fw-bold">
                    <li className="nav-item">
                    <a className="nav-link" aria-current="page" id='nav-link' href="#home">Home</a>
                    </li>
                    <li className="nav-item">
                    <a class="nav-link" id='nav-link' href="#rentals">Rentals</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" id='nav-link' href="#sales">Sales</a>
                    </li><li className="nav-item">
                    <a className="nav-link" id='nav-link' href="#agents">Agents</a>
                    </li><li className="nav-item">
                    <a className="nav-link" id='nav-link' href="#contact">Contact</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" id='nav-link' href="#login">Login</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link d-block d-sm-none" id='nav-link' href="#sign-up">Sign Up</a>
                    </li>
                    <li className="nav-item">
                    <a className="btn nav-link d-none d-md-block" href="#sign-up" id='btn-signup'>Sign Up</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar