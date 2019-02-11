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
1. Assets
2. Containers
3. Components
4. Store
5. Utils

Server contains the Express server with the Server Side Rendering (SSR) logic.

## References
* https://reactjs.org/docs/react-dom-server.html
* https://medium.freecodecamp.org/demystifying-reacts-server-side-render-de335d408fe4
* https://www.styled-components.com/docs/advanced#server-side-rendering
* https://medium.com/styled-components/the-simple-guide-to-server-side-rendering-react-with-styled-components-d31c6b2b8fbf
