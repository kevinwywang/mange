import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import Results from './Results';
import axios from 'axios';
require('dotenv').config();

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInput: "",
            locationInput: "",
            priceFilter: [],
            distanceFilterTitle: "Distance",
            distance: 480, //distance is in meters
            resultNumberTitle: "# of Results",
            resultNumber: 3,
            businesses: null
        }  
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.handleLocationInput = this.handleLocationInput.bind(this);
        this.handleSearchInput = this.handleSearchInput.bind(this);
        this.handlePriceFilter = this.handlePriceFilter.bind(this);
        this.handleDistanceFilter = this.handleDistanceFilter.bind(this);
        this.handleResultNumberFilter = this.handleResultNumberFilter.bind(this);
    }

    handleOnSubmit(e) {
        e.preventDefault();
        axios.get(
            'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search',
            {
                headers: {'Authorization': 'Bearer ' + process.env.REACT_APP_YELP_API_KEY},
                params: {
                    'item': this.state.searchInput,
                    'location': this.state.locationInput,
                    'open_now': 'true',
                    'radius': this.state.distance,
                    'limit': '50',
                    'price': this.state.priceFilter.toString()
                }
            }
        )
        .then(response => {
            this.setState({businesses: response.data});
        })
        .catch(error => console.log(error));

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

    handleDistanceFilter(key){
        switch (key){
            case "1":
                this.setState({
                    distanceFilterTitle: '0.3 mi',
                    distance: 480
                });
                break;
            case "2":
                this.setState({
                    distanceFilterTitle: '0.6 mi',
                    distance: 965
                });
                break;
            case "3":
                this.setState({
                    distanceFilterTitle: '1 mi',
                    distance: 1610
                });
                break;
            default:
                this.setState({
                    distanceFilterTitle: '0.3 mi',
                    distance: 480
                });
                break;
        }
    }

    handleResultNumberFilter(key){
        switch (key){
            case "1":
                this.setState({
                    resultNumberTitle: '1 Option',
                    resultNumber: 1
                });
                break;
            case "2":
                this.setState({
                    resultNumberTitle: '3 Options',
                    resultNumber: 3
                });
                break;
            case "3":
                this.setState({
                    resultNumberTitle: '5 Options',
                    resultNumber: 5
                });
                break;
            default:
                this.setState({
                    resultNumberTitle: '3 Options',
                    resultNumber: 3
                });
                break;
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
                    distanceFilterTitle={this.state.distanceFilterTitle}
                    handleDistanceFilter={this.handleDistanceFilter}
                    resultNumberTitle={this.state.resultNumberTitle}
                    handleResultNumberFilter={this.handleResultNumberFilter}
                />
                <div>
                    <Results
                        searchInput={this.state.searchInput}
                        locationInput={this.state.locationInput}
                        priceFilter={this.state.priceFilter}
                        businesses={this.state.businesses}
                        resultNumber={this.state.resultNumber}
                    />
                </div>
            </div>
        );
    }
}

export default App;
