import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './App';
import { AppProvider } from './components/context';
// // import reportWebVitals from './reportWebVitals';

 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(
   <React.StrictMode>
    <AppProvider>
     <App />
    </AppProvider>
   </React.StrictMode>
 );

// // reportWebVitals();
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './style.css';
// import App from './App';



// ReactDOM.render(<App />, document.getElementById('root'))