import React, { useState, useEffect } from "react";

const ReverseGeocode = ({ latitude, longitude }) => {
  const [pincode, setPincode] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const getPincode = async () => {
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        const address = data.address;
        if (address && address.postcode) {
          setPincode(address.postcode);
        } else {
          setError("No postal code found");
        }
      } catch (err) {
        setError(err.message);
      }
    };

    if (latitude && longitude) {
      getPincode();
    }
  }, [latitude, longitude]);

  return (
    <div>
      <h1>Postal Code Finder</h1>
      {error && <p>Error: {error}</p>}
      {pincode ? <p>Postal Code: {pincode}</p> : <p>Fetching postal code...</p>}
    </div>
  );
};

const LocationFinder = () => {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [error, setError] = useState("");

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

  return (
    <div>
      {/* <h1>Your Location</h1> */}
      {error && <p>Error: {error}</p>}
      {location.latitude && location.longitude ? (
        <ReverseGeocode
          latitude={location.latitude}
          longitude={location.longitude}
        />
      ) : (
        <p>Fetching location...</p>
      )}
    </div>
  );
};

export default LocationFinder;
