import React, { useState, Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';

class Jumbo extends Component {
    render() {
        return(
            <div className="jumbotron bg-white">
                <div className="container">
                    <div className="row row-content align-items-center">
                        <div className="col">
                            <h2 className="heading-secondary">Design custom Cup Tumblers</h2>
                            <p className="lead">Create personalized tumblers with us!</p>
                            <a href="#" className="btn btn-lg startBtn text-light" role="button"></a>
                            <Button type="button" className="btn startBtn text-light" color="info" data-toggle="tooltip" data-placement="bottom" title="Or call us at 330-984-6026">
                                <a href="#" className="btn btn-md startBtn text-light" role="button">Start Now</a>
                            </Button>
                        </div>
                        <img src="/images/logo.jpg" alt="danielle logo" className="d-flex col-3"></img>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default Jumbo;