import React from 'react';
import { List, ListInlineItem } from 'reactstrap';

const Review = (props) => {
    return (
      <List type="inline">
        <ListInlineItem>{this.props.review.name}</ListInlineItem>
       
      </List>
    );
  }
  
  export default Review;