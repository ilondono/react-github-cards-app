import React, { Component } from 'react';

class Form extends Component {

    state = {
        username: ''
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.username);
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