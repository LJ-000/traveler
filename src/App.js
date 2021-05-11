import React, { Component } from 'react'
import { Route, Switch} from 'react-router-dom'
import './App.css';
import CardContainer from './components/CardContainer'
import NavBar from './components/NavBar'
import {Cards} from './components/Cards'

const BASE_URL = "http://localhost:3000/restaurants/"

export default class App extends Component {

state = {
  restaurants:[]
}

componentDidMount(){
  fetch(BASE_URL)
  .then(res => res.json())
  .then(restaurants => this.setState({ restaurants }))
}


appComp() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Switch>
        <Route path="/restaurants/:id" render={(props) => {
          const resId = props.match.params.id
          const resData = this.state.restaurants.find(res => res.id === resId)
          return resData ? <Cards resData={resData} /> : null
        }}>
          <CardContainer/>
        </Route>
      </Switch>
      <NavBar/>
    </div>
  );
}

}