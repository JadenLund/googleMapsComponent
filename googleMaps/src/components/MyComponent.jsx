import React from 'react';
import { useState } from 'react';
import { GoogleMap, useJsApiLoader, DirectionsRenderer,  DirectionsService, MarkerF } from '@react-google-maps/api';

const containerStyle = {
  width: '800px',
  height: '400px'
};



const center = {
  lat: 32.73124,
  lng: -97.32594
};

function MyComponent() {
  const [directions, setDirections] = useState(""); // Add this line
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAOXrBGty4UmANDZbuXAy6OOvUkURjZ02o" // Replace with your API key
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback() {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15} // Adjust the initial zoom level as needed
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <MarkerF  position={center} />{directions && (
      <DirectionsService
        // Required props
        options={{
          destination: center,
          origin: center,
          travelMode: 'DRIVING', // Adjust travel mode as needed
        }}
        callback={(response) => {
          if (response !== null) {
            setDirections(response);
          }
        }}
      />
    )}

    {/* Render directions on the map */}
    {directions && (
      <DirectionsRenderer
        options={{
          directions: directions,
        }}
      />
    )}
    </GoogleMap>
  ) : (
    <>Map could not load</>
  );
}

export default React.memo(MyComponent);


