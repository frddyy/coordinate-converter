import React from 'react';
import CoordinateConverter from '../components/CoordinateConverter';
import MarkerManager from '../components/MarkerManager';

/**
 * HomePage component to display the main page content.
 * @component
 */
const HomePage = () => {
  const [coordinates, setCoordinates] = React.useState(null);

  const handleConversion = (dd) => {
    const [lat, lon] = dd.split(',').map(Number);
    setCoordinates([lon, lat]);
  };

  const handleAddToMap = (coords) => {
    setCoordinates([coords.longitude, coords.latitude]);
  };

  return (
    <div>
       <div className="mx-auto max-width p-4 m-4">
        <h2 className="text-4xl font-bold tracking-tight text-black text-center">
          Welcome to the Coordinate Converter App
        </h2>
        {/* <p className="mt-6 text-lg leading-8 text-gray-300">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
          aliqua.
        </p> */}
      </div>
      <CoordinateConverter onConvert={handleConversion} onAddToMap={handleAddToMap} />
      <MarkerManager coordinates={coordinates} />
    </div>
  );
};

export default HomePage;

