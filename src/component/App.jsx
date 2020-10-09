import React, { Component } from 'react';
import UserCreate from './UserCreate'



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            language : 'english'
        };
    }


    onlanguagechange = lang =>{
        this.setState({language : lang})
    }



    render() {
        return (
            <div className ='ui container'>
                <div className="">
                    select a langage :
                    <i className="flag us" onClick={()=>this.onlanguagechange('english')}></i>
                    <i className="flag nl" onClick={()=>this.onlanguagechange('dutch')}></i>
                </div>




                <UserCreate/>


            </div>
        );
    }
}

export default App;