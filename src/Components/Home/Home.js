import React, { useEffect, useState } from 'react';

import './Home.css'
import Image from "../../Images/recharger-your-battery.jpg"
import Reviews from '../Reviews/Reviews';

const Home = () => {
    const [review, setReview] = useState([])

    useEffect(() =>{
        fetch ('fakeData.json')
        .then(res => res.json())
        .then(data => setReview(data))
    },[])
    return (
        <div>
           <div className='container'>
                <div className='article'>
                    <h1> Recharge Your Down Battery</h1>
                    <h2>By Jhankar Mahbub</h2>
                    <p>The book Recharge Your Down Battery basically teaches us how to deal with various problems or stress in our daily life. Throughout the book, the author Jhangkar Mahbub has beautifully highlighted the various problems of the young generation through the dialogue-based conversations of Masum Bhai and Abir respectively...</p>
                    <button>Read More</button>
                </div>
                <div>
                    <img className='Image' src={Image} alt="" />
                </div>
           </div>

           <div>
               <h1>Customer Reviews</h1>

               {
                   review.slice(0, 3).map(review => <Reviews review = {review}></Reviews>)
               }
               <button>See All Reviews</button>
           </div>


        </div>
    );
};

export default Home;