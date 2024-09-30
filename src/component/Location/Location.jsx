import React, { useEffect, useState } from "react";

const GeolocationExample = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
          },
          (err) => {
            setError(err.message);
          }
        );
      } else {
        setError("Geolocation is not supported by this browser.");
      }
    };

    getLocation();
  }, []);
  console.log(location);

  return (
    <div>
      <h1>Geolocation Example</h1>
      {error && <p>Error: {error}</p>}
      {location && (
        <p>
          Latitude:{" "}
          <span style={{ fontWeight: "bold" }}> {location.latitude} </span>,
          Longitude:{" "}
          <span style={{ fontWeight: "bold" }}>{location.longitude}</span>
        </p>
      )}
    </div>
  );
};

export default GeolocationExample;
