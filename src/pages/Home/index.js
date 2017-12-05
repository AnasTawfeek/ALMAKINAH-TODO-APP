import React, { Component } from 'react';
import Todos from '../../components/Todos';

class Home extends Component{
    render(){
        return (
            <p className="App-intro">
              <Todos />
            </p>
        )
    }
}

export default Home;
