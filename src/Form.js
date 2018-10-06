import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInput: "",
            locationInput: "",
            items: [],
            toggleButtonClass: "button-off"
        }
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.handleLocationInput = this.handleLocationInput.bind(this);
        this.handleSearchInput = this.handleSearchInput.bind(this);
        this.toggleButtonClass = this.toggleButtonClass.bind(this);
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

    toggleButtonClass() {
        this.setState({toggleButtonClass: this.state.toggleButtonClass === "button-on" ? "button-off" : "button-on"})
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
                    <button className={this.state.toggleButtonClass} onClick={this.toggleButtonClass}>$</button>
                    <button className={this.state.toggleButtonClass} onClick={this.toggleButtonClass}>$$</button>
                    <button className={this.state.toggleButtonClass} onClick={this.toggleButtonClass}>$$$</button>
                    <button className={this.state.toggleButtonClass} onClick={this.toggleButtonClass}>$$$$</button>
                </span>
            </form>
        );
    }

}


export default Form;
