import './App.css';
import { useState } from 'react'
import LocationList from './components/LocationList';
import NewLocationForm from './components/NewLocationForm';

function App() {

  // Setting state for location list
  const [locationData, setLocations] = useState([
      {
        id: 1,
        name: 'Seattle',
        lat: '47.6038321',
        lon: '-122.3300624'
      }
    ])
  
  const [error, setError] = useState('')

  const updateLocationData = (updateLocation) => {
    if (updateLocation.name==='Unable to geocode'){
      console.log("Hey we got here and there is an error")
      setError(`Unable to geocode: ${updateLocation.error} does not exist`)
    }
    else {
      const newLocationData = [...locationData]
      const nextId = Math.max(...newLocationData.map(location => location.id)) + 1;
      newLocationData.push({
        id: nextId,
        name:updateLocation.name,
        lat:updateLocation.lat,
        lon:updateLocation.lon
      })
      setLocations(newLocationData)
      setError('')
    }

  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Get Latitude and Longitude</h1>
        <iframe src="https://giphy.com/embed/WNc9R33wbo9C2jB06m" width="480" height="307" frameBorder="0" allowFullScreen=""></iframe>
        <NewLocationForm onUpdateLocation={updateLocationData}/>
        <h2>Results: </h2>
        <LocationList 
        locations={locationData}/>
        <h1 className='error'>{error}</h1>
      </header>
    </div>
  );
}

export default App;
