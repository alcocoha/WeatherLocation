import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ForecastExtenden from '../components/ForecastExtended';

class ForecastExtendedContainer extends Component {
    render() {
        const { city } = this.props;
        return (
            city &&
            <ForecastExtenden city={city}></ForecastExtenden>
        );
    };
};

ForecastExtendedContainer.propTypes = {
    city: PropTypes.string.isRequired
};

const mapStateToProps = ({ city }) => ({
    city
});

export default connect(mapStateToProps)(ForecastExtendedContainer);