import React from 'react'
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';


function Productdetails() {
    const { id } = useParams();
    console.log(id);
    const [singledata, updatedata] = useState({})

    const myapi = () => {
        axios.get(`https://fakestoreapi.com/products/${id}`).then((d) => {
            console.log(d.data);
            updatedata(d.data)
        });
    }

    useEffect(() => {
        myapi();
    }, [])

    return (
        <div className='mainpage'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-8'>
                        <h1>Id No:{singledata.id}</h1>
                        <h2>Price:{singledata.price}</h2>
                        <h3>Id No:{singledata.title}</h3>
                        <h3>Category:{singledata.category}</h3>
                        <h4>Description:{singledata.description}</h4>
                    </div>
                    <div className='col-md-4'>
                        <img src={singledata.image} alt='myproduct' className='img-fluid'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Productdetails
