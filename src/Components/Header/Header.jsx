import React, { useState } from "react";
import style from './Header.module.scss'
import { Link } from "react-router-dom";
import logo from './img/logo.svg'

export default function Header() {
window.onscroll = function() {myFunction()};
function myFunction() {
  let navBar = document.getElementById('nav-bar')
  if (document.documentElement.scrollTop > 100) {
    navBar.style.position = 'fixed'
    navBar.style.backgroundColor = 'white'
  } else {
    navBar.style.position = 'relative'
  }
}

function openWin(){
  let winContainer = document.getElementById('winContainer')
  winContainer.style.display = 'block'
}
let closeWin = ()=> {
  let winContainer = document.getElementById('winContainer')
  winContainer.style.display = 'none'
}
// ^^ window search ^^

function openLogin() {
  let account = document.getElementById('account')
  account.style.display = 'block'
}
let exit = ()=> {
  let account = document.getElementById('account')
  account.style.display = 'none'
}
// ^^ window login^^

function openCart() {
  let cart = document.getElementById('cart')
  cart.style.display = 'block'
}
let closeCart = ()=> {
  let cart = document.getElementById('cart')
  cart.style.display = 'none'
}
// ^^ window cart ^^
let hover = ()=>{
  let dropDown = document.getElementById('dropDown')
  dropDown.style.display = 'block'
 }

 let leaveHover = ()=>{
  let dropDown = document.getElementById('dropDown')
  dropDown.style.display = 'none'
 }
return (
  <>
  <div className={`${style.sale} p-3 text-center`}>
  Free Delivery on orders over £120. Don’t miss discount.
  </div>
  <header id="nav-bar">
  <nav className="navbar navbar-expand-lg p-4">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"><img src={logo} className="ms-5" alt="logo" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={`collapse navbar-collapse justify-content-around align-items-center`} id="navbarText">
      <ul className={`navbar-nav mb-2 ps-5 mb-lg-0 ${style.List}`}>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item" id="navLink" onMouseMove={hover} onMouseLeave={leaveHover}>
          <Link className="nav-link" to="shop">
            shop
            <ul className="dropdown-menu" id="dropDown">
            <li><Link className="dropdown-item" to="shop">shop1</Link></li>
            <li><Link className="dropdown-item" to="shop2">shop2</Link></li>
          </ul>
          <i className="fa-solid fa-angle-down ms-3"></i>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="about">about</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="order">order tracking</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="contact">contact us</Link>
        </li>
      </ul>
      <div className={`d-flex ${style.icon}`}>
        <span onClick={openLogin} className="pointer-event"><i className="fa-regular fa-user"></i></span>
        <span onClick={openWin}><i className="fa-solid fa-magnifying-glass mx-4"></i></span>
        <span onClick={openCart}><i className="fa-solid fa-bag-shopping"></i></span>
      </div>
    </div>
  </div>
</nav>
  </header>
  <div className={`${style.winfix}`} id="winContainer">
    <div className="container">
      <div className="row justify-content-center">
        <input type="search" placeholder="product search" id="search"/>
        <span onClick={closeWin}><i className="fa-solid fa-xmark"></i></span>
      </div>
    </div>
  </div>
  <div className={`${style.account}`} id="account">
    <div className="container">
      <div className="row">
        <div className={`${style.login} p-4`}>
          <div className="row justify-content-between align-items-center pb-3">
            <div className="col-md-3">
              <h3 className="text-uppercase h4">login</h3>
            </div>
            <div className="col-md-3">
              <span onClick={exit} className="d-block text-end pointer-event"><i className={`fa-solid fa-xmark ${style.pointer}`}></i></span>
            </div>
          </div>
          <form action="#">
            <input type="text" name="username" className={`form-control mb-3 ${style.inb_login}`} placeholder="username or email adress" />
            <input type="password" className={`form-control ${style.inb_login}`} placeholder="password" name="password" id="password" />
            <label htmlFor="remembar me" className="row ps-3 mt-3">
            <input type="checkbox" className="form-check ps-2 " name="remembar me" id="remembar me"/>
            <p className="h6 w-auto">Remambar me</p>
            </label>
            <input type="submit" value={"login"} className="text-light w-100 my-2"/>
            <a href="#">lost your password?</a>
          </form>
          <p className="text-center mt-5">Not a member? <a href="#">Register</a></p>
        </div>
      </div>
    </div>
  </div>
  <div className={`${style.cart ,style.account}`} id="cart">
    <div className="container">
      <div className={`${style.login} p-4`}>
        <div className="row justify-content-between align-items-center">
        <div className="col-md-3">
              <h3 className="text-uppercase h4 d-flex">Cart <span className={`bg-black text-light text-center px-2 ${style.count}`}>0</span></h3>
            </div>
            <div className="col-md-3">
              <span onClick={closeCart} className="d-block text-end"><i className={`fa-solid fa-xmark ${style.pointer}`}></i></span>
            </div>
            <hr />
        </div>
      </div>
    </div>
  </div>
  </>
  )
}
