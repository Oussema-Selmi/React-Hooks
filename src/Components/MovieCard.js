import React from 'react'
import {Card} from 'react-bootstrap'
import StarRatingComponent from 'react-star-rating-component';


function MovieCard({Movie}) {
    console.log(Movie)
    return (
        <div >
            
            <Card style={{ width: '18rem' }}>
               <Card.Img variant="top" src={Movie.posterURL} style={{width:"286px",height:"424px"}}/>
               <Card.Body className="MovieCardBody">
               <Card.Title>{Movie.title}</Card.Title>
                <Card.Text>
                {Movie.description}
                </Card.Text>
                <StarRatingComponent value={Movie.rating} starCount={5}  name=''/>
                </Card.Body>
            </Card>
        </div>
    )
}

export default MovieCard
