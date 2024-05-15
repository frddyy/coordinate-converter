import React, { useState, useCallback } from "react";
import MarkerManager from "../components/MarkerManager";
import ConverterModal from "../components/ConverterModal";

/**
 * HomePage component for displaying the main page with map and converter modal.
 * @returns {JSX.Element} The rendered component
 */

const HomePage = () => {
  const [coordinates, setCoordinates] = useState(null);
  const [mapCoordinates, setMapCoordinates] = useState(null);

  const handleAddToMap = useCallback((coords) => {
    setCoordinates(coords);
  }, []);

  const handleMapClick = useCallback((coords) => {
    setMapCoordinates(coords);
  }, []);

  return (
    <div className="relative h-screen w-screen">
      <ConverterModal
        onAddToMap={handleAddToMap}
        mapCoordinates={mapCoordinates}
      />
      <MarkerManager coordinates={coordinates} onMapClick={handleMapClick} />
    </div>
  );
};

export default HomePage;
