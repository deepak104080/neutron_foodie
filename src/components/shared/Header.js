import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import {setLogout} from '../User/actionLogin';

const Header = () => {
  const dispatch = useDispatch();
  const loginData = useSelector(state => state.login);
  console.log('Header---------------------', loginData.loginDataRedux)

  const logoutFn = () => {
    console.log('---------logout------------');
    //redux update - loginData
    dispatch(setLogout());
  }

  return (
    <header id="header" class="header d-flex align-items-center">
    <div class="container d-flex align-items-center justify-content-between">

      <Link to='/'  class="logo d-flex align-items-center me-auto me-lg-0">
        
        {/* <img src="assets/img/logo.png" alt=""> */}
        <h1>Foodie<span>.</span></h1>
      </Link>

      <nav id="navbar" class="navbar">
        <ul>
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#events">Events</a></li>
          <li><a href="#chefs">Chefs</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li class="dropdown"><a href="#"><span>Drop Down</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
            <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li class="dropdown"><a href="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#">Drop Down 2</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
            </ul>
          </li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <Link to="/cart" class="btn-book-a-table" >Cart</Link>

      <span>
        {
          loginData.loginDataRedux ? (
            <>
              <button onClick={logoutFn} class="btn-book-a-table" >Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" class="btn-book-a-table" >Login</Link>
              <Link to="/registration" class="btn-book-a-table">Register</Link>
            </>
          )
        }
        
      </span>
      <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
      <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>

    </div>
  </header>
  )
}

export default Header
