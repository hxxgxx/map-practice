import { useState } from "react";

import * as React from "react";
import MapGL, { Marker } from "react-map-gl";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiamltcGZyZWQiLCJhIjoiY2twNHU2bzJyMjNzZzJ1cXcweTN6azMyZSJ9.EL6OH1RDBnamvnIFj9tmXw";

function App() {
  const [viewport, setViewport] = useState({
    latitude: 37.5426,
    longitude: 126.981622,
    zoom: 11,
    pitch: 30
  });

  return (
    <div className="App">
      <MapGL
        {...viewport}
        width="100vw"
        height="100vh"
        mapStyle="mapbox://styles/jimpfred/ckpyoslp90u5k17s23zytp443"
        onViewStateChange={setViewport}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      />
    </div>
  );
}

export default App;
