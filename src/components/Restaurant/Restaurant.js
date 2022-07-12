import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


const Restaurant = () => {
    const [rest_data, setRestData] = useState({});
    const [menu, setMenu] = useState([]);
    const tempId = useParams();
    console.log('rest id - ', tempId);

    const callApi = async () => {
        const url = 'http://localhost:4000/restaurants/search/'+tempId.id;
        const response = await axios.get(url);
        setRestData(response.data);
    }
    const callApiMenu = async () => {
        const url = 'http://localhost:4000/menu/'+tempId.id;
        const response = await axios.get(url);
        setMenu(response.data);
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
            <section id="testimonials" class="testimonials section-bg">
                <div class="container" data-aos="fade-up">
                    <img src={rest_data.image}/>

                    <div class="section-header">
                    
                    <p>{rest_data.rest_name}</p>
                    <h2>{rest_data.category}</h2>
                    <h2>{rest_data.location}</h2>
                    </div>

                    <table>
                                        
                    {menu && menu.map((temp) => (
                        <tr>
                            <td>Veg/Non-Veg</td>
                            <td><img src="https://i.tribune.com.pk/media/images/1590373-biryani-1513939158/1590373-biryani-1513939158.gif" className="menu-image"/></td>
                            <td>{temp.food_name}</td>
                            <td>{temp.price}</td>
                            <td>{temp.description}</td>
                        </tr>
                    ))}
                    </table>







                    <div class="slides-1 swiper" data-aos="fade-up" data-aos-delay="100">
                    <div class="swiper-wrapper">

                        

                    </div>
                    <div class="swiper-pagination"></div>
                    </div>

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