import React, { useRef, useEffect } from "react";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { fromLonLat } from "ol/proj";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import VectorSource from "ol/source/Vector";
import VectorLayer from "ol/layer/Vector";
import { Style, Icon } from "ol/style";

/**
 * MarkerManager component to handle marker operations on the map.
 * @component
 */
const MarkerManager = ({ coordinates }) => {
  const mapRef = useRef();
  const markerLayerRef = useRef();

  useEffect(() => {
    if (!mapRef.current) {
      mapRef.current = new Map({
        target: "map",
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
        ],
        view: new View({
          center: fromLonLat([0, 0]),
          zoom: 2,
        }),
      });

      markerLayerRef.current = new VectorLayer({
        source: new VectorSource(),
        style: new Style({
          image: new Icon({
            src: "https://openlayers.org/en/latest/examples/data/icon.png",
            scale: 0.1,
          }),
        }),
      });

      mapRef.current.addLayer(markerLayerRef.current);
    }
  }, []);

  useEffect(() => {
    if (coordinates) {
      const marker = new Feature({
        geometry: new Point(fromLonLat(coordinates)),
      });

      markerLayerRef.current.getSource().addFeature(marker);
      mapRef.current.getView().setCenter(fromLonLat(coordinates));
      mapRef.current.getView().setZoom(10);
    }
  }, [coordinates]);

  return <div id="map" style={{ width: "100%", height: "400px" }} />;
};

export default MarkerManager;
