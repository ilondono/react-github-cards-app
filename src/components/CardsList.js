import React, { Component } from 'react';
import Card from './Card.js';

class CardsList extends Component {
    
    render() {

        const profiles = this.props.profiles;

        return(
            <div>
                <Card {...profiles[0]}/>
                <Card {...profiles[1]}/>
                <Card {...profiles[2]}/>
            </div>
        );
    }
}

export default CardsList;