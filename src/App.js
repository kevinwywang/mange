import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import Results from './Results';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInput: "",
            locationInput: "",
            priceFilter: []
        }
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.handleLocationInput = this.handleLocationInput.bind(this);
        this.handleSearchInput = this.handleSearchInput.bind(this);
        this.handlePriceFilter = this.handlePriceFilter.bind(this);
    }

    handleOnSubmit(e) {
        e.preventDefault();
    }

    handleSearchInput(e) {
        this.setState({searchInput: e.target.value});
    }

    handleLocationInput(e) {
        this.setState({locationInput: e.target.value});
    }

    handlePriceFilter(e) {
        const {priceFilter} = this.state;
        if (priceFilter.indexOf(e.target.value) !== -1) {
            const result = priceFilter.filter(price => price !== e.target.value);
            this.setState({priceFilter: result});
        }
        else {
            this.setState({priceFilter: [...priceFilter, e.target.value]});
        }
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Yelp Randomizer</h1>
                </header>

                <Form
                    handleOnSubmit={this.handleOnSubmit}
                    handleSearchInput={this.handleSearchInput}
                    handleLocationInput={this.handleLocationInput}
                    handlePriceFilter={this.handlePriceFilter}
                />
                <div>
                    <Results
                        searchInput={this.state.searchInput}
                        locationInput={this.state.locationInput}
                        priceFilter={this.state.priceFilter}
                    />
                </div>
            </div>
        );
    }
}

export default App;
