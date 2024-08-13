"use client";

import React, { useEffect, useState } from "react";
import getLocation from "./LocationUtil";

const UserLocation = () => {
  const [location, setLocation] = useState({
    city: "Location not available",
    country: "",
  });

  useEffect(() => {
    const fetchLocation = async () => {
      const result = await getLocation();
      if (result.city && result.country) {
        setLocation(result);
      } else {
        // Keep the default location message
        setLocation({ city: "Location not available", country: "" });
      }
    };

    fetchLocation();
  }, []);

  return (
    <div>
      <p className="text-[0.8rem]">My Location</p>
      <p className="text-[1rem] text-vibrant-pink">
        {location.city === "Location not available"
          ? location.city
          : `${location.city}, ${location.country}`}
      </p>
    </div>
  );
};

export default UserLocation;
