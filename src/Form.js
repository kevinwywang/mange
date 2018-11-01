import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {ButtonToolbar, ToggleButtonGroup, ToggleButton, DropdownButton, MenuItem} from 'react-bootstrap';

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
                        <DropdownButton title={this.props.distanceFilterTitle} id="distance-dropdown"  onSelect={this.props.handleDistanceFilter}>
                            <MenuItem eventKey="1">0.3 mi</MenuItem>
                            <MenuItem eventKey="2">0.6 mi</MenuItem>
                            <MenuItem eventKey="3">1 mi</MenuItem>
                        </DropdownButton>
                        <DropdownButton title={this.props.resultNumberTitle} id="results-number-dropdown"  onSelect={this.props.handleResultNumberFilter}>
                            <MenuItem eventKey="1">1 Option</MenuItem>
                            <MenuItem eventKey="2">3 Options</MenuItem>
                            <MenuItem eventKey="3">5 Options</MenuItem>
                        </DropdownButton>
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
    handleDistanceFilter: PropTypes.func.isRequired,
    handleResultNumberFilter: PropTypes.func.isRequired,
    distanceFilterTitle: PropTypes.string.isRequired,
    resultNumberTitle: PropTypes.string.isRequired,
}

export default Form;
