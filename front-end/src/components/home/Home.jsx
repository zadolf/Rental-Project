import React from 'react'
import './Home.css'
import img1 from '../../assets/buy.png'
import img2 from '../../assets/rent.png'
import img3 from '../../assets/sell.jpg'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import PopularListings from '../listing/PopularListings'
import PopularHostels from '../listing/PopularHostels'


const Home = () => {
  return (
    <>
    <div>
      <Navbar />
      <div className="container-fluid p-5" id="bgdiv">
          <h1 className="text-light text-center">Rent A House Stress Fress</h1>
          <h3 className="text-light text-center">The Best place to find houses to let at a very affordable prices in Cameroon</h3>
          <form className="row p-5 justify-content-center">
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
              <button type="submit" className="btn text-center fw-bold" id="btnsearch" >Search</button>
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
      <PopularListings />
      <div className="container-fluid mt-5">
        <span className='justify-content-center d-inline'>
          <h3 className="fw-bold" id="reviews">What Customers Are Saying</h3>
          <div className="container-sm" id='divhr'>
            <div className="container-sm" id='divhr2'></div>
          </div>
        </span>
      </div>
      <PopularHostels />
      <div className="container-fluid mt-5">
        <span className='justify-content-center d-inline'>
          <h3 className="fw-bold" id="reviews">Latest Articles</h3>
          <div className="container-sm" id='divhr'>
            <div className="container-sm" id='divhr2'></div>
          </div>
        </span>
      </div>
      <Footer />
    </div>
    </>
  )
}

export default Home