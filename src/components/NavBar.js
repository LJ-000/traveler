import React, { useState } from 'react';
import '../App.css'
import ReorderIcon from '@material-ui/icons/Reorder';


import {Link} from 'react-router-dom'

const NavBar =(props) => {
   
    const [showLinks, setShowLinks] = useState(false);
    const [filter, setFilter] = useState("");
    const handleSearch =(e)=>{
        setFilter(e.target.value);
    }
        return (
            <>
           <div className ="Navbar">
               <div className ="leftSide">
                   <div className = "links" id = {showLinks ? "hidden" : ""}>
                      
                   <a href="/home"> Home </a>
                   <Link to="/feedback">
                   <a href="/feedback"> Add New </a>
                   </Link>
                   <Link to="/restaurants">
                   <a  href="restaurant"> Restaurants </a>
                   </Link>
                   </div>
                   <button onClick={()=>setShowLinks(!showLinks)}>
                       {""}
                       <ReorderIcon/>
                   </button>
            </div>
            <div className="rightSide">
                The Traveler 
            </div>
            
           </div>

            </>
        );

}

export default NavBar 
