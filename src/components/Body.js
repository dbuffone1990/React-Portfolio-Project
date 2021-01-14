import React, { useState, Component } from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

class Body extends Component {
    render() {
        return(
            <div className="container">
                <div className="row justify-content-center">
                    <h2 className="heading-secondary">Hot Items</h2>
                </div>
                <div className="row mt-5 mx-auto justify-content-center">
                    <div className="col-xs-12 col-sm-4"  id="dunkin">
                        <img className="card-img-top img-thumbnail" src="/images/dunkin.jpg" alt="dunkin"></img>
                        <div className="card-body text-center">
                            <h5 className="card-title">Dunkin' Donuts</h5>
                            <Button type="button" className="btn btn-primary buttonSecondary" color="primary" data-toggle="modal" data-target="#checkoutModal">Buy Now</Button>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-4"  id="grinch">
                        <img className="card-img-top img-thumbnail" src="/images/grinch.jpg" alt="grinch"></img>
                        <div className="card-body text-center">
                            <h5 className="card-title">The Grinch</h5>
                            <Button type="button" className="btn btn-primary buttonSecondary" color="primary" data-toggle="modal" data-target="#checkoutModal">Buy Now</Button>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-4"  id="peachCrown">
                        <img className="card-img-top img-thumbnail" src="/images/peachCrown.jpg" alt="dunkin"></img>
                        <div className="card-body text-center">
                            <h5 className="card-title">Peach Crown</h5>
                            <Button type="button" className="btn btn-primary buttonSecondary" color="primary" data-toggle="modal" data-target="#checkoutModal">Buy Now</Button>
                        </div>
                    </div>
                </div>

                <div className="row mt-5 mx-auto justify-content-center">
                    <div className="col-xs-12 col-sm-4"  id="sunshine">
                        <img className="card-img-top img-thumbnail" src="/images/sunflowers.jpg" alt="sunshine"></img>
                        <div className="card-body text-center">
                            <h5 className="card-title">My Sunshine</h5>
                            <Button type="button" className="btn btn-primary buttonSecondary" color="primary" data-toggle="modal" data-target="#checkoutModal">Buy Now</Button>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-4"  id="watermelon">
                        <img className="card-img-top img-thumbnail" src="/images/watermelon.jpg" alt="grinch"></img>
                        <div className="card-body text-center">
                            <h5 className="card-title">Watermelon</h5>
                            <Button type="button" className="btn btn-primary buttonSecondary" color="primary" data-toggle="modal" data-target="#checkoutModal">Buy Now</Button>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-4"  id="peachCrown">
                        <img className="card-img-top img-thumbnail" src="/images/sunflowers2.jpg" alt="sunflower"></img>
                        <div className="card-body text-center">
                            <h5 className="card-title">Sunflowers</h5>
                            <Button type="button" className="btn btn-primary buttonSecondary" color="primary" data-toggle="modal" data-target="#checkoutModal">Buy Now</Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Body;