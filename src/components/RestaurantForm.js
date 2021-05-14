import React, { Component } from 'react'

export default class RestaurantForm extends Component {
    state ={
      Location: "", 
      Image: "", 
      Name: "",
        Type: "",
        Ratings: "",
        Price: 0,
        Precautions: "",
        Website: ""

    }
sendRestaurantToServerAndState =(e)=>{
    e.preventDefault()
  const reqObj = {
      headers: {"Content-Type": "application/json"},
      method:  "POST",
      body: JSON.stringify({...this.state})
  }
  // debugger;
  fetch("http://localhost:3000/restaurants/", reqObj)
  .then(res => res.json())
  .then((restaurantObj => this.props.addRestaurant(restaurantObj)))
}
    render() {
        return (
          <section className="form">
            <div>
              <h4> Suggest Your favorite Restaurant</h4>
            </div>
            <form onSubmit= {this.sendRestaurantToServerAndState} addRestaurant= {this.props.addRestaurant} className="form-inline ml-4">

              <input value = {this.state.Location} onChange={(e)=> this.setState({Location:e.target.value})}type="text" className="form-control mb-2 mr-sm-2" placeholder="Restaurant Location"/>
              <div className="input-group mb-2 mr-sm-2">
                <input value = {this.state.Name} onChange={(e)=> this.setState({Name:e.target.value})}type="text" className="form-control mb-2 mr-sm-2" placeholder="Restaurant Name"/>
                  </div>
                <div className="input-group mb-2 mr-sm-2">
                    <input value = {this.state.Image}onChange={(e)=> this.setState({Image: e.target.value})} type="text" className="form-control" placeholder="Image URL"/>
                </div>

                         <div className="input-group mb-2 mr-sm-2">
                    <input value = {this.state.Rating}onChange={(e)=> this.setState({Ratings: e.target.value})} type="text" className="form-control" placeholder="Restaurant Rating"/>
                </div>

                <div className="input-group mb-2 mr-sm-2">
                    <input value = {this.state.Price}onChange={(e)=> this.setState({Price: e.target.value})}type="number" className="form-control" placeholder="Price Point"/>
                </div>
                <div className="input-group mb-2 mr-sm-2">
                    <input value = {this.state.Type}onChange={(e)=> this.setState({Type: e.target.value})} type="text" className="form-control" placeholder="Restaurant Type"/>
                </div>


                <div className="input-group mb-2 mr-sm-2">
                    <input value = {this.state.Precaution} onChange={(e)=> this.setState({Precautions: e.target.value})} type="text-area" className="form-control" placeholder="Covid Precautions"/>
                </div>

                

                <button type="submit" className="btn btn-primary mb-2">Submit</button>
            </form>
            </section>
        )
    }
}
