import React, { Component } from 'react';
import PropTypes from 'prop-types';



class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
                {this.props.businesses && this.props.businesses.businesses.map((business) => (
                    <p key={business.id}>
                    <img src={business.image_url} alt="restaurant" />
                    {console.log(business.image_url)}
                        {business.name}
                    </p>
                ))}

            </div>
        );
    }

}

Results.propTypes = {
    businesses: PropTypes.object,
}

export default Results;
