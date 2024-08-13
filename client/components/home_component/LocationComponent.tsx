import { useState, useEffect } from "react";
import axios from "axios";

const LocationComponent = () => {
  const [location, setLocation] = useState({ city: "", country: "" });
  const [error, setError] = useState("");

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  }, []);

  const showPosition = async (position: GeolocationPosition) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    try {
      const response = await axios.get(
        `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=YOUR_OPENCAGE_API_KEY`
      );
      const { city, country } = response.data.results[0].components;
      setLocation({ city, country });
    } catch (error) {
      setError("Failed to fetch location data.");
    }
  };

  const showError = (error: GeolocationPositionError) => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        setError("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        setError("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        setError("The request to get user location timed out.");
        break;
      default:
        setError("An unknown error occurred.");
        break;
    }
  };

  return (
    <div>
      {location.city && location.country ? (
        <p>
          City: {location.city}, Country: {location.country}
        </p>
      ) : (
        <p>Loading location...</p>
      )}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default LocationComponent;
