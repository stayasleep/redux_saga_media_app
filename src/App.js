import React, { Component } from 'react';
import Headers from './components/header';
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            home: true,
        };
        this.toggleHomeLibrary = this.toggleHomeLibrary.bind(this);
    }

    toggleHomeLibrary (){
        //do something click about which link you click
        this.setState({home: !this.state.home});

    }

    render() {
        return (
            <div className="App">
                <Headers onClick={()=> this.toggleHomeLibrary()} current={this.state.home}/>
            </div>
        );
    }
}

export default App;
