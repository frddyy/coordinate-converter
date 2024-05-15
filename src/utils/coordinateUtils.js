/**
 * Converts DMS (Degrees, Minutes, Seconds) to DD (Decimal Degrees).
 * @param {number} degrees - Degrees
 * @param {number} minutes - Minutes
 * @param {number} seconds - Seconds
 * @param {string} direction - Direction (N, S, E, W)
 * @returns {number} - Decimal Degrees
 */
export const dmsToDd = (degrees, minutes, seconds, direction) => {
  let dd = degrees + minutes / 60 + seconds / 3600;
  if (direction === "S" || direction === "W") {
    dd = dd * -1;
  }
  return dd;
};

/**
 * Converts DD (Decimal Degrees) to DMS (Degrees, Minutes, Seconds).
 * @param {number} dd - Decimal Degrees
 * @returns {Object} - DMS representation
 */
export const ddToDms = (dd) => {
  const absolute = Math.abs(dd);
  const degrees = Math.floor(absolute);
  const minutesNotTruncated = (absolute - degrees) * 60;
  const minutes = Math.floor(minutesNotTruncated);
  const seconds = (minutesNotTruncated - minutes) * 60;

  return {
    degrees: degrees,
    minutes: minutes,
    seconds: seconds,
    direction:
      dd >= 0 ? (dd === degrees ? "N" : "E") : dd === degrees ? "S" : "W",
  };
};

/**
 * Parses a DMS string to Decimal Degrees.
 * @param {string} dms - DMS string
 * @returns {number} - Decimal Degrees
 */
export const parseDMS = (dms) => {
  const parts = dms.match(/(\d+)[^\d]+(\d+)[^\d]+(\d+\.?\d*)[^\d]*(\w)/);
  const degrees = parseFloat(parts[1]);
  const minutes = parseFloat(parts[2]);
  const seconds = parseFloat(parts[3]);
  const direction = parts[4];

  let dd = degrees + minutes / 60 + seconds / 3600;
  if (direction === "S" || direction === "W") {
    dd = dd * -1;
  }
  return dd.toFixed(6);
};

/**
 * Converts DD (Decimal Degrees) to DMS string.
 * @param {Object} dd - Decimal Degrees object
 * @returns {Object} - DMS representation
 */
export const convertDdToDms = (dd) => {
  const toDms = (dd, isLat) => {
    const absolute = Math.abs(dd);
    const degrees = Math.floor(absolute);
    const minutesNotTruncated = (absolute - degrees) * 60;
    const minutes = Math.floor(minutesNotTruncated);
    const seconds = ((minutesNotTruncated - minutes) * 60).toFixed(2);
    const direction = dd >= 0 ? (isLat ? "N" : "E") : isLat ? "S" : "W";
    return `${degrees}° ${minutes}' ${seconds}" ${direction}`;
  };

  return {
    latitude: toDms(parseFloat(dd.latitude), true),
    longitude: toDms(parseFloat(dd.longitude), false),
  };
};
