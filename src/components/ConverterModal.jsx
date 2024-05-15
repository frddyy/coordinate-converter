import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DMSForm from "./DMSForm";
import DDForm from "./DDForm";

/**
 * ConverterModal component for displaying coordinate conversion forms in a modal.
 * @param {Object} props - Component properties
 * @param {Function} props.onAddToMap - Callback to add coordinates to the map
 * @param {Object} props.mapCoordinates - Coordinates from the map
 * @returns {JSX.Element} The rendered component
 */

const ConverterModal = ({ onAddToMap, mapCoordinates }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("DMS to DD");
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (mapCoordinates) {
      setResult(mapCoordinates);
      setIsOpen(true);
    }
  }, [mapCoordinates]);

  const handleClose = () => setIsOpen(false);

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      handleClose();
    }
  };

  const handleOutsideClick = (e) => {
    if (e.target.id === "crud-modal") {
      handleClose();
    }
  };

  const handleConvertDmsToDd = (dms) => {
    setResult(dms);
  };

  const handleConvertDdToDms = (dd) => {
    setResult(dd);
  };

  const handleAddToMap = () => {
    if (result) {
      onAddToMap(result);
    }
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setResult(null); // Reset result when tab changes
  };

  return (
    <div>
      <div className="absolute top-4 right-4 z-50">
        <button
          className="bg-gray-800 text-white rounded-full w-10 h-10 flex items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div
          id="crud-modal"
          tabIndex="-1"
          aria-hidden={!isOpen}
          className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-gray-900 bg-opacity-50"
          role="button"
          aria-label="Close modal"
          onClick={handleOutsideClick}
          onKeyDown={handleKeyDown}
        >
          <div className="relative p-4 w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                  <ul className="flex flex-wrap -mb-px">
                    <li className="me-2">
                      <Link
                        className={`inline-block p-4 text-lg font-bold rounded-t-lg ${
                          activeTab === "DMS to DD"
                            ? "text-blue-600 border-b-2 border-blue-600"
                            : "border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                        }`}
                        onClick={() => handleTabChange("DMS to DD")}
                      >
                        DMS to DD
                      </Link>
                    </li>
                    <li className="me-2">
                      <Link
                        className={`inline-block p-4 text-lg font-bold rounded-t-lg ${
                          activeTab === "DD to DMS"
                            ? "text-blue-600 border-b-2 border-blue-600"
                            : "border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                        }`}
                        onClick={() => handleTabChange("DD to DMS")}
                      >
                        DD to DMS
                      </Link>
                    </li>
                  </ul>
                </div>

                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={handleClose}
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              {activeTab === "DMS to DD" ? (
                <>
                  <DMSForm onConvert={handleConvertDmsToDd} />
                  {result && result.latitude && result.longitude && (
                    <div className="px-8 md:px-10">
                      <h5 className="block mb-2 text-md font-semibold text-gray-900 dark:text-white">
                        Latitude
                      </h5>
                      <div className="mb-4 relative">
                        <input
                          type="text"
                          value={result.latitude + "°"}
                          id="small-input"
                          className="bg-gray-50 border w-full border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          disabled
                          readOnly
                        />
                      </div>
                      <h5 className="block mb-2 text-md font-semibold text-gray-900 dark:text-white">
                        Longitude
                      </h5>
                      <div className="mb-4 relative">
                        <input
                          type="text"
                          value={result.longitude + "°"}
                          id="small-input"
                          className="bg-gray-50 border w-full border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          disabled
                          readOnly
                        />
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <DDForm onConvert={handleConvertDdToDms} />
              )}
              <div className="flex justify-center">
                <button
                  type="button"
                  className="text-white inline-flex items-center justify-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-4"
                  onClick={handleAddToMap}
                >
                  Add to Maps
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConverterModal;
