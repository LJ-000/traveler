import React, { useState } from 'react';
import '../App.css'
import ReorderIcon from '@material-ui/icons/Reorder';
import SearchIcon from '@material-ui/icons/Search';

function NavBar () {

    const [showLinks, setShowLinks] = useState(false);
        return (
            <>
           <div className ="Navbar">
               <div className ="leftSide">
                   <div className = "links" id = {showLinks ? "hidden" : ""}>
                   <a href="/home"> Home </a>
                   <a href="/feedback"> Reviews </a>
                   <a href="restaurant">  Restaurant </a>
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
