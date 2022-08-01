import React, { useEffect, useState } from "react";
import { useLocation, useParams, Link } from "react-router-dom";
import axios from "axios";

const List = () => {
    const [list, setList] = useState([]);

    // const tempdata = useLocation();
    // console.log(tempdata.state);


    // const tempData = window.location.pathname;
    // console.log(tempData.split('/')[2]);
    const tempData2 = useParams();
    console.log(tempData2.city);

    const apiCall = async () => {
        const url = `${process.env.REACT_APP_API_URL}restaurants/${tempData2.city}`;
        const responseApi = await axios.get(url);
        console.log(responseApi);
        setList(responseApi.data);
    }

    useEffect(() => {
        //api call
        apiCall();
    },[])

    useEffect(() => {
        console.log(list);
    })

    return(
        <> 


        <section id="" className="section-bg">
            <div className="container" data-aos="fade-up">
                <div className="row">
                    
                
                
                
                <div class="row gy-5">



                {list && list.map((item) => (
                <div class="col-lg-4 menu-item border bg-secondary bg-opacity-10">
                    <Link to={`/restaurant/${item.rest_id}`} class="glightbox">
                        <img src={item.image} class="menu-img img-fluid image-max-height" alt=""/>
                        <h4>{item.rest_name}</h4>
                    </Link>
                </div>

                ))}
                
                {list.length === 0 && (
                    <h2 className="">
                        No restaurants available in this area.
                    </h2>
                )}
            


                </div>


                </div>
            </div>
        </section>

            
        </>
    );
}

export default List;