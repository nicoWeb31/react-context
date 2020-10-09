import React, { Component } from 'react';
import LanguageContext from '../context/LanguageContext';


class Field extends Component {

    static contextType = LanguageContext;



    render() {

        const txt = this.context === 'english' ? 'Name' : 'Naam'

        return (
            <div className='ui field'>
                <label>{txt}</label>
                <input type="text"/>
            </div>
        );
    }
}

export default Field;