import React from 'react'
import { Link } from 'react-router-dom'
export const Cards = ({restaurant}) => {

    const {Name, Price, Ratings, Type, Precautions, Id} = restaurant 

    return (
        <div className="card m-2 p-2 rounded">
            <Link to={`/restaurants/${Id}`}>
                <img src={Image} className="card-img-top" alt="..." />
            </Link>
            <div className="card-title">
                <h3>{Name}</h3>
                <h5>{Type}</h5>
                <h5>{Ratings}</h5>
                <h5>{Price}</h5>
                <h5>{Precautions}</h5>
            </div>
        </div>
    )
}