import React, { useState } from "react";
import { parseDMS } from "../utils/coordinateUtils";

/**
 * DMSForm component for converting DMS to Decimal Degrees.
 * @param {Object} props - Component properties
 * @param {Function} props.onConvert - Callback function for conversion
 * @returns {JSX.Element} The rendered component
 */

const DMSForm = ({ onConvert }) => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [latitudeError, setLatitudeError] = useState(null);
  const [longitudeError, setLongitudeError] = useState(null);

  const handleLatitudeChange = (e) => {
    setLatitude(e.target.value);
  };

  const handleLongitudeChange = (e) => {
    setLongitude(e.target.value);
  };

  const handleConvert = () => {
    const dmsPattern = /^\d+° \d+' \d+(\.\d+)?"/;
    let valid = true;

    if (!dmsPattern.test(latitude)) {
      setLatitudeError(
        "Latitude must be in DMS format (e.g., 40° 26' 46\" N)."
      );
      valid = false;
    } else {
      setLatitudeError(null);
    }

    if (!dmsPattern.test(longitude)) {
      setLongitudeError(
        "Longitude must be in DMS format (e.g., 79° 58' 36\" W)."
      );
      valid = false;
    } else {
      setLongitudeError(null);
    }

    if (valid) {
      const latitudeDD = parseDMS(latitude);
      const longitudeDD = parseDMS(longitude);
      onConvert({ latitude: latitudeDD, longitude: longitudeDD });
    }
  };

  return (
    <div className="p-4 md:p-5">
      <h5 className="block mb-2 text-md font-semibold text-gray-900 dark:text-white">
        Latitude
      </h5>
      <div className="mb-4">
        <input
          type="text"
          value={latitude}
          onChange={handleLatitudeChange}
          id="latitude-dms-input"
          className={`bg-gray-50 border ${
            latitudeError ? "border-red-500" : "border-gray-300"
          } text-gray-900 text-xs rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-600 dark:border-${
            latitudeError ? "red-500" : "gray-500"
          } dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`}
          placeholder={`Enter latitude in DMS format (e.g., 40° 26' 46" N)`}
          required
        />
        {latitudeError && (
          <p data-testid="latitude-error" className="text-red-500 text-xs mt-1">
            {latitudeError}
          </p>
        )}
      </div>
      <h5 className="block mb-2 text-md font-semibold text-gray-900 dark:text-white">
        Longitude
      </h5>
      <div className="mb-4">
        <input
          type="text"
          value={longitude}
          onChange={handleLongitudeChange}
          id="longitude-dms-input"
          className={`bg-gray-50 border ${
            longitudeError ? "border-red-500" : "border-gray-300"
          } text-gray-900 text-xs rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-600 dark:border-${
            longitudeError ? "red-500" : "gray-500"
          } dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`}
          placeholder={`Enter longitude in DMS format (e.g., 79° 58' 36" W)`}
          required
        />
        {longitudeError && (
          <p
            data-testid="longitude-error"
            className="text-red-500 text-xs mt-1"
          >
            {longitudeError}
          </p>
        )}
      </div>
      <button
        type="button"
        className="text-white inline-flex items-center justify-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={handleConvert}
      >
        Convert to DD
      </button>
    </div>
  );
};

export default DMSForm;
