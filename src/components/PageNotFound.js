import React, { Component } from 'react'

export default class PageNotFound extends Component {
    render() {
        return (
            <div className="container">
            <div className="row">
                <div className="col-10 mx-auto text-center text-title">
                    <h1 className="display-3">
                    Error    
                    </h1>
                    <h3 className="text-danger">
                        {this.props.location.pathname} was not found
                    </h3>
                    </div>
                    </div>                
            </div>
        )
    }
}
