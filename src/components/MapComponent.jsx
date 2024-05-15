import React, { useEffect, useRef } from "react";
import "ol/ol.css";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";

/**
 * MapComponent is responsible for rendering the map using OpenLayers.
 * @component
 */
const MapComponent = () => {
  const mapRef = useRef();
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    if (!mapInstanceRef.current) {
      mapInstanceRef.current = new Map({
        target: mapRef.current,
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
        ],
        view: new View({
          center: [0, 0],
          zoom: 2,
        }),
      });
    }
  }, []);

  return <div ref={mapRef} className="w-full h-full" />;
};

export default MapComponent;
