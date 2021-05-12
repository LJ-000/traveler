import React from 'react'
import {Cards} from './Cards'
import Button from './Button'

export default class CardContainer extends React.Component {

   render() {
       return(
           
            <div className="row ml-3">
            {this.props.restaurants.map(restaurantObj => <Cards restaurant ={restaurantObj} key ={restaurantObj.id}/>)}
            <Button/>
            </div>
           
         )
   }
 }
