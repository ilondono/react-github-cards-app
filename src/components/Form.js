import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {

    state = {
        username: ''
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const response = await axios.get(`https://api.github.com/users/${this.state.username}`);
        this.props.addResult(response.data);
        this.setState({username:''});
    }

    render() {
        return(
            <div style={{textAlign:'center'}}>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" 
                           value={this.state.username}
                           placeholder="Type a GitHub username"
                           onChange={(event) => this.setState({username: event.target.value})}
                           required
                    />
                    <button>Add</button>
                </form>
            </div>
        );
    }
}

export default Form;