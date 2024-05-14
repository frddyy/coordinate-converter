import React, { useState } from "react";

/**
 * CoordinateConverter component to handle the conversion between DMS and DD.
 * @component
 */
const CoordinateConverter = ({ onConvert }) => {
  const [dms, setDms] = useState({
    degrees: "",
    minutes: "",
    seconds: "",
    direction: "",
  });
  const [dd, setDd] = useState("");

  const convertDmsToDd = (dms) => {
    let dd =
      parseFloat(dms.degrees) +
      parseFloat(dms.minutes) / 60 +
      parseFloat(dms.seconds) / 3600;
    if (dms.direction === "S" || dms.direction === "W") {
      dd = dd * -1;
    }
    return dd.toFixed(5);
  };

  const handleDmsChange = (e) => {
    const { name, value } = e.target;
    setDms({ ...dms, [name]: value });
  };

  const handleConvert = () => {
    const result = convertDmsToDd(dms);
    setDd(result);
    onConvert && onConvert(result);
  };

  return (
    <div>
      <h2>Coordinate Converter</h2>
      <div>
        <input
          type="number"
          name="degrees"
          value={dms.degrees}
          onChange={handleDmsChange}
          placeholder="Degrees"
        />
        <input
          type="number"
          name="minutes"
          value={dms.minutes}
          onChange={handleDmsChange}
          placeholder="Minutes"
        />
        <input
          type="number"
          name="seconds"
          value={dms.seconds}
          onChange={handleDmsChange}
          placeholder="Seconds"
        />
        <select
          name="direction"
          value={dms.direction}
          onChange={handleDmsChange}
        >
          <option value="">Select Direction</option>
          <option value="N">N</option>
          <option value="S">S</option>
          <option value="E">E</option>
          <option value="W">W</option>
        </select>
        <button onClick={handleConvert}>Convert to DD</button>
      </div>
      {dd && <div>Decimal Degrees: {dd}</div>}
    </div>
  );
};

export default CoordinateConverter;
