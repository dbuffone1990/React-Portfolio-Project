import React, { Component } from 'react';
import Header from './HeaderComponent';
import Jumbo from './Jumbo';
import Body from './Body';
import Reviews from './Reviews';
import Footer from './Footer';


class Main extends Component {
    render(){
        return(
            <div>
                <Header></Header>
                <Jumbo></Jumbo>
                <Body />
                <Reviews />
                <Footer />
            </div>
        );
    }
}

export default Main;