import React from 'react'
import {Cards} from './Cards'
import {Grid} from "@material-ui/core"
import SearchBar from './SearchBar'
import Reviews from './Reviews'




 const CardContainer = (props) => {

   
       return (
        
           <>
               <SearchBar {...props}/>
               <div>
            <Grid  container justify="center">
            
            {props.restaurants.map(restaurantObj => <Cards restaurant ={restaurantObj} key ={restaurantObj.Id}/>)}
            
            </Grid >
            <div>
               <Reviews/>
            </div>
            </div>
           </>
             
       )
       }

export default CardContainer