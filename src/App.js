import React, { Component } from 'react'
import { Route, Switch, Link}  from 'react-router-dom'
import './App.css';
import CardContainer from './components/CardContainer'
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'
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

changeFilter = (filter) => this.setState({filter: filter})

// stocksToDisplay = () => {
//   let displayCards = [...this.state.restaurants]
//   if(this.state.filter !== "All"){
//     displayCards= this.state.restaurants.filter(restaurant => restaurant.type === this.state.filter)
//   }

 render () {
  return (
    <div className="App">
      <NavBar/>
    <Switch>
      <Route path="/restaurants">
      <CardContainer restaurants ={this.state.restaurants}/>
      </Route>
    </Switch>
    <Route path="/" component ={Home} />
    
    </div>
   )
  }
}
  // changeFilter={this.changeFilter}