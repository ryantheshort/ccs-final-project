import React, { useState } from 'react';
import { GoogleMap, InfoWindow, Marker } from '@react-google-maps/api';
import { Nav } from 'react-bootstrap';
// import Image from "../Images/basketmarker.png";

// const icon = {Image};
/*global google*/
const markers = [

    {
        id: 1,
        name: "Timmons Park",
        position: {lat: 34.86627452792027, lng: -82.37556071534317}
        // mapsUrl: "https://maps.google.com/maps?ll=34.866275,-82.375561&z=18&t=m&hl=en-US&gl=US&mapclient=apiv3"
    },
    {
        id: "2",
        name: "Dolly Cooper Park",
        position: {lat: 34.803070641703165, lng: -82.47176235397049}
    },
    {
        id: "3",
        name: "Century Park",
        position: {lat: 34.930609200890686, lng: -82.24028351534548}
    },
    {
        id: "4",
        name: "Gower Park",
        position:  {lat: 34.828500, lng: -82.349600}
    },
    {
        id: "5",
        name: "Golden Grove Farm and Brew",
        position: {lat: 34.682363, lng: -82.519991}
    },
    {
        id: "6",
        name: "Tyger River",
        position: {lat: 34.869180, lng: -82.100640}
    },
    {
        id: "7",
        name: "Grand Central Station DGC",
        position: {lat: 34.711441, lng: -82.781471}
    },
    {
        id: "8",
        name: "Holston Creek",
        position: {lat: 35.062548, lng: -82.170364}
    },
    {
        id: "9",
        name: "Hampton Park DGC",
        position: {lat: 34.898217, lng: -82.398016}
    },
    {
        id: "10",
        name: "The Firecracker",
        position: {lat: 34.691507, lng: -82.210274}
    },
    {
        id: "11",
        name: "Dacusville Disc Golf Course",
        positon: {lat: 34.913918, lng: -82.544487}
    },
    {
        id: "12",
        name: "Easley High School",
        position: {lat: 34.789013, lng: -82.583644}
    },
    {
        id: "13",
        name: "THE GOSPEL DISCovery",
        position: {lat: 34.781176, lng: -82.245788}
    },
    {
        id: "14",
        name: "The Trails",
        position: {lat: 34.544362, lng: -82.682939}
    },
    {
        id: "15",
        name: "Foothills",
        position: {lat: 34.804100, lng: -82.585300}
    },
];

// const center = {
//     lat: 34.840190,
//     lng: -82.398320
// };
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
            onLoad={handleOnLoad}
            
            // onUnmount={onUnmount}
        >
              {markers.map(({ id, name, position}) => (
        <Marker
          key={id}
          position={position}
        //   icon={icon}
          onClick={() => handleActiveMarker(id)}
        >
          {activeMarker === id ? (
            <InfoWindow onCloseClick={() => setActiveMarker(null)}>
              <div>{name}</div>
              {/* <div><Nav.Link href={mapsUrl}>Directions on Google Maps</Nav.Link></div> */}
             
            </InfoWindow>
          ) : null}
        </Marker>
      ))}  
        
        </GoogleMap>
    ) 
    }


export default MapForCourses;