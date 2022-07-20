import axios from 'axios';
import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import {setUrl} from '../User/actionLogin';

const Cart = () => {
    const dispatch = useDispatch();
    const loginData = useSelector(state => state.login);
    console.log('Header---------------------', loginData.loginDataRedux);
    const navigate = useNavigate();
    const orderData = useLocation();


    useEffect(() => {
        //checking login
        if(!loginData.loginDataRedux) {
            //save current url
            dispatch(setUrl(window.location.pathname));
            navigate('/login');
        }
    }, [loginData.loginDataRedux])

    return (
        <>
            <section class="align-items-center section-bg">
                <div class="container">
                    <h4 data-aos="fade-up">Your order has been placed successfully.</h4>
                </div>
            </section>

            <section class="align-items-center section-bg">
                <div class="container">
                    <h4>Order ID - {}</h4>
                    <h3>Restaurant - {}</h3>
                </div>
            </section>
        </>
    )
}

export default Cart
