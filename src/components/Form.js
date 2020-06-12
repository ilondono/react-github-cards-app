import React, { Component } from 'react';

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {username: ''};
    }

    render() {
        return(
            <div style={{textAlign:'center'}}>
                <form action=''>
                    <input type="text" 
                           value={this.state.username}
                           placeholder="Type a GitHub username"
                    />
                    <button>Add</button>
                </form>
            </div>
        );
    }
}

export default Form;