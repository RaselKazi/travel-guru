import React from 'react';
import GoogleMapReact from 'google-map-react';

const Map = () => {
    const map={
        center: { lat: 34.397, lng: 150.644 },
        zoom: 0,
      }
    return (
        <div style={{ height: '550px', width: '80%', margin:"auto", marginTop:"40px" }}>
        <GoogleMapReact
          defaultCenter={map.center}
          defaultZoom={map.zoom}
        >
        </GoogleMapReact>
      </div>
    );
};

export default Map;