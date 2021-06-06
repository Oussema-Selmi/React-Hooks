import React from 'react'
import {Form,FormControl} from 'react-bootstrap'
import StarRatingComponent from 'react-star-rating-component';

function Filter({SetTextFilter, SetRatingFilter}) {
   
                

    return (
        <div className="filter"> 
            <Form inline>
                <FormControl type="text" placeholder="Search for a movie" className="mr-sm-2" onChange={(e)=>(SetTextFilter(e.target.value))}/>
            </Form>
            
            <Form inline>
                <StarRatingComponent starCount={5} onStarClick={(x)=>SetRatingFilter(x)}/>  
            </Form>
        </div>
    )
}

export default Filter
