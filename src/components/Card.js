import React, { Component } from 'react';

class Card extends Component {
    render() {
        return (
            <div className="Card">
                <img src="http://placehold.it/75" style={{width: '75px'}}/>
                <div className="info" style={{display: 'inline-block', marginLeft: '12px'}}>
                    <div className="name" style={{fontSize: '1.25rem', fontWeight: 'bold'}}>Name...</div>
                    <div>Company...</div>
                    <div>Public Repos...</div>   
                </div>
                             
            </div>
        );
    }

}

export default Card;