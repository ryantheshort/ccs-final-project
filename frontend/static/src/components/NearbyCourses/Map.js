import { useLoadScript } from "@react-google-maps/api";
import MapForCourses from "./MapForCourses";

export default function Map() {
    const { isLoaded } = useLoadScript({
      googleMapsApiKey: "AIzaSyBtwbxJr-24ad6yYEC-j1WjAHRiqp2l-Uo" // Add your API key
    });
  
    return isLoaded ? <MapForCourses /> : null;
  }