import React, { Component } from 'react';
import Card from './Card.js';

class CardsList extends Component {
    
    render() {

        const profiles = this.props.profiles;

        return(
            <div>
                {profiles.map(profile => <Card key={profile.name} {...profile}/>)}
            </div>
        );
    }
}

export default CardsList;