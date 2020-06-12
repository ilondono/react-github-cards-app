import React, { Component } from 'react';

class Form extends Component {

    render() {
        return(
            <div style={{textAlign:'center'}}>
                <form action=''>
                    <input type="text" 
                           placeholder="Type a GitHub username"
                    />
                    <button>Add</button>
                </form>
            </div>
        );
    }
}

export default Form;