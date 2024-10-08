import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Header }  from "./components/index.js";
import { Footer }  from "./components/index.js";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header/>
      <App />
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);

