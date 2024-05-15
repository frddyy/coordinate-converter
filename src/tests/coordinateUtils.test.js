import { ddToDms, parseDMS } from "../utils/coordinateUtils";

test("ddToDms converts correctly", () => {
  const result = ddToDms(40.4461);
  expect(result.degrees).toBe(40);
  expect(result.minutes).toBe(26);
  expect(result.seconds).toBeCloseTo(45.96, 2);
  expect(result.direction).toBe("N");
});

test("parseDMS parses correctly", () => {
  expect(parseDMS("40° 26' 46\" N")).toBeCloseTo(40.4461, 4);
  expect(parseDMS("79° 58' 36\" W")).toBeCloseTo(-79.9767, 4);
});