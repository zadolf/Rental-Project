import React from 'react'
import './Home.css'
import img1 from '../../assets/buyhouse.jpg'
import img2 from '../../assets/manpay.jpg'
import img3 from '../../assets/sellhouse.png'
import img4 from '../../assets/management-rent1.png'


const Home = () => {
  return (
    <>
    <div>
      <div className="container-fluid" id="bgdiv">
          <h1 className="text-light text-center">Rent A House Stress Fress</h1>
          <h3 className="text-light text-center m-4">The Best place to find houses to let at a very affordable prices in Cameroon</h3>
          <form className="row g-3 p-3 justify-content-center">
            <div className="col-auto">
              <input type="text" className="form-control" id="locationSearch" placeholder="Enter Location" />
            </div>
            <div className="col-auto">
              <select className="form-select" id='select'>
                <option selected disabled>Price Range</option>
                <option value="1">50,000-150,000</option>
                <option value="2">150,000-250,000</option>
                <option value="3">250,000-350,000</option>
                <option value="4">350,000-500,000</option>
                <option value="5">500,000-1,000,000</option>
                <option value="6">1,000,000+</option>
              </select>
            </div>
            <div className="col-auto">
              <button type="submit" className="btn text-light text-center fw-bold" id="btnsearch" >Search</button>
            </div>
          </form>
        </div>
      </div> 
      <h2 className="text text-center pt-5">We Can Help You</h2>
      <div class="container text-center mt-5">
        <div class="row">
          <div class="col">
            <div className="card">
              <div className="card-body">
                <img src={img1} alt="Buy A Home" />
                <h5 className="card-title p-3 fw-bold"  style={{color: 'rgb(07, 05, 71)'}}>Buy A Home</h5>
                <p>Find your place with an immersive photo experience and the most listing, including things you won't find anywhere else.</p>
                <a href="#" className="btn" id='cardsearch'>Search</a>
              </div>
            </div>
          </div>
          <div class="col">
            <div className="card">
              <div className="card-body">
              <img src={img2} alt="Rent A Home" />
                <h5 className="card-title p-3 fw-bold"  style={{color: 'rgb(07, 05, 71)'}}>Rent A Home</h5>
                <p>Find your place with an immersive photo experience and the most listing, including things you won't find anywhere else.</p>
                <a href="#" className="btn" id='cardsearch'>Search</a>
              </div>
            </div>
          </div>
          <div class="col">
            <div className="card">
              <div className="card-body">
              <img src={img3} alt="Sell A Home" />
                <h5 className="card-title p-3 fw-bold" style={{color: 'rgb(07, 05, 71)'}}>Sell A Home</h5>
                <p>Find your place with an immersive photo experience and the most listing, including things you won't find anywhere else.</p>
                <a href="#" className="btn" id='cardsearch'>Search</a>
              </div>
            </div>
          </div>
      </div>
      <div className="container-fluid mt-5">
        <span className="" id="hrspan">
          <h2 className="fw-bold">Popular Listings</h2>
          <div id='hr'></div>
        </span>
      </div>
      <div className="container-fluid mt-5">
        <span className='justify-content-center d-inline'>
          <h3 className="fw-bold" id="reviews">What Customers Are Saying</h3>
          <div className="container-sm" id='divhr'>
            <div className="container-sm" id='divhr2'></div>
          </div>
        </span>
      </div>
      <div className="container-fluid mt-5">
        <span className="" id="hrspan">
          <h2 className="fw-bold">Popular Hostels</h2>
          <div id='hr'></div>
        </span>
      </div>
      <div className="container-fluid mt-5">
        <span className='justify-content-center d-inline'>
          <h3 className="fw-bold" id="reviews">Latest Articles</h3>
          <div className="container-sm" id='divhr'>
            <div className="container-sm" id='divhr2'></div>
          </div>
        </span>
      </div>
      <div className="mt-5" id="footer">
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
    </div>
    </>
  )
}

export default Home