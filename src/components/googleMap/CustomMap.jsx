import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

// eslint-disable-next-line react/prop-types
const MapContainer = ({ lat, lang, className }) => {
  const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

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
