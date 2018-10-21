import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import Results from './Results';
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInput: "",
            locationInput: "",
            priceFilter: [],
            businesses: null
        }
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.handleLocationInput = this.handleLocationInput.bind(this);
        this.handleSearchInput = this.handleSearchInput.bind(this);
        this.handlePriceFilter = this.handlePriceFilter.bind(this);
    }

    handleOnSubmit(e) {
        e.preventDefault();

        axios.get(
            'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search',
            {
                headers: {'Authorization': 'Bearer 43dtADq-xvpNaFDtD1FnlHw0Tp1EUMz9HGUY8M3zuGsgZDb7XL2A08YeYRFv7JHEMpZIrLC3Nj9L4UZ_r_0f4nAm-dJazY0H0Pdfr87rD-5CCIEX6H1zpAt_nRbAW3Yx'},
                params: {
                    'item': this.state.searchInput,
                    'location': this.state.locationInput,
                    'open_now': 'true',
                    'radius': '1000',
                    'limit': '50',
                    'price': this.state.priceFilter.toString()
                }
            }
        )
        .then(response => {
            this.setState({businesses: response.data});
        })
        .catch(error => console.log(error))
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
                        businesses={this.state.businesses}
                    />
                </div>
            </div>
        );
    }
}

export default App;
