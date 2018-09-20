import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LocationList from './../components/LocationList';
import { setCity } from './../actions';
import { connect } from 'react-redux';

class LocationListContainer extends Component {

    handleSelectedLocation = city => {
		this.props.dispatchSetCity(city);
    };

    render() {
        const {cities} = this.props;
        return (
            <LocationList cities={cities} onSelectedLocation={this.handleSelectedLocation} />
        );
    };

};

LocationListContainer.propTypes = {
    setCity: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
};

const mapDispatchToProps = dispatch => ({
	dispatchSetCity: value => dispatch(setCity(value))
});

export default connect(null, mapDispatchToProps)(LocationListContainer);