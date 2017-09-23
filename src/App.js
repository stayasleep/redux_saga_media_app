import React, { Component } from 'react';
import Headers from './components/header';
import Home from './components/home';
import Media from './containers/media';

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
            <div className="container-fluid text-center">
                <Headers onClick={()=> this.toggleHomeLibrary()} current={this.state.home}/>
                {this.state.home ? (
                        <Home onClick={() => this.toggleHomeLibrary()} current={this.state.home} />
                    ) : (
                        <Media/>
                    )
                }
            </div>
        );
    }
}

export default App;
