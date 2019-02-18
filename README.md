# Speedrun Records
> Speedrun records list and detailed information.

Single page application with two pages: records list and record detail. The project was bootstrapped using `npm init`, and tested for the latest version of Chrome.

## Getting started

```
git clone https://github.com/playola/speedrun-records.git

cd speedrun-records

npm install

npm run dev
```
See http://localhost:3000/.

## Architecture

### Core libraries

* React
* Webpack
* Prop Types
* Redux
* Jest

### Folder structure

Client have all the logic for the client's side:
- Assets: static files like images or fonts.
- Components: reusable stateless UI components.
- Containers: pages wrappers for the routing.
- Routes: defines the routing for the containers.
- Services: API calls using 'axios'.
- Store: application state where we combine reducers and fork sagas.
- Style: styled components provider theme, breakpoints, and global styles.
- Utils: reusable utilities and helpers.

Server contains the Express server with the Server Side Rendering (SSR) logic.

## Improvements

* Server Side Rendering is not getting the initial state properly, because of the integration with Redux Saga middleware.
* The tests are not fully completed.
* If the application scales, it would be great to apply a Theme Provider, and reusable media queries.

## References

* https://reactjs.org/docs/react-dom-server.html
* https://medium.freecodecamp.org/demystifying-reacts-server-side-render-de335d408fe4
* https://www.styled-components.com/docs/advanced#server-side-rendering
* https://medium.com/styled-components/the-simple-guide-to-server-side-rendering-react-with-styled-components-d31c6b2b8fbf
* https://github.com/speedruncomorg/api/blob/master/version1/games.md
* https://stackoverflow.com/questions/29718481/unexpected-token-error-in-react-router-component
* https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
* https://stackoverflow.com/questions/52713185/typeerror-router2-default-computerootmatch-is-not-a-function-on-react-router
