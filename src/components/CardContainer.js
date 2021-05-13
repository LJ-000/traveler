import React from 'react'
import {Cards} from './Cards'
import Button from './Button'
import {Grid} from "@material-ui/core"
import SearchBar from './SearchBar'


const CardContainer = ({ changeFilter, restaurants, handleSearch }) => {
   
       return (
        
           <section>
               <SearchBar handleSearch={handleSearch}/>
               <div>
               <label>
                <strong>Destination:</strong>
                <select onChange={(e) => changeFilter(e.target.value)}>
                <option value="All">All</option>
                <option value="Dubai">Dubai</option>
                <option value="New York City">New York City</option>
                <option value="Tokyo">Tokyo</option>
                </select>
                </label>  
               </div>
               
                <Grid container justify="center">
                {restaurants.map(restaurantObj => <Cards restaurant ={restaurantObj} key ={restaurantObj.Id}/>)}
                </Grid >
            
             </section>
       )
}
export default CardContainer