import React, { useState } from "react";
import { convertDdToDms } from "../utils/coordinateUtils";

const DDForm = ({ onConvert }) => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [latitudeError, setLatitudeError] = useState(null);
  const [longitudeError, setLongitudeError] = useState(null);
  const [converted, setConverted] = useState(null);

  const handleLatitudeChange = (e) => {
    setLatitude(e.target.value);
  };

  const handleLongitudeChange = (e) => {
    setLongitude(e.target.value);
  };

  const validateDecimalDegrees = (dd) => {
    const ddPattern = /^-?\d+(\.\d+)?$/;
    return ddPattern.test(dd);
  };

  const handleConvert = () => {
    let valid = true;

    if (!validateDecimalDegrees(latitude)) {
      setLatitudeError(
        "Latitude must be in decimal degrees format (e.g., 40.446)."
      );
      valid = false;
    } else {
      setLatitudeError(null);
    }

    if (!validateDecimalDegrees(longitude)) {
      setLongitudeError(
        "Longitude must be in decimal degrees format (e.g., -79.976)."
      );
      valid = false;
    } else {
      setLongitudeError(null);
    }

    if (valid) {
      const convertedResult = convertDdToDms({ latitude, longitude });
      setConverted(convertedResult);
      onConvert({
        latitude: parseFloat(latitude),
        longitude: parseFloat(longitude),
      });
    }
  };

  return (
    <div className="pb-2 pt-4 px-4 md:pt-5 md:px-5 md:pb-2.5">
      <h5 className="block mb-2 text-md font-semibold text-gray-900 dark:text-white">
        Latitude
      </h5>
      <div className="mb-4 relative">
        <input
          type="text"
          value={latitude}
          onChange={handleLatitudeChange}
          id="latitude-dd-input"
          className={`bg-gray-50 border ${
            latitudeError ? "border-red-500" : "border-gray-300"
          } text-gray-900 text-xs rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-600 dark:border-${
            latitudeError ? "red-500" : "gray-500"
          } dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`}
          placeholder="Enter latitude in decimal degrees (e.g., 40.446)"
          required
        />
        <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500">
          °
        </span>
        {latitudeError && (
          <p className="text-red-500 text-xs mt-1">{latitudeError}</p>
        )}
      </div>
      <h5 className="block mb-2 text-md font-semibold text-gray-900 dark:text-white">
        Longitude
      </h5>
      <div className="mb-4 relative">
        <input
          type="text"
          value={longitude}
          onChange={handleLongitudeChange}
          id="longitude-dd-input"
          className={`bg-gray-50 border ${
            longitudeError ? "border-red-500" : "border-gray-300"
          } text-gray-900 text-xs rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-600 dark:border-${
            longitudeError ? "red-500" : "gray-500"
          } dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`}
          placeholder="Enter longitude in decimal degrees (e.g., -79.976)"
          required
        />
        <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500">
          °
        </span>
        {longitudeError && (
          <p className="text-red-500 text-xs mt-1">{longitudeError}</p>
        )}
      </div>
      <button
        type="button"
        className="text-white inline-flex items-center justify-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={handleConvert}
      >
        Convert to DMS
      </button>
      {converted && (
        <div className="p-4 md:p-5">
          <h5 className="block mb-2 text-md font-semibold text-gray-900 dark:text-white">
            Latitude
          </h5>
          <div className="mb-4 relative">
            <input
              type="text"
              value={converted.latitude}
              id="latitude-dms-output"
              className="bg-gray-50 border w-full border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              disabled
              readOnly
            />
          </div>
          <h5 className="block mb-2 text-md font-semibold text-gray-900 dark:text-white">
            Longitude
          </h5>
          <div className="relative">
            <input
              type="text"
              value={converted.longitude}
              id="longitude-dms-output"
              className="bg-gray-50 border w-full border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              disabled
              readOnly
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default DDForm;
