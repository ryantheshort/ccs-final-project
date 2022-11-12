import React from "react";
import { LoadScript } from "@react-google-maps/api";

const mapContainerStyle = {
    width: "400px",
    height: "400px",
  };

function MapForCourses() {
    
    return (
        <LoadScript
            googleMapsApiKey="AIzaSyBtwbxJr-24ad6yYEC-j1WjAHRiqp2l-Uo"
    ></LoadScript>
);

}

export default MapForCourses;