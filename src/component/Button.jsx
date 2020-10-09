import React, { Component } from 'react';
import LanguageContext from '../context/LanguageContext'



class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    static contextType = LanguageContext
    render() {
        const txt = this.context === 'english' ? 'Submit ' : 'Voorleggen'
        
        return (
            <button className='ui button primary'>{txt}</button>
        );
    }
}

export default Button;