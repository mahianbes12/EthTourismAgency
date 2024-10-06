import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
   </React.StrictMode>
);


reportWebVitals();


// // src/index.js
// import React from 'react';
// import { createRoot } from 'react-dom/client'; // Ensure you're using createRoot for React 18
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const container = document.getElementById('root');

// if (container) {
//   const root = createRoot(container);
//   root.render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   );
// } else {
//   console.error("Failed to find the root element.");
// }

// reportWebVitals();
