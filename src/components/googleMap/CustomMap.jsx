// Importa las dependencias necesarias
import React from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';


// Configura el componente del mapa
const MapContainer = ({ location }) => {
    const API_KEY = import.meta.env.VITE_API_KEY;


    console.log(location);
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: API_KEY,
  });

  const mapStyles = {
    height: '450px',
    width: '400px',
  };

  const defaultCenter = {
    lat: location[0],
    lng: location[1],
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={mapStyles}
      zoom={15}
      center={defaultCenter}
    >
      <Marker position={defaultCenter} />
    </GoogleMap>
  ) : <></>;
};

export default MapContainer;
