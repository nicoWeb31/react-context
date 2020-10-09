import React, { Component } from 'react';
import LanguageContext from '../context/LanguageContext'


class LanguageSelector extends Component {


    static contextType = LanguageContext;
    


    render() {

        console.log(this.context)

        return (
            <div className="">
                select a langage :
                <i className="flag us" onClick={() => this.context.onLanguagechange('english')}></i>
                <i className="flag nl" onClick={() => this.context.onLanguagechange('dutch')}></i>
            </div>
        );
    }
}

export default LanguageSelector;
