import React, { Component } from 'react';
import PropTypes from 'prop-types';



class Results extends Component {

    render() {
        const {resultNumber, businesses} = this.props;
        const businessNumberResults = [];
        if(businesses){
            for (let i = 0; i < resultNumber; i++){
                const randomBusinessNumber = Math.floor(Math.random() * businesses.businesses.length);
                businessNumberResults.includes(randomBusinessNumber) ? i-- : businessNumberResults.push(randomBusinessNumber);
            }
        }


        return (
            <div>
                {businesses && businessNumberResults.map(num => (
                    <p key={businesses.businesses[num].id}>
                    <img src={businesses.businesses[num].image_url} alt="restaurant"  width="200" height="200" />
                        {businesses.businesses[num].name}
                    </p>
                ))}
                


            </div>
        );
    }

}

Results.propTypes = {
    businesses: PropTypes.object,
    resultNumber: PropTypes.number.isRequired,
}

export default Results;
