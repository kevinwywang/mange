import React, { Component } from 'react';
import './App.css';
import Form from './Form';

class App extends Component {

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Yelp Randomizer</h1>
                </header>

                <Form />
                <div>
                    <p>Results</p><br/>
                </div>
            </div>
        );
    }
}

export default App;
