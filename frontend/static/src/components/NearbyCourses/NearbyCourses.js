import { useEffect, useState } from "react";

import '../../styles/NearbyCourses.css';
import MapForCourses from "./MapForCourses";
function NearbyCourses() {

    return (
        <div id="mapContainer">
            <div id="mapClipPath">
        
        
                <MapForCourses />
            </div>
        </div>
    )
};

export default NearbyCourses;