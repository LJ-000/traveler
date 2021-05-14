import React, { Component } from 'react';
import Review from './Review';
import {Grid} from "@material-ui/core"
import reviewdata from './data.js'

class ReviewsContainer extends Component {
  render() {
    return (
      <section className="section">
        <Grid container justify="center"></Grid>
        {
          this.props.reviewdata.map((review, index) => {
            return <Review key={index} comment={...comment} />
          })
        }
        <Grid/>
        
      </section>
      
    );
  }
}

export default ReviewsContainer;