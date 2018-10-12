import React, { Component } from 'react';
import PropTypes from 'prop-types';



class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    render() {
        return (
            <div>
            </div>
        );
    }

}

Results.propTypes = {

}

export default Results;
