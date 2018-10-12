import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {ButtonToolbar, ToggleButtonGroup, ToggleButton} from 'react-bootstrap';

class Form extends Component {

    render() {
        return (
            <form onSubmit={this.props.handleOnSubmit} className="form">
                <span className="inline">
                    Find: <input type="text" ref="search" onBlur={this.props.handleSearchInput} />
                </span>
                <span className="inline">
                    Location: <input type="text" ref="location" onBlur={this.props.handleLocationInput} />
                </span>
                <span className="inline">
                    <input type="submit" value="Submit" />
                </span>
                <br />
                <span>
                    <ButtonToolbar className="filter">
                        <ToggleButtonGroup type="checkbox">
                            <ToggleButton value={1} onChange={this.props.handlePriceFilter}>$</ToggleButton>
                            <ToggleButton value={2} onChange={this.props.handlePriceFilter}>$$</ToggleButton>
                            <ToggleButton value={3} onChange={this.props.handlePriceFilter}>$$$</ToggleButton>
                            <ToggleButton value={4} onChange={this.props.handlePriceFilter}>$$$$</ToggleButton>
                        </ToggleButtonGroup>
                    </ButtonToolbar>
                </span>
            </form>
        );
    }

}

Form.propTypes = {
    handleOnSubmit: PropTypes.func.isRequired,
    handleSearchInput: PropTypes.func.isRequired,
    handleLocationInput: PropTypes.func.isRequired,
    handlePriceFilter: PropTypes.func.isRequired,
}

export default Form;
