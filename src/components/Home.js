import React from 'react'
import NavBar from './NavBar'


const Home = ({changeFilter, changeSort, sort}) => {
        return (
           
            <div className="home-bar">
                <NavBar/>

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
           
         )
   }
 
   export default Home 
