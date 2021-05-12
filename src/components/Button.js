import React from 'react'
import {Link} from 'react-router-dom'



export default class Button extends React.Component {

   render() {
       return(
           
        <div className="row ml-3">
        <div>
             <Link to="/ component ={Home}">
           <button className="btn btn-primary btn-lg m-2">
                       <span >Home</span>
                   </button>
                   </Link>
                   </div>
       </div>
       
       )
 }
}