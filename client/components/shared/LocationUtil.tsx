import axios from "axios";

const getLocation = async (): Promise<{
  city: string;
  country: string;
  error?: string;
}> => {
  return new Promise((resolve) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          try {
            const response = await axios.get(
              `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=4b2dd81bb10547d6975ec6c12d2bd166`
            );
            const { city, country } = response.data.results[0].components;
            resolve({ city, country });
          } catch {
            resolve({
              city: "",
              country: "",
              error: "Failed to fetch location data.",
            });
          }
        },
        (error) => {
          switch (error.code) {
            case error.PERMISSION_DENIED:
              resolve({
                city: "",
                country: "",
                error: "User denied the request for Geolocation.",
              });
              break;
            case error.POSITION_UNAVAILABLE:
              resolve({
                city: "",
                country: "",
                error: "Location information is unavailable.",
              });
              break;
            case error.TIMEOUT:
              resolve({
                city: "",
                country: "",
                error: "The request to get user location timed out.",
              });
              break;
            default:
              resolve({
                city: "",
                country: "",
                error: "An unknown error occurred.",
              });
              break;
          }
        }
      );
    } else {
      resolve({
        city: "",
        country: "",
        error: "Geolocation is not supported by this browser.",
      });
    }
  });
};

export default getLocation;
