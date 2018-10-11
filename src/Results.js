import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const config = {
  headers: {'Authorization': 'Bearer zUfErj44h2ajR_tWZ1UIsFQ6Vdqad6HLCgfKX45jLbN0XCPIpW-GSs4RJ422WnXkeIoCyWF2gsRBdyOsHtJnMPDq1qH_pIVCLsPWOQylNScUwv5JQTJimbnu0BKsW3Yx'},
};

class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }


    componentWillMount() {
        axios.get('https://api.yelp.com/v3/businesses/search', config)
        .then(response => console.log(response));
    }

    render() {
        return (
            <div>
            </div>
        );
    }

}

Results.propTypes = {
    searchInput: PropTypes.string.isRequired,
    locationInput: PropTypes.string.isRequired,
    priceFilter: PropTypes.array
}

export default Results;
