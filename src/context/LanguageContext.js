import React from 'react'

// //default value util pour call api il me semble, context object en argument de createContext
// export default React.createContext('english');

const Context = React.createContext();

export class LanguageStrore extends React.Component {
    state = { language : 'english'};


    onLanguagechange = (language) =>{
        this.setState({language})
    }

    render(){
        return(
            <Context.Provider value={{ ...this.state,onLanguagechange:this.onLanguagechange }}>
                {this.props.children}
            </Context.Provider>
        )
    }

}


export default Context;
