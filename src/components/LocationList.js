import React from 'react';
import PropTypes from 'prop-types';
import Location from './Location';
import './LocationList.css'

const LocationList = (props) => {

    const locationComponents = props.locations.map((location, index)=>{
        return (
            <li className='location' key={index}>
                <Location
                    id={location.id}
                    name={location.name}
                    lat={location.lat}
                    lon={location.lon}>
                </Location>
            </li>
        )
    })

    return (
        <section>
            <ul>
                {locationComponents}
            </ul>
        </section>
    );
};

LocationList.propTypes = {
    locations: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        lat: PropTypes.string.isRequired,
        lon: PropTypes.string.isRequired,
    }))
};

export default LocationList