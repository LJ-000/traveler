import React from 'react'
import {Cards} from './Cards'
import {Grid} from "@material-ui/core"
import SearchBar from './SearchBar'
import RestaurantForm from './RestaurantForm'


const CardContainer = ({ changeFilter, restaurants, handleSearchtext, addRestaurant }) => {
   
       return (
        <>
           <section className="search-area">
               <SearchBar handleSearchtext={handleSearchtext}/>
               <div className="filter-destination">
               <label>
                <strong className="destination">Destination:</strong>
                <select onChange={(e) => changeFilter(e.target.value)}>
                <option value="All">All</option>
                <option value="Dubai">Dubai</option>
                <option value="New York City">New York City</option>
                <option value="Tokyo">Tokyo</option>
                </select>
                </label>  
               </div>
               </section>
               <div>
                <Grid container justify="center">
                {restaurants.map(restaurantObj => <Cards restaurant ={restaurantObj} key ={restaurantObj.Id}/>)}
                </Grid >
                <RestaurantForm addRestaurant ={addRestaurant}/>
                </div>
             
                
            </>
       )
}
export default CardContainer