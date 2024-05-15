import React, { useRef, useEffect } from "react";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { fromLonLat, toLonLat } from "ol/proj";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import VectorSource from "ol/source/Vector";
import VectorLayer from "ol/layer/Vector";
import { Style, Icon } from "ol/style";
import "ol/ol.css";

const MarkerManager = ({ coordinates, onMapClick }) => {
  const mapRef = useRef();
  const markerLayerRef = useRef();
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
          center: fromLonLat([0, 0]),
          zoom: 2,
        }),
      });

      markerLayerRef.current = new VectorLayer({
        source: new VectorSource(),
        style: new Style({
          image: new Icon({
            src: "https://openlayers.org/en/latest/examples/data/icon.png",
            scale: 0.2, // Perbesar ukuran marker
          }),
        }),
      });

      mapInstanceRef.current.addLayer(markerLayerRef.current);

      // Add click event listener to map
      mapInstanceRef.current.on("click", (event) => {
        const [lon, lat] = toLonLat(event.coordinate);
        if (onMapClick) {
          onMapClick({ longitude: lon, latitude: lat });
        }
        const marker = new Feature({
          geometry: new Point(fromLonLat([lon, lat])),
        });
        markerLayerRef.current.getSource().clear();
        markerLayerRef.current.getSource().addFeature(marker);
        mapInstanceRef.current.getView().setCenter(fromLonLat([lon, lat]));
        mapInstanceRef.current.getView().setZoom(10);
      });
    }
  }, [onMapClick]);

  useEffect(() => {
    if (coordinates) {
      markerLayerRef.current.getSource().clear();
      const marker = new Feature({
        geometry: new Point(
          fromLonLat([coordinates.longitude, coordinates.latitude])
        ),
      });
      markerLayerRef.current.getSource().addFeature(marker);
      mapInstanceRef.current
        .getView()
        .setCenter(fromLonLat([coordinates.longitude, coordinates.latitude]));
      mapInstanceRef.current.getView().setZoom(10);
    }
  }, [coordinates]);

  useEffect(() => {
    const mapElement = document.getElementById("map");
    const attributionElement = mapElement.querySelector(".ol-attribution");
    const controlsElement = mapElement.querySelector(".ol-controls");

    if (attributionElement) {
      attributionElement.classList.add(
        "p-2",
        "bg-gray-800",
        "text-white",
        "rounded-lg",
        "opacity-75",
        "m-2",
        "absolute",
        "bottom-4",
        "right-4"
      );
    }

    if (controlsElement) {
      controlsElement.classList.add(
        "flex",
        "space-x-2",
        "bg-gray-800",
        "text-white",
        "rounded-lg",
        "p-2"
      );
      controlsElement.querySelectorAll("button").forEach((button) => {
        button.classList.add("p-2", "bg-gray-700", "rounded");
      });
    }
  }, []);

  return <div id="map" ref={mapRef} className="absolute inset-0" />;
};

export default MarkerManager;
