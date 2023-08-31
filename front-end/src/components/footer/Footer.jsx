import React from 'react'
import './Footer.css'
import img4 from '../../assets/management-rent1.png'

const Footer = () => {
  return (
        <div className="container-fluid mt-5" id="footer">
        <div className="row">
          <div className="col-3">
            <h5 className="text-light pt-5">Follow Us On</h5>
            <span className="">
            <i className="bi bi-facebook"></i>
            <i className="bi bi-youtube"></i>
            <i className="bi bi-twitter"></i>
            <i className="bi bi-linkedin"></i>
            <i className="bi bi-pinterest"></i>
            </span>
            <ul className="navbar-nav text-light justify-content-center align-item-center py-3">
              <li className="nav-item">
                <a href="#" className="nav-link">Blogs</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">About Us</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">Terms and Conditions</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">Privacy Policy</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">Support</a>
              </li>
            </ul>
          </div>
          <div className="col-5 justify-content-center align-items-center pt-5">
            <img id='footerimage' src={img4} alt="Rental House" />
            <p className="text-light fw-bold">&copy;Copyright GLOTECFA 2023 </p>
          </div>
          <div className="col-4">
            <h4 className="text-light pt-3">Message Us</h4>
            <form className="row g-3 p-3 justify-content-center">
            <div className="col-auto">
              <input type="email" className="form-control text-light" id="email-input" placeholder="Email" />
            </div>
            <div className="col-auto">
              <textarea className="form-control text-light" name="message" id="textarea" cols="30" rows="3" placeholder="Enter Message"></textarea>
            </div>
            <div className="col-auto">
              <button type="submit" className="btn text-center fw-bold" id="btnsend" >SEND</button>
            </div>
          </form>
          </div>
        </div>
      </div>
  )
}

export default Footer