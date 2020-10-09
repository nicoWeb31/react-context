import React, { Component } from 'react';
import LanguageContext from '../context/LanguageContext';


class Field extends Component {


    render() {

        

        return (
            <div className='ui field red'>
                <label>

                {/* use cumsumer */}
                <LanguageContext.Consumer>
                    {value => value === 'english' ? 'Name' : 'Naam'}
                </LanguageContext.Consumer>

                </label>
                <input type="text"/>
            </div>
        );
    }
}

export default Field;