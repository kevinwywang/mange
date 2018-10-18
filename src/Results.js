import React, { Component } from 'react';
import PropTypes from 'prop-types';



class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    displayResult = () => {
        return <p>hi</p>
    }

    render() {


        return (
            <div>
                {this.displayResult}
            </div>
        );
    }

}

Results.propTypes = {
    restaurants: PropTypes.array.isRequired,
}

export default Results;
