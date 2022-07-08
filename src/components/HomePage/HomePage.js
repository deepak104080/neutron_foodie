import React, { useReducer, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const HomePage = () => {
    const inputRef1 = useRef();
    const [city, setCity] = useState('');
    // const navigate = useNavigate();
    // const search_rest = () => {
    //     const temp = inputRef1.current.value;
    //     navigate('/list', {state: temp});
    // }
    return(
        <> 
            <section id="hero" class="hero d-flex align-items-center section-bg">
                <div class="container">
                <div class="row justify-content-between gy-5">
                    <div class="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start">
                    <h2 data-aos="fade-up">Enjoy Your HealthyDelicious Food</h2>

                    <input type="text" onChange={(e) => setCity(e.target.value)} value={city}/>
                    <Link className="btn-book-a-table" to={`/list/${city}`}>Search</Link>
                    
                    {/* <input type="text" ref={inputRef1}/> */}
                    {/* <button onClick={search_rest}>Search</button> */}

                    <p data-aos="fade-up" data-aos-delay="100">Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat.</p>
                    <div class="d-flex" data-aos="fade-up" data-aos-delay="200">
                        <a href="#book-a-table" class="btn-book-a-table">Book a Table</a>
                        <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" class="glightbox btn-watch-video d-flex align-items-center"><i class="bi bi-play-circle"></i><span>Watch Video</span></a>
                    </div>
                    </div>
                    <div class="col-lg-5 order-1 order-lg-2 text-center text-lg-start">
                    <img src="assets/img/hero-img.png" class="img-fluid" alt="" data-aos="zoom-out" data-aos-delay="300"/>
                    </div>
                </div>
                </div>
            </section>
        </>
    );
}

export default HomePage;








// search click pe - a href - /list/{var city} - url