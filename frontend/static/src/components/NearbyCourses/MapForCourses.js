import React, { useState } from 'react';
import { GoogleMap, InfoWindow, LoadScript, DirectionsService, DirectionsRenderer, useJsApiLoader, Marker } from '@react-google-maps/api';

const google = window.google;
const markers = [

    {
        id: 1,
        name: "Timmons Park",
        position: {lat: 34.86627452792027, lng: -82.37556071534317}
    }

];

const center = {
    lat: 34.840190,
    lng: -82.398320
};
function MapForCourses() {

    const [activeMarker, setActiveMarker] = useState(null);

    const handleActiveMarker = (marker) => {
      if (marker === activeMarker) {
        return;
      }
      setActiveMarker(marker);
    };

    const handleOnLoad = (map) => {
        const bounds = new google.maps.LatLngBounds();
        markers.forEach(({ position }) => bounds.extend(position));
        map.fitBounds(bounds);
      };
       
    return  (
    
        <GoogleMap
            mapContainerStyle={{ width: "100vw", height: "100vh" }}
            onClick={() => setActiveMarker(null)}
            center={center}  
            zoom={10}
            onLoad={handleOnLoad}
            // onUnmount={onUnmount}
        >
              {markers.map(({ id, name, position }) => (
        <Marker
          key={id}
          position={position}
          onClick={() => handleActiveMarker(id)}
        >
          {activeMarker === id ? (
            <InfoWindow onCloseClick={() => setActiveMarker(null)}>
              <div>{name}</div>
            </InfoWindow>
          ) : null}
        </Marker>
      ))}  
        
        </GoogleMap>
    ) 
    }


export default MapForCourses;