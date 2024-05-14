import React, { useState } from "react";

/**
 * CoordinateConverter component to handle the conversion between DMS and DD in a flyout menu.
 * @component
 */
const CoordinateConverter = ({ onConvert, onAddToMap }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("DMS to DD");
  const [dms, setDms] = useState({
    latitudeDegrees: "",
    latitudeMinutes: "",
    latitudeSeconds: "",
    latitudeDirection: "",
    longitudeDegrees: "",
    longitudeMinutes: "",
    longitudeSeconds: "",
    longitudeDirection: "",
  });
  const [dd, setDd] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const convertDmsToDd = (dms) => {
    let ddLat =
      parseFloat(dms.latitudeDegrees) +
      parseFloat(dms.latitudeMinutes) / 60 +
      parseFloat(dms.latitudeSeconds) / 3600;
    if (dms.latitudeDirection === "S") {
      ddLat = ddLat * -1;
    }
    let ddLon =
      parseFloat(dms.longitudeDegrees) +
      parseFloat(dms.longitudeMinutes) / 60 +
      parseFloat(dms.longitudeSeconds) / 3600;
    if (dms.longitudeDirection === "W") {
      ddLon = ddLon * -1;
    }
    return { latitude: ddLat.toFixed(6), longitude: ddLon.toFixed(6) };
  };

  const convertDdToDms = (dd) => {
    const absolute = Math.abs(dd);
    const degrees = Math.floor(absolute);
    const minutesNotTruncated = (absolute - degrees) * 60;
    const minutes = Math.floor(minutesNotTruncated);
    const seconds = ((minutesNotTruncated - minutes) * 60).toFixed(2);
    const direction = dd >= 0 ? "N" : "S";
    return `${degrees}° ${minutes}' ${seconds}" ${direction}`;
  };

  const handleDmsChange = (e) => {
    const { name, value } = e.target;
    setDms({ ...dms, [name]: value });
  };

  const handleDdChange = (e) => {
    const { name, value } = e.target;
    if (name === "latitude") {
      setLatitude(value);
    } else {
      setLongitude(value);
    }
  };

  const handleConvertDmsToDd = () => {
    const result = convertDmsToDd(dms);
    setDd(result);
    onConvert && onConvert(result);
  };

  const handleConvertDdToDms = () => {
    const latResult = convertDdToDms(parseFloat(latitude));
    const lonResult = convertDdToDms(parseFloat(longitude));
    setDms({ ...dms, latitude: latResult, longitude: lonResult });
  };

  const handleAddToMap = () => {
    onAddToMap &&
      onAddToMap({
        latitude: parseFloat(dd.latitude),
        longitude: parseFloat(dd.longitude),
      });
  };

  return (
    <div className="relative">
      <button
        type="button"
        className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>Coordinate Converter</span>
        <svg
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
          <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
            <div className="p-4">
              <div className="flex space-x-4">
                <button
                  className={`px-3 py-2 ${
                    activeTab === "DMS to DD"
                      ? "bg-green-500 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                  onClick={() => setActiveTab("DMS to DD")}
                >
                  DMS to DD
                </button>
                <button
                  className={`px-3 py-2 ${
                    activeTab === "DD to DMS"
                      ? "bg-green-500 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                  onClick={() => setActiveTab("DD to DMS")}
                >
                  DD to DMS
                </button>
              </div>

              {activeTab === "DMS to DD" && (
                <div className="mt-4">
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="latitudeDegrees">Latitude Degrees</label>
                    <input
                      id="latitudeDegrees"
                      type="number"
                      name="latitudeDegrees"
                      value={dms.latitudeDegrees}
                      onChange={handleDmsChange}
                      placeholder="Degrees"
                      className="p-2 border rounded"
                    />
                    <label htmlFor="latitudeMinutes">Latitude Minutes</label>
                    <input
                      id="latitudeMinutes"
                      type="number"
                      name="latitudeMinutes"
                      value={dms.latitudeMinutes}
                      onChange={handleDmsChange}
                      placeholder="Minutes"
                      className="p-2 border rounded"
                    />
                    <label htmlFor="latitudeSeconds">Latitude Seconds</label>
                    <input
                      id="latitudeSeconds"
                      type="number"
                      name="latitudeSeconds"
                      value={dms.latitudeSeconds}
                      onChange={handleDmsChange}
                      placeholder="Seconds"
                      className="p-2 border rounded"
                    />
                    <label htmlFor="latitudeDirection">
                      Latitude Direction
                    </label>
                    <select
                      id="latitudeDirection"
                      name="latitudeDirection"
                      value={dms.latitudeDirection}
                      onChange={handleDmsChange}
                      className="p-2 border rounded"
                    >
                      <option value="">Select Direction</option>
                      <option value="N">N</option>
                      <option value="S">S</option>
                    </select>
                    <label htmlFor="longitudeDegrees">Longitude Degrees</label>
                    <input
                      id="longitudeDegrees"
                      type="number"
                      name="longitudeDegrees"
                      value={dms.longitudeDegrees}
                      onChange={handleDmsChange}
                      placeholder="Degrees"
                      className="p-2 border rounded"
                    />
                    <label htmlFor="longitudeMinutes">Longitude Minutes</label>
                    <input
                      id="longitudeMinutes"
                      type="number"
                      name="longitudeMinutes"
                      value={dms.longitudeMinutes}
                      onChange={handleDmsChange}
                      placeholder="Minutes"
                      className="p-2 border rounded"
                    />
                    <label htmlFor="longitudeSeconds">Longitude Seconds</label>
                    <input
                      id="longitudeSeconds"
                      type="number"
                      name="longitudeSeconds"
                      value={dms.longitudeSeconds}
                      onChange={handleDmsChange}
                      placeholder="Seconds"
                      className="p-2 border rounded"
                    />
                    <label htmlFor="longitudeDirection">
                      Longitude Direction
                    </label>
                    <select
                      id="longitudeDirection"
                      name="longitudeDirection"
                      value={dms.longitudeDirection}
                      onChange={handleDmsChange}
                      className="p-2 border rounded"
                    >
                      <option value="">Select Direction</option>
                      <option value="E">E</option>
                      <option value="W">W</option>
                    </select>
                    <button
                      onClick={handleConvertDmsToDd}
                      className="bg-green-500 text-white p-2 rounded"
                    >
                      Convert to DD
                    </button>
                    {dd && (
                      <div>
                        <div>Latitude: {dd.latitude}</div>
                        <div>Longitude: {dd.longitude}</div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {activeTab === "DD to DMS" && (
                <div className="mt-4">
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="latitude">Latitude</label>
                    <input
                      id="latitude"
                      type="number"
                      name="latitude"
                      value={latitude}
                      onChange={handleDdChange}
                      placeholder="Latitude"
                      className="p-2 border rounded"
                    />
                    <label htmlFor="longitude">Longitude</label>
                    <input
                      id="longitude"
                      type="number"
                      name="longitude"
                      value={longitude}
                      onChange={handleDdChange}
                      placeholder="Longitude"
                      className="p-2 border rounded"
                    />
                    <button
                      onClick={handleConvertDdToDms}
                      className="bg-green-500 text-white p-2 rounded"
                    >
                      Convert to DMS
                    </button>
                    {dms.latitude && <div>Latitude: {dms.latitude}</div>}
                    {dms.longitude && <div>Longitude: {dms.longitude}</div>}
                  </div>
                </div>
              )}

              <button
                onClick={handleAddToMap}
                className="mt-4 bg-green-500 text-white p-2 rounded"
              >
                Add to Maps
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoordinateConverter;
