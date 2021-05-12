import React, { useState } from 'react';
import '../App.css'
import ReorderIcon from '@material-ui/icons/Reorder';
import SearchIcon from '@material-ui/icons/Search';
import {Link} from 'react-router-dom'

const NavBar =(props) => {
   
    const [showLinks, setShowLinks] = useState(false);
        return (
            <>
           <div className ="Navbar">
               <div className ="leftSide">
                   <div className = "links" id = {showLinks ? "hidden" : ""}>
                      
                   <a href="/home"> Home </a>
                   <a href="/feedback"> Reviews </a>
                   <Link to="/restaurants">
                   <a  href="restaurant">  Restaurant </a>
                   </Link>
                   <a href ="filter"> Filter </a>
                   
                   </div>
                   <button onClick={()=>setShowLinks(!showLinks)}>
                       {""}
                       <ReorderIcon/>
                   </button>
            </div>

            <div className ="rightSide"> 
            <input type="text" placeholder="Search Restaurants"/>
            <button> 
                <SearchIcon/>
                 </button>
               </div>
           </div>

            </>
        );

}

export default NavBar 
