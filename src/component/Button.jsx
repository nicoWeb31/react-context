import React, { Component } from 'react'


class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <button className='ui primary'>Submit</button>
        );
    }
}

export default Button;