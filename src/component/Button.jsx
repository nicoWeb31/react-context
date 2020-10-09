import React, { Component } from 'react';
import LanguageContext from '../context/LanguageContext'
import ColorContext from '../context/ColorContext'



class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    static contextType = LanguageContext
    render() {
        const txt = this.context === 'english' ? 'Submit ' : 'Voorleggen'
        
        return (
            <ColorContext.Consumer>
            {(color)=>
            
            <button className={`ui button ${color}`}>{txt}</button>
            }

            </ColorContext.Consumer>
        );
    }
}

export default Button;