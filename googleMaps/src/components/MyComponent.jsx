import React from 'react';
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';

const containerStyle = {
  width: '800px',
  height: '400px'
};

const initialCenter = {
  lat: 32.73124,
  lng: -97.32594
};

const markerPosition = {
  lat: 32.73124,
  lng: -97.32594
};

function MyComponent() {
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
      center={initialCenter}
      zoom={15} // Adjust the initial zoom level as needed
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <MarkerF  position={markerPosition} />
    </GoogleMap>
  ) : (
    <>Map could not load</>
  );
}

export default React.memo(MyComponent);


