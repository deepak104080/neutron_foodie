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
          <li><Link to="">Home</Link></li>
          <li><Link to="">About</Link></li>
          <li><Link to="">Gallery</Link></li>
          <li class="dropdown"><a href="#"><span>Admin</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
            <ul>
              <li><Link to="/addrestaurant">Add Restaurant</Link></li>
              
            </ul>
          </li>
          <li><Link to="">Contact</Link></li>
          <li><Link to="">Profile</Link></li>
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
