import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {ButtonToolbar, ToggleButtonGroup, ToggleButton} from 'react-bootstrap';
import './App.css'

class Form extends Component {
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
            <form onSubmit={this.handleOnSubmit} className="Form">
                <span className="inline">
                    Find: <input type="text" ref="search" onBlur={this.handleSearchInput} />
                </span>
                <span className="inline">
                    Location: <input type="text" ref="location" onBlur={this.handleLocationInput} />
                </span>
                <span className="inline">
                    <input type="submit" value="Submit" />
                </span>
                <br />
                <span>
                    <ButtonToolbar>
                        <ToggleButtonGroup type="checkbox">
                            <ToggleButton value={1} onChange={this.handlePriceFilter}>$</ToggleButton>
                            <ToggleButton value={2} onChange={this.handlePriceFilter}>$$</ToggleButton>
                            <ToggleButton value={3} onChange={this.handlePriceFilter}>$$$</ToggleButton>
                            <ToggleButton value={4} onChange={this.handlePriceFilter}>$$$$</ToggleButton>
                        </ToggleButtonGroup>
                    </ButtonToolbar>
                </span>
            </form>
        );
    }

}


export default Form;
