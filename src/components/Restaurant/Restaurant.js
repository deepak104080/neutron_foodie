import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {useDispatch, useSelector} from 'react-redux';
import {addFoodToCart, addRestDetails, emptyFoodFromCart} from './actionFood';

const Restaurant = () => {
    const [rest_data, setRestData] = useState({});
    const [menu, setMenu] = useState([]);
    const tempId = useParams();
    console.log('rest id - ', tempId);
    const loginData = useSelector(state => state.login);
    const dispatch = useDispatch();
    const vegIcon = 'https://banner2.cleanpng.com/20180601/at/kisspng-vegetarian-cuisine-biryani-indian-cuisine-vegetabl-vegetarian-5b11c235a92d48.569689881527890485693.jpg';
    const nonvegIcon = 'https://spng.pinpng.com/pngs/s/45-459786_non-veg-icon-circle-hd-png-download.png';
    const cartData = useSelector(state => state.cart);
    console.log('Header---------------------', cartData.restDetails);

    // const veg = () => {
    //     console.log('veg')
    //     return(
    //         <img src={vegIcon}/>
    //     )
    // }
    // const nonveg = () => {
    //     console.log('non-veg')
    //     return(
    //         <img src={nonvegIcon}/>
    //     )
    // }

    //api call for restaurant details
    const callApi = async () => {
        const url = 'http://localhost:4000/restaurants/search/'+tempId.id;
        const response = await axios.get(url);
        setRestData(response.data);
    }

    //api call for restaurant menu items
    const callApiMenu = async () => {
        const url = 'http://localhost:4000/menu/'+tempId.id;
        const response = await axios.get(url);
        setMenu(response.data);
    }

    const addCartFn = (foodItem) => {
        console.log(foodItem);
        let restDetails = {};
        restDetails.rest_id = rest_data.rest_id;
        restDetails.rest_name = rest_data.rest_name;
        restDetails.city = rest_data.location;

        if(restDetails.rest_id === cartData.restDetails.rest_id) {
            dispatch(addFoodToCart(foodItem));
            dispatch(addRestDetails(restDetails));
        }
        else {
            //empty foodcart
            dispatch(emptyFoodFromCart());
            //empty restDetails - no separate action required as addRestDetails will overwrite
            dispatch(addFoodToCart(foodItem));
            dispatch(addRestDetails(restDetails));
        }
        
    }

    useEffect(() => {
        callApi();
        callApiMenu();
    }, [])
    // call first time - []
    // call everytime - nothing
    // call conditional - [pageNum]
    
    useEffect(() => {
        console.log(rest_data);
        console.log(menu);
    })

    return(
        <> 
            <section id="" class="section-bg">
                <div class="container" data-aos="fade-up">
                    <div className="row">
                        <div className="col-6">
                            <img src={rest_data.image || 'https://i.ytimg.com/vi/BEyloCJlpm0/maxresdefault.jpg'} className="img-fluid food-image-large"/>
                        </div>
                        <div className="col-6">
                            <div className="row">
                                <div className="col-6">
                                    <img src={rest_data.image2 || 'https://i.ytimg.com/vi/BEyloCJlpm0/maxresdefault.jpg'} className="img-fluid food-image-small"/>
                                </div>
                                <div className="col-6">
                                    <img src={rest_data.image3 || 'https://i.ytimg.com/vi/BEyloCJlpm0/maxresdefault.jpg'} className="img-fluid food-image-small"/>
                                </div>
                                <div className="col-6 mt-4">
                                    <img src={rest_data.image4 || 'https://i.ytimg.com/vi/BEyloCJlpm0/maxresdefault.jpg'} className="img-fluid food-image-small"/>
                                </div>
                                <div className="col-6 mt-4">
                                    <img src={rest_data.image5 || 'https://i.ytimg.com/vi/BEyloCJlpm0/maxresdefault.jpg'} className="img-fluid food-image-small"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    

                </div>
            </section>


            <section id="" class="">
                <div class="container" data-aos="fade-up">
                    <div class="section-header text-start">
                    
                        <p>{rest_data.rest_name}</p>
                        <h2>{rest_data.category}</h2>
                        <h2>{rest_data.location}</h2>

                        {loginData.loginDataRedux && 
                        (
                            <>
                                <button className="btn btn-success">Add Review</button>
                                <button className="btn btn-warning bg-opacity-50">Mark Favourite</button>
                            </>
                        )}
                    </div>

                    
                </div>
            </section>


            <section id="" class="section-bg">
                <div class="container" data-aos="fade-up">
                    <table className="table table-responsive table-warning">
                                        
                                        {menu && menu.map((temp) => (
                                            <tr>
                                                <td><img src={temp.food_type === 'veg' ? vegIcon : nonvegIcon} className="veg-nonveg-icon"/></td>
                                                <td><img src={temp.food_image || "https://i.tribune.com.pk/media/images/1590373-biryani-1513939158/1590373-biryani-1513939158.gif"} className="menu-image"/></td>
                                                <td>{temp.food_name}</td>
                                                <td>&#8377;{temp.price}</td>
                                                <td>{temp.description}</td>
                                                {loginData.loginDataRedux && 
                                                (
                                                    <>
                                                        <td><button className="btn btn-sm btn-warning" onClick={() => addCartFn(temp)}>Add to Cart</button></td>
                                                    </>
                                                )}
                                                
                                            </tr>
                                        ))}
                    </table>
                </div>
            </section>

            {/* <section id="events" class="events">
                <div class="container-fluid" data-aos="fade-up">

                    <div class="section-header">
                    <h2>Events</h2>
                    <p>Share <span>Your Moments</span> In Our Restaurant</p>
                    </div>

                    <div class="slides-3 swiper" data-aos="fade-up" data-aos-delay="100">
                    <div class="swiper-wrapper">

                        <div class="swiper-slide event-item d-flex flex-column justify-content-end" style={{backgroundImage: 'url(assets/img/events-1.jpg)'}}>
                        <h3>Custom Parties</h3>
                        <div class="price align-self-start">$99</div>
                        <p class="description">
                            Quo corporis voluptas ea ad. Consectetur inventore sapiente ipsum voluptas eos omnis facere. Enim facilis veritatis id est rem repudiandae nulla expedita quas.
                        </p>
                        </div>

                        <div class="swiper-slide event-item d-flex flex-column justify-content-end" style={{backgroundImage: 'url(assets/img/events-2.jpg)'}}>
                        <h3>Private Parties</h3>
                        <div class="price align-self-start">$289</div>
                        <p class="description">
                            In delectus sint qui et enim. Et ab repudiandae inventore quaerat doloribus. Facere nemo vero est ut dolores ea assumenda et. Delectus saepe accusamus aspernatur.
                        </p>
                        </div>

                        <div class="swiper-slide event-item d-flex flex-column justify-content-end" style={{backgroundImage: 'url(assets/img/events-1.jpg)'}}>
                        <h3>Birthday Parties</h3>
                        <div class="price align-self-start">$499</div>
                        <p class="description">
                            Laborum aperiam atque omnis minus omnis est qui assumenda quos. Quis id sit quibusdam. Esse quisquam ducimus officia ipsum ut quibusdam maxime. Non enim perspiciatis.
                        </p>
                        </div>

                    </div>
                    <div class="swiper-pagination"></div>
                    </div>

                </div>
                </section> */}
        </>
    );
}

export default Restaurant;