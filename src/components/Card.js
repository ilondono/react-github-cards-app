import React, { Component } from 'react';

class Card extends Component {

    render() {

        const profile = this.props;

        return (
            <div className="Card">
                <img src={profile.avatar_url} alt={profile.name} style={{width: '75px'}}/>
                <div className="info" style={{display: 'inline-block', marginLeft: '12px'}}>
                <div className="name" style={{fontSize: '1.25rem', fontWeight: 'bold'}}>{profile.name}</div>
                <div>{profile.company}</div>
                <div>{profile.public_repos} Public Repos</div>   
                </div>                             
            </div>
        );
    }

}

export default Card;