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
            <div className='form' style={{textAlign:'center'}}>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" 
                           value={this.state.username}
                           placeholder="Type a GitHub username"
                           onChange={(event) => this.setState({username: event.target.value})}
                           required
                    />
                    <button style={{width:'80px'}} >Add Card</button>
                </form>
            </div>
        );
    }
}

export default Form;