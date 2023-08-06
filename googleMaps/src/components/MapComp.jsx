import React, { useState, useCallback, useEffect } from 'react';
import { GoogleMap, useJsApiLoader, MarkerF, LoadScript } from '@react-google-maps/api';

export default function MapContainer() {
  const [address, setAddress] = useState(' 1234 N Main St, Fort Worth, TX 76106, USA');
  const coordinates = {  lat: 32.776390, lng: -97.345700 };
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAOXrBGty4UmANDZbuXAy6OOvUkURjZ02o"
  });

  useEffect(() => {
    geocodeAddress();
  }, []);
  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map) {
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback() {
    setMap(null);
  }, []);

  function geocodeAddress() {
    const geocoder = new window.google.maps.Geocoder();

    geocoder.geocode({ address }, (results, status) => {
      if (status === 'OK') {  const location = results[0].geometry.location;
      } else {
        console.error('Geocode unsuccessful for the reason: ', status);
      }
    });
  };



  return isLoaded ?  (
    <div>
     <GoogleMap
          mapContainerStyle={{ width: '800px', height: '400px' }}
          center={coordinates}
          zoom={14}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          <MarkerF position={coordinates} />
        </GoogleMap>
      <div>
        <p>Address: {address}</p>
        <button onClick={geocodeAddress}>Get Address</button>
      </div>

  </div>) : (
    <>Map could not load</>
  );
}
