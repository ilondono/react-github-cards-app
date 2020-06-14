import React, { Component } from 'react';
import Card from './Card.js';

class CardsList extends Component {
    
    render() {
        return(
            <div>
                {this.props.profiles.map(profile => 
                    <Card key={profile.id} 
                          removeProfile={this.props.removeProfileFunction} 
                          {...profile}
                    />)}
            </div>
        );
    }
}

export default CardsList;