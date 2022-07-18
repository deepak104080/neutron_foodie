import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const dispatch = useDispatch();
    const loginData = useSelector(state => state.login);
    console.log('Header---------------------', loginData.loginDataRedux);
    const navigate = useNavigate();

    useEffect(() => {
        if(!loginData.loginDataRedux) {
            //save current url
            navigate('/login');
        }
    }, [loginData])

    return (
        <>
            <section id="hero" class="hero d-flex align-items-center section-bg">
                <div class="container">
                <div class="row justify-content-between gy-5">
                    <div class="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start">
                        <h2 data-aos="fade-up">Enjoy Your HealthyDelicious Food</h2>

                    </div>
                </div>
                </div>
            </section>
        </>
    )
}

export default Cart
