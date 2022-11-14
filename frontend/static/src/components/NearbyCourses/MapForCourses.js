// import React, { useState } from "react";
// import { GoPerson } from "react-icons/go";
// import { GoogleMapReact } from "google-map-react";
// import basketmarker from "../Images/basketmarker.png";
// import properties from "./properties.json";

// const AnyReactComponent = ({ text }) => <div>{text}</div>;



// function MapForCourses() {

//     const defaultProps = {
//         center: {
//             lat: 34.840190,
//             lng: -82.398320
//         },
//         zoom: 10
//     };

//     const handleApiLoaded = (map, maps) => {
//         // use map and maps objects
//       };
//     return (
//         <div style={{ height: '100vh', width: '100%' }}>
//             <GoogleMapReact
//                 bootstrapURLKeys={{ key: "AIzaSyBtwbxJr-24ad6yYEC-j1WjAHRiqp2l-Uo"}}
//                 defaultCenter={defaultProps.center}
//                 defaultZoom={defaultProps.zoom}
                
//                 yesIWantToUseGoogleMapApiInternals
//                 onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps, properties)}
//                 >
//                   <AnyReactComponent
//                     lat={34.840190}
//                     lng={-82.398320}
//                     text="Me"
//   />
//             </GoogleMapReact>
//        </div>
        
        
// );

// }

// export default MapForCourses;