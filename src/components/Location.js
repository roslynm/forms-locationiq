import React from 'react'
import PropTypes from 'prop-types'
import './Location.css'

const Location = (props) => {

    return (
        <section>
            <li className='list-style'> {props.id}. {props.name}
                <div>
                    Latitude:{props.lat}
                </div>
                <div>    
                    Longitude: {props.lon}
                </div>
                <br></br>

            </li>
        </section>
    );
};


Location.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    lat: PropTypes.string.isRequired,
    lon: PropTypes.string.isRequired,
};
export default Location