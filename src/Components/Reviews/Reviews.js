import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {
    const [review, setReview] = useState([])

    useEffect(() =>{
        fetch ('fakeData.json')
        .then(res => res.json())
        .then(data => setReview(data))
    },[])
    return (
        <div>
            <h1 className='text'>Customer All Reviews</h1>
            <div className='card-container'>
                {
                    review.map(review => <Review
                        key = {review.id} 
                        review = {review}>
                    </Review>)
                }   
            </div>
        </div>
    );
};

export default Reviews;