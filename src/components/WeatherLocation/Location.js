import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'

// SE DESTRUCTURA CITY DIRECTAMENTE EN EL PARAMETRO SERIA LO MISMO QUE const { city } = props;
const Location = ({ city }) => {

    return(
    <div className="LocationCont">
        <h1>{ city }</h1>
    </div>
    );

};

Location.propTypes = {
    city: PropTypes.string.isRequired
}

export default Location;