import React, { Component } from 'react';
import UserCreate from './UserCreate';

//context
import LanguageContext from '../context/LanguageContext';



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            language: 'english'
        };
    }


    onlanguagechange = lang => {
        this.setState({ language: lang })
    }



    render() {
        return (
            <div className='ui container'>
                <div className="">
                    select a langage :
                    <i className="flag us" onClick={() => this.onlanguagechange('english')}></i>
                    <i className="flag nl" onClick={() => this.onlanguagechange('dutch')}></i>
                </div>



                {/* provider tout ce qui est vrapp recoi via le provider les datas donner en value qu'on veut dans le context object*/}

                <h4>avec provider valeur du state</h4>
                <LanguageContext.Provider value={this.state.language}>
                    <UserCreate />
                </LanguageContext.Provider>


                <h4>avec provider valeur en dur</h4>
                <LanguageContext.Provider value='dutch'>
                    <UserCreate />
                </LanguageContext.Provider>

                <h4>Sans provider valeur de l'object context par default</h4>
                <UserCreate />


            </div>
        );
    }
}

export default App;