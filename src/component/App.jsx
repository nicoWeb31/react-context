import React, { Component } from 'react';
import UserCreate from './UserCreate';

//context
import { LanguageStrore } from '../context/LanguageContext';
import ColorContext from '../context/ColorContext'
import LanguageSelector from './LanguageSelector';



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {
        return (
            <div className='ui container'>
                <LanguageStrore >
                    <LanguageSelector />

                </LanguageStrore>


                {/* provider tout ce qui est vrapp recoi via le provider les datas donner en value qu'on veut dans le context object*/}

                <h4>avec provider valeur du state</h4>
                <LanguageStrore >
                    <UserCreate />
                </LanguageStrore>
                

                <h4>avec provider valeur en dur</h4>
                <LanguageStrore >
                    <ColorContext.Provider value='red'>
                        <UserCreate />

                    </ColorContext.Provider>
                </LanguageStrore>

                <h4>Sans provider valeur de l'object context par default</h4>
                <UserCreate />


            </div>
        );
    }
}

export default App;