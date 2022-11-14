import React, { useState } from "react";
import { GoPerson } from "react-icons/go";
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from "react-google-maps";
import basketmarker from "../Images/basketmarker.png";
import properties from "./properties.json";



const center = {
    lat: 34.840190,
    lng: -82.398320
};

function MapComponent() {
    const [selectedProperty, setSelectedProperty] = useState(null);

    return (
        <GoogleMap
            defaultZoom={10}
            defaultCenter={center}
        >
           
        </GoogleMap>
    )
}

const WrappedMap = withScriptjs(withGoogleMap(MapComponent));

function MapForCourses() {

    return (
        <WrappedMap
            googleMapURL= {`https://maps.googleapis.com/maps/api/js?key=AIzaSyBtwbxJr-24ad6yYEC-j1WjAHRiqp2l-Uo&
            v=3.exp&libraries=geometry,drawing,places&amp;`} 
            loadingElement={<div style={{ height: "100%"}} />}
            containerElement={<div style={{ height:"400px"}} />}
            mapElement={<div style={{ height: "100%"}} />}
        />
);

}

export default MapForCourses;