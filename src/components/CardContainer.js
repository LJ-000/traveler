import React, { Component } from 'react'

import {Cards} from './Cards'

export default class CardContainer extends React.Component {

    render() {
        return(
            <>
            <div className="row ml-3">
            <Cards/>
            </div>
            </>
        )
    }
}
