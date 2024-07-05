import React from "react";
import style from './Footer.module.scss'

export default function Footer() {
  return (
  <>
    <footer className="bg-black text-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className={`p-3 ${style.first}`}>
            <h2>about shop</h2>
            <p>Javax is one of the biggest international fashion companies, one of the world’s largest distribution groups.</p>
            <img src={require('./img/footer_logo.png')} alt="logo Footer" />
            </div>
          </div>
          <div className="col-lg-3">
            <div className={`p-3 row ${style.second}`}>
              <h2>shop pages</h2>
              <div className="col-md-5">
                <ul>
                  <li>Home</li>
                  <li>category</li>
                  <li>pages</li>
                  <li>contact</li>
                  <li>pricing</li>
                </ul>
              </div>
              <div className="col-md-7">
                <ul>
                  <li>Help Center</li>
                  <li>Community</li>
                  <li>blog</li>
                  <li>Forums</li>
                  <li>Meetups</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className={`p-3 ${style.first}`}>
              <h2>get in touch</h2>
              <div className={`${style.three}`}>
              <ul>
                <li>+123 488 9652</li>
                <li>25 West 21th Street, Miami FL, USA</li>
                <li>info@novaworks.net</li>
                <li>Mon-Fri: 10:00 - 18:00</li>
              </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className={`p-3 ${style.first}`}>
              <h2>newsletter</h2>
              <div className={`${style.four}`}>
                <p>Sign up to get 10% off your first order and stay up to date special offers and news</p>
                <form action="#" className="d-flex flex-column justify-content-center">
                  <input type="text" placeholder="Enter your email adress"/>
                  <button>subscripe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </>
  )
}
