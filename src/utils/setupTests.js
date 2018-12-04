// react-testing-library renders your components to document.body,
// this will ensure they're removed after each test.
import 'react-testing-library/cleanup-after-each';
// this adds jest-dom's custom assertions
import 'jest-dom/extend-expect';

// "jest": {
//   "moduleFileExtensions": [
//     "ts",
//     "tsx",
//     "js",
//     "json"
//   ],
//     "moduleNameMapper": {
//     "\\.(css|less|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",
//       "\\.(gif|ttf|eot|svg)$": "<rootDir>/__mocks__/fileMock.js"
//   },
//   "transform": {
//     "^.+\\.(ts|js)x?$": "ts-jest"
//   },
//   "setupTestFrameworkScriptFile": "<rootDir>/src/utils/setupTests.js",
//     "collectCoverageFrom": [
//       "src/**/*.{js,jsx,ts,tsx}",
//       "!<rootDir>/node_modules/"
//     ],
//       "coverageThreshold": {
//     "global": {
//       "branches": 90,
//         "functions": 90,
//           "lines": 90,
//             "statements": 90
//     }
//   },
//   "testMatch": [
//     "<rootDir>/src/**/*.spec.(ts|js|tsx)"
//   ],
//     "coverageReporters": [
//       "text"
//     ],
//       "testEnvironment": "jsdom"
// }
