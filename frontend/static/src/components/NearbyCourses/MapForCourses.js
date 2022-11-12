import React from "react";
import { GoPerson } from "react-icons";
import { GoogleMap, LoadScript, Marker} from "@react-google-maps/api";

const containerStyle = {
    width: "400px",
    height: "400px",
};

const center = {
    lat: 34.840190,
    lng: -82.398320
};



function MapForCourses() {

    // const markerMe = new google.maps.Marker ({
    //     position: center,
    //     title: "Me",
    //     icon: <GoPerson />,
    // })

    return (
        <LoadScript
            googleMapsApiKey="AIzaSyBtwbxJr-24ad6yYEC-j1WjAHRiqp2l-Uo"
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
            ></GoogleMap>
    </LoadScript>
);

}

export default MapForCourses;