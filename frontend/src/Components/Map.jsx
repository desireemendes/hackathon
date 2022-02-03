import { useState } from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';


function Map() {
  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitude: 46,
    longitude: 17,
    zoom: 4
  });

  return (
    <div>
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
      onViewportChange={nextViewport => setViewport(nextViewport)}
    >
    <Marker latitude={37.78} longitude={-122.41} offsetLeft={-20} offsetTop={-10}>
        <div>You are here</div>
      </Marker>
      </ReactMapGL>
      </div>
  );
}

export default Map