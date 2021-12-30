import React from "react";
import PropTypes from 'prop-types';
import { useState } from "react";
import axios from "axios";

const NewLocationForm = (props) => {
    
    const [formFields, setFormFields] = useState({
            name:'',
            })
    
    const getCoordinates = (name) => {
        let lat, lon
        axios.get('https://us1.locationiq.com/v1/search.php', {
            params: {
            key: 'pk.a4ee20e6824496da2fb04ab94b9da2dc',  // discussed below
            q: name,
            format: 'json',
            },
            })
        .then((response) => {
            lon = response.data[0].lon
            lat = response.data[0].lat
            console.log('success!', lat, lon);
            })
        .then( () => {
            console.log(lat)
            console.log(lon)
            const newLocation = {
                name:formFields.name,
                lat: lat,
                lon: lon
                }
            props.onUpdateLocation(newLocation)
            })
        .then(()=>{
            setFormFields({name:''})})
        .catch((error) => {
            console.log('error!', error.response.data.error);
            const response = {
                error:formFields.name,
                name:error.response.data.error,
            }
            props.onUpdateLocation(response)
        });
        
        return {lat, lon}
        }
    
    const onFormSubmit = (event) =>{
        event.preventDefault();
        getCoordinates(formFields.name)
        }
    
    const onLocationChange = (event) => {
        setFormFields({
            ...formFields,
            name: event.target.value
            })
        };
    
    
    return (
        <form onSubmit={onFormSubmit}>
            <div>
                <label htmlFor="city"></label>
                <input 
                name="city" 
                value={formFields.name}
                onChange={onLocationChange}/>
            <input type='submit' value='Search Now!'></input>
            </div>
        </form>

    )
}

NewLocationForm.propTypes = {
    onUpdateLocation:PropTypes.func.isRequired,
}
export default NewLocationForm;