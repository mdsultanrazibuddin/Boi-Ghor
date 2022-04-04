

const Reviews = (props) => {
    const { name , rating, description} = props.review
    return (
        <div>
            <h2>{name}</h2>
            
            <h4> Ratings : {rating}</h4>
            <p>{description}</p>
            


        </div>
    );
};

export default Reviews;