import React from "react";

/**
 * AboutPage component for displaying information about the Coordinate Converter.
 * @returns {JSX.Element} The rendered component
 */

const AboutPage = () => {
  return (
    <section className="">
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Coordinate Converter
            </h2>
            <p className="text-lg text-gray-600 leading-8 mb-6">
              The Coordinate Converter is a powerful tool designed to help users
              seamlessly convert and visualize geographic coordinates. Whether
              you are a geographer, surveyor, or anyone working with maps and
              spatial data, our converter provides an easy-to-use interface to
              accurately convert coordinates and display them on a map.
            </p>
          </div>
          <div className="mt-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              How to Use
            </h2>
            <p className="text-lg text-gray-600 leading-8 mb-6">
              To use the Coordinate Converter, simply navigate to the Home page,
              enter your coordinates in the appropriate format, and click
              &quot;Convert&quot;. You can then add the converted coordinates to
              the map to visualize their location.
            </p>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Description of the Case
            </h2>
            <p className="text-lg text-gray-600 leading-8 mb-6">
              In this case study, you will develop a conversion function to
              transform geographic coordinate formats from DMS (Degree, Minutes,
              Seconds) to DD (Decimal Degrees). This is a common case in
              developing applications involving mapping or geospatial data such
              as OpenLayers (
              <a
                href="https://openlayers.org/en/latest/examples/"
                className="text-blue-500 underline"
              >
                OpenLayers Examples
              </a>
              ).
            </p>
            <p className="text-lg text-gray-600 leading-8 mb-6">
              <strong>DMS (Degree, Minutes, Seconds):</strong> DMS is the
              traditional format for expressing geographic coordinates. Here,
              degrees represent whole degrees, minutes represent fractional
              degrees in minutes (with 1 degree = 60 minutes), and seconds
              further detail the minutes (with 1 minute = 60 seconds). Example:
              49°30&apos;10&quot; N 123°30&apos;20&quot; W.
            </p>
            <p className="text-lg text-gray-600 leading-8 mb-6">
              <strong>DD (Decimal Degrees):</strong> DD is a format that
              simplifies the expression of coordinates by converting all values
              into decimal degrees. This format is more commonly used in modern
              digital systems and applications. Example: 49.50278° N, 123.50556°
              W.
            </p>
            <p className="text-lg text-gray-600 leading-8 mb-6">
              For a practical example, you can refer to this{" "}
              <a
                href="https://www.wkcgroup.com/tools-room/dd-to-dms-converter/"
                className="text-blue-500 underline"
              >
                DD to DMS Converter
              </a>
              .
            </p>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Features
            </h2>
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                    <img
                      src="https://www.svgrepo.com/show/525251/bolt-circle.svg"
                      alt="Create and Convert Coordinate from Form"
                    />
                  </div>
                  <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                    Create and Convert Coordinate from Form
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Easily convert geographic coordinates from DMS to DD and vice
                  versa using our intuitive form interface.
                </dd>
              </div>
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                    <img
                      src="https://www.svgrepo.com/show/525251/bolt-circle.svg"
                      alt="Create Coordinate from Map"
                    />
                  </div>
                  <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                    Create Coordinate from Map
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Click on the map to generate coordinates and visualize their
                  location instantly.
                </dd>
              </div>
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                    <img
                      src="https://www.svgrepo.com/show/525251/bolt-circle.svg"
                      alt="Update Existing Coordinate"
                    />
                  </div>
                  <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                    Update Existing Coordinate
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Easily update existing coordinates by clicking on the point on
                  the map and editing the values in the form.
                </dd>
              </div>
            </dl>
          </div>
          <div className="lg:text-center mt-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Contact Us
            </h2>
            <p className="text-lg text-gray-600 leading-8 mb-6">
              If you have any questions or feedback, feel free to reach out to
              us at{" "}
              <a
                href="mailto:m.ferdyfauzan@gmail.com"
                className="text-blue-500 underline"
              >
                m.ferdyfauzan@gmail.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
