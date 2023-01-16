import React from 'react';
// import { ReactDOM } from 'react'; // v.17
import { createRoot } from 'react-dom/client'; // v.18
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// v.17
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// v.18
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
