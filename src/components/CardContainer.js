import React from 'react'
import {Cards} from './Cards'
import Button from './Button'
import {Grid} from "@material-ui/core"





export default class CardContainer extends React.Component {

   render() {
       return (
           
           <div>
            <Grid  container justify="center">
            
            {this.props.restaurants.map(restaurantObj => <Cards restaurant ={restaurantObj} key ={restaurantObj.Id}/>)}
            </Grid >
            
            <Button/>
            </div>
           
         )
   }

}