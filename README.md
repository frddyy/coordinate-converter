# Coordinate Converter

Coordinate Converter is a React-based application designed to help users seamlessly convert and visualize geographic coordinates between Degrees, Minutes, Seconds (DMS) and Decimal Degrees (DD) formats. The application includes features for creating, updating, and visualizing coordinates on a map.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Home Page](#home-page)
  - [About Page](#about-page)
- [Running Tests](#running-tests)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- Convert coordinates from DMS to DD format and vice versa.
- Create coordinates directly from the map.
- Update existing coordinates.
- Visualize coordinates on an interactive map.
- User-friendly interface with responsive design.

## Getting Started

To get started with the Coordinate Converter, follow these steps:

### Prerequisites

Ensure you have the following installed on your system:

- Node.js (version 14 or higher)
- npm (version 6 or higher)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/frddyy/coordinate-converter.git
    cd coordinate-converter
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Start the development server:

    ```bash
    npm start
    ```

The application will be available at `http://localhost:3000`.

## Usage

### Home Page

- Enter coordinates in the appropriate format (DMS or DD) and click "Convert" to convert the coordinates.
- Add the converted coordinates to the map to visualize their location.
- Click on the map to generate coordinates and visualize their location instantly.

### About Page

- Learn more about the Coordinate Converter and its features.
- Understand the case study for developing conversion functions for geographic coordinates.

## Running Tests

To run the tests for the application, use the following command:

```bash
npm test
```

This will run all the unit tests for the components and utility functions.

## Folder Structure

The folder structure of the project is as follows:

```
public/
  favicon.ico
  index.html
  logo192.png
  logo512.png
  manifest.json
  robots.txt
src/
  components/
    ConverterModal.jsx
    DDForm.jsx
    DMSForm.jsx
    MarkerManager.jsx
    Navbar.jsx
  pages/
    AboutPage.jsx
    HomePage.jsx
  tests/
    AboutPage.test.jsx
    ConverterModal.test.jsx
    coordinateUtils.test.js
    DDForm.test.jsx
    DMSForm.test.jsx
    HomePage.test.jsx
    MapComponent.test.jsx
    MarkerManager.test.jsx
    Navbar.test.jsx
  utils/
    coordinateUtils.js
  App.js
  index.css
  index.js
  setupTests.js
.eslintrc.json
.gitignore
babel.config.js
jest.config.js
package-lock.json
package.json
README.md
tailwind.config.js
```

### Explanation of Folders and Files

- `public/` - Contains static files for the application.
- `src/` - The main source code directory.
  - `components/` - Contains React components used in the application.
    - `ConverterModal.jsx` - Modal component for converting coordinates.
    - `DDForm.jsx` - Form component for entering and converting DD coordinates.
    - `DMSForm.jsx` - Form component for entering and converting DMS coordinates.
    - `MarkerManager.jsx` - Component for managing map markers.
    - `Navbar.jsx` - Navigation bar component.
  - `pages/` - Contains page components.
    - `AboutPage.jsx` - The about page of the application.
    - `HomePage.jsx` - The home page of the application.
  - `tests/` - Contains test files.
    - `AboutPage.test.jsx` - Tests for `AboutPage.jsx`.
    - `ConverterModal.test.jsx` - Tests for `ConverterModal.jsx`.
    - `coordinateUtils.test.js` - Tests for `coordinateUtils.js`.
    - `DDForm.test.jsx` - Tests for `DDForm.jsx`.
    - `DMSForm.test.jsx` - Tests for `DMSForm.jsx`.
    - `HomePage.test.jsx` - Tests for `HomePage.jsx`.
    - `MarkerManager.test.jsx` - Tests for `MarkerManager.jsx`.
    - `Navbar.test.jsx` - Tests for `Navbar.jsx`.
  - `utils/` - Contains utility functions.
    - `coordinateUtils.js` - Utility functions for coordinate conversion.
  - `App.js` - The main app component.
  - `index.css` - The main stylesheet.
  - `index.js` - The main entry point for the application.
  - `setupTests.js` - Setup for tests.
- `.eslintrc.json` - ESLint configuration file.
- `.gitignore` - Git ignore file.
- `babel.config.js` - Babel config file.
- `jest.config.js` - Jest config file.
- `package-lock.json` - Automatically generated file for npm.
- `package.json` - NPM package configuration file.
- `README.md` - This README file.
- `tailwind.config.js` - Tailwind CSS configuration file.

## Contributing

Contributions are welcome! If you have any suggestions or improvements, feel free to open an issue or submit a pull request.
