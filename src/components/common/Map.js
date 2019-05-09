import React from 'react';
import { Map, TileLayer, Marker, Popup} from 'react-leaflet';
import { Link } from 'react-router-dom';

const WonderMap = ({ userPosition, wonders }) => {
  console.log(wonders);
  if(!wonders || !userPosition) return null;
  return (
    <div id='map'>
      <Map center={userPosition || wonders[0].location} zoom={14}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        {userPosition && <Marker position={userPosition}>
        </Marker>}
        {wonders && wonders.map(wonder =>
          <Marker key={wonder._id} position={[wonder.location.lat, wonder.location.lng]}>
            <Popup>
              <Link to={`/wonders/${wonder._id}`}>
                {wonder.name}
              </Link>
            </Popup>
          </Marker>
        )}
      </Map>
    </div>
  );
};

export default WonderMap;
