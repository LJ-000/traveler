import React from 'react'
import {Grid} from "@material-ui/core"
import {Card, CardText, CardBody, CardLink,CardTitle, CardSubtitle} from 'reactstrap';

 export const Cards = (props) => {

    return (
        // <div>
        //         <img src={props.restaurant.Image} className="card-img-top" alt="..." />
        //   <div className="card-title">
        //         <h3>{props.restaurant.Name}</h3>
        //         <h5>{props.restaurant.Type}</h5>
        //         <h5>{props.restaurant.Ratings}</h5>
        //        <h5>{props.restaurant.Price}</h5>
        //      <h5>{props.restaurant.Precautions}</h5>
        //     </div>
        //              </div>
   
        <div className="card">
            <Grid item >
        <Card>
          <CardBody>
            <CardTitle tag="h5">{props.restaurant.Name}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">{props.restaurant.Type}</CardSubtitle>
          </CardBody>
          <img width="100%" alt="Card image cap"  src = {props.restaurant.Image}/>
          <CardBody>
            <CardText>Location: {props.restaurant.Location}</CardText>
            <CardText>Price Point: {props.restaurant.Price}</CardText>
            <CardText>Traveler Ratings: {props.restaurant.Ratings}</CardText>
            <CardText>Outdoor Dining: {props.restaurant.Precautions}</CardText>
            <CardLink href={props.restaurant.Website}Reservations></CardLink>
          </CardBody>
        </Card>
       </Grid>
        </div>   
       
    )
 }
