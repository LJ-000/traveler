import React, { Component } from 'react'
import { Route, Switch, Link}  from 'react-router-dom'
import './App.css';
import CardContainer from './components/CardContainer'
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
// import {Cards} from './components/Cards'

const BASE_URL = "http://localhost:3000/restaurants/"


export default class App extends Component {

 state = {
   restaurants:[],
   display: "NavBar"
 }
 

componentDidMount(){
    fetch(BASE_URL)
  .then(res => res.json())
  .then(restaurants => this.setState({
    
    restaurants : restaurants
   }))
 }
// handleClickRestaurants =()=>{
// this.setState ({
//   display: CardContainer
// })


 render () {
  return (
    <div className="App">
      {/* <header className="App-header">
      </header> */}
      {/* <Switch>
        <Route path="/restaurants/:id" render={(props) => {
          const resId = props.match.params.id
          const resData = this.state.restaurants.find(res => res.id === resId)
          return resData ? <Cards resData={resData} /> : null
        }}> */}
          
        {/* </Route> */}
      {/* </Switch> */}
    <Switch>
      <Route path="/restaurants">
      <CardContainer restaurants ={this.state.restaurants}/>
      </Route>
    </Switch>
    <Route path="/" component ={Home}/>
      <div>
      
       
      </div>
    </div>
   )
  }

}