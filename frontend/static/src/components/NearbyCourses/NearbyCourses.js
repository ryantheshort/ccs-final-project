import { useEffect, useState } from "react";

import '../../styles/NearbyCourses.css';
import Map from "./Map";
function NearbyCourses() {

    return (
        <div id="mapContainer">
            <div id="mapClipPath">
        
        
                <Map />
            </div>
        </div>
    )
};

export default NearbyCourses;

