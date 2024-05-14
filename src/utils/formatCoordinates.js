/**
 * Converts coordinates from DMS (Degree, Minutes, Seconds) to DD (Decimal Degrees).
 * @param {number} degrees - The degrees part of the coordinate.
 * @param {number} minutes - The minutes part of the coordinate.
 * @param {number} seconds - The seconds part of the coordinate.
 * @param {string} direction - The direction (N, S, E, W).
 * @returns {number} The coordinate in decimal degrees.
 */
export const convertDmsToDd = (degrees, minutes, seconds, direction) => {
  let dd =
    parseFloat(degrees) + parseFloat(minutes) / 60 + parseFloat(seconds) / 3600;
  if (direction === "S" || direction === "W") {
    dd = dd * -1;
  }
  return dd.toFixed(5);
};
