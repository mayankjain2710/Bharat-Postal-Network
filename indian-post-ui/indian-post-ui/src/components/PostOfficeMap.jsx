import { useCallback, useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
  borderRadius: '0.5rem'
};

const PostOfficeMap = ({ senderAddress, nearestOffice }) => {
  const [directions, setDirections] = useState(null);
  const [map, setMap] = useState(null);
  const [center, setCenter] = useState({
    lat: 20.5937,
    lng: 78.9629
  });

  const onLoad = useCallback((map) => {
    setMap(map);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  useEffect(() => {
    if (senderAddress && nearestOffice) {
      const directionsService = new window.google.maps.DirectionsService();

      const origin = `${senderAddress.address}, ${senderAddress.city}, ${senderAddress.state}, ${senderAddress.pincode}`;
      const destination = {
        lat: nearestOffice.latitude,
        lng: nearestOffice.longitude
      };

      directionsService.route(
        {
          origin: origin,
          destination: destination,
          travelMode: window.google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === window.google.maps.DirectionsStatus.OK) {
            setDirections(result);
            // Update center to be between origin and destination
            if (result.routes[0]?.bounds) {
              const bounds = result.routes[0].bounds;
              const center = {
                lat: (bounds.getNorthEast().lat() + bounds.getSouthWest().lat()) / 2,
                lng: (bounds.getNorthEast().lng() + bounds.getSouthWest().lng()) / 2
              };
              setCenter(center);
            }
          } else {
            console.error('Error fetching directions:', status);
          }
        }
      );
    }
  }, [senderAddress, nearestOffice]);

  if (!senderAddress || !nearestOffice) {
    return null;
  }

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Route to Nearest Post Office</h3>
      <div className="rounded-lg overflow-hidden shadow-lg">
        <LoadScript googleMapsApiKey="AIzaSyDWoaFLboz_rRrgbMuLXNTqHOItV_OpP98">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={12}
            onLoad={onLoad}
            onUnmount={onUnmount}
          >
            {/* Sender Location Marker */}
            <Marker
              position={{
                lat: parseFloat(senderAddress.latitude || center.lat),
                lng: parseFloat(senderAddress.longitude || center.lng)
              }}
              icon={{
                url: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
                labelOrigin: new window.google.maps.Point(0, -32),
              }}
              label={{
                text: "Sender",
                color: "#C2410C",
                fontWeight: "bold",
              }}
            />

            {/* Post Office Marker */}
            <Marker
              position={{
                lat: parseFloat(nearestOffice.latitude),
                lng: parseFloat(nearestOffice.longitude)
              }}
              icon={{
                url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
                labelOrigin: new window.google.maps.Point(0, -32),
              }}
              label={{
                text: "Post Office",
                color: "#1D4ED8",
                fontWeight: "bold",
              }}
            />

            {/* Directions */}
            {directions && (
              <DirectionsRenderer
                directions={directions}
                options={{
                  suppressMarkers: true,
                  polylineOptions: {
                    strokeColor: "#C2410C",
                    strokeWeight: 4,
                  },
                }}
              />
            )}
          </GoogleMap>
        </LoadScript>
      </div>
      
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h4 className="font-semibold text-gray-700 mb-2">From</h4>
          <p className="text-sm text-gray-600">
            {senderAddress.address}, {senderAddress.city}, {senderAddress.state}, {senderAddress.pincode}
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h4 className="font-semibold text-gray-700 mb-2">To</h4>
          <p className="text-sm text-gray-600">
            {nearestOffice.officename}, {nearestOffice.district}, {nearestOffice.state}, {nearestOffice.pincode}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostOfficeMap; 