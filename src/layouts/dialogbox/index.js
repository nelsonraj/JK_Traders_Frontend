import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import Demo from './Demo';

const rootElement = document.querySelector("#root");

if (rootElement) {

  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <StyledEngineProvider injectFirst>
        <Demo />
      </StyledEngineProvider>
    </React.StrictMode>
  );} else {
  console.error("Root element not found!");
}
