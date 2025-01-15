# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Getting Started

To get started with this project, clone the repository and install the dependencies:

```bash
git clone https://github.com/sonqh/fullstack-react-frontend.git
cd fullstack-react-frontend
npm install
```

Then, start the development server:

```bash
npm run dev
```

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `dist` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run preview`

Serves the production build from the `dist` folder.

### `npm run lint`

Runs ESLint to analyze the code for potential errors and code style issues.

### `npm run format`

Formats the code using Prettier.

## Dependencies

- `@apollo/client`: ^3.12.6
- `graphql`: ^16.10.0
- `react`: ^18.3.1
- `react-dom`: ^18.3.1

## Dev Dependencies

- `@eslint/js`: ^9.17.0
- `@types/react`: ^18.3.18
- `@types/react-dom`: ^18.3.5
- `@vitejs/plugin-react`: ^4.3.4
- `autoprefixer`: ^10.4.20
- `eslint`: ^9.17.0
- `eslint-plugin-react`: ^7.37.2
- `eslint-plugin-react-hooks`: ^5.0.0
- `eslint-plugin-react-refresh`: ^0.4.16
- `globals`: ^15.14.0
- `postcss`: ^8.5.1
- `prettier`: ^3.4.2
- `tailwindcss`: ^3.4.17
- `vite`: ^6.0.5

## Apollo Client Setup

This project uses Apollo Client for managing GraphQL data. The Apollo Client is set up in `src/main.jsx`:

```jsx
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
);
```

## Learn More

You can learn more in the [Vite documentation](https://vitejs.dev/guide/).

To learn React, check out the [React documentation](https://reactjs.org/).

To learn more about Apollo Client, visit the [Apollo Client documentation](https://www.apollographql.com/docs/react/).
