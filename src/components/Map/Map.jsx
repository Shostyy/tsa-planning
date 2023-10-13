import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

export const Map = () => {

  /**/ 
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3001/api')
          .then(response => setData(response.data))
          .catch(error => console.error('Error', error));
    }, []);
    
    const containerStyle = {
      width: '100%',
      height: '100%'
    };
  
    let center = {
      lat: 50.39581629,
      lng: 30.50185011,
    };

    


    /*if (data && data.length > 0) {
      center = {
        lat: data[0].lat,
        lng: data[0].lng
      };
    }*/
    

    data && data.map(item => console.log(item));

    return (
      <div style={{ height: '100%', width: '100%' }}>
        <LoadScript
          googleMapsApiKey="AIzaSyDUXJu8oMI6rN_tms3qcBoHQzev_frIHJw"
        >
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={8}
          >
            {
              data && data.map(item => (
                <Marker
                  key={item.id} 
                  position={{ lat: item.lat, lng: item.lng }}
                  name={item.address}
                />
              ))
            }
          </GoogleMap>
        </LoadScript>
      </div>
    );
}
