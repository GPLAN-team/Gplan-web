# Welcome to GPLAN Web

## Getting Started

Run the following commands to start the web in dev mode

### `npm i`
### `npm start`

## Code Structure

- __Gplan\-web__
   - [README.md](README.md)
   - [node\_modules](node_modules)
   - [package\-lock.json](package-lock.json)
   - [package.json](package.json)
   - __public__
   - __src__
     - [App.css](src/App.css)
     - [App.test.tsx](src/App.test.tsx)
     - [App.tsx](src/App.tsx)
     - __api__
     - __app__
     - [axiosInstance.tsx](src/axiosInstance.tsx)
     - __components__
     - [config.ts](src/config.ts)
     - __features__
     - [history.ts](src/history.ts)
     - [index.css](src/index.css)
     - [index.tsx](src/index.tsx)
     - [logo.svg](src/logo.svg)
     - [output.json](src/output.json)
     - __public__
     - [react\-app\-env.d.ts](src/react-app-env.d.ts)
     - [react\-graph\-vis.d.ts](src/react-graph-vis.d.ts)
     - __reducers__
     - [reportWebVitals.ts](src/reportWebVitals.ts)
     - [setupTests.ts](src/setupTests.ts)
   - [tree.md](tree.md)
   - [tsconfig.json](tsconfig.json)
   - [yarn.lock](yarn.lock)

## Module meanings

- `api` module keeps all the incoming and outgoing REST api calls
- `app` module keeps all the init contents required to start the app
- `components` module keeps all the common components like button to be used universally in the app
- `features` module keeps all the pages and non-ui features
    - `example-page` 
        - `components` each page will have its own sub section and reusable components
        - `reducers` will store the reducers related to the feature
- `reducers` module will store all the common reducers for the app if any
