// Importa las dependencias necesarias
import React from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';


// Configura el componente del mapa
const MapContainer = ({ lat, lang, className}) => {
    const API_KEY = import.meta.env.VITE_API_KEY;


    console.log(lat, lang);
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: API_KEY,
  });

  const mapStyles = {
    height: '24rem',
    width: '100%'
    
  };

  const defaultCenter = {
    lat: lat,
    lng: lang,
  };

  return isLoaded ? (
    <div className={className}>
      <GoogleMap
      mapContainerStyle={mapStyles}
      zoom={15}
      center={defaultCenter}
      
    >
      <Marker position={defaultCenter} />
    </GoogleMap>
    </div>
    
  ) : <></>;
};

export default MapContainer;
