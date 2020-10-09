import React, { Component } from 'react'


class Field extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className='ui field'>
                <label> Name </label>
                <input type="text"/>
            </div>
        );
    }
}

export default Field;