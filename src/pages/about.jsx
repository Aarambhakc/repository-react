import axios from 'axios';
import React, { useEffect, useState } from 'react'
const About = () => {
    const [data, setData] =useState([]);
    const apiUrl = "https://dummyjson.com/products";
    const fetchProducts = async () => {
        let response= await axios.get(apiUrl);
        console.log(response.data.products);
        setData(response.data.products);
    };
    useEffect(() => {
        fetchProducts();
    }, []);
    
    return(
        <div>
            <h1>About Page</h1>
            <p>This is the About page.</p>
            {
                data.map((item) => (
                    <div key={item.id}>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default About;