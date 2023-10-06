import React from 'react';
// import ReactDOM from 'react-dom/client';
import './course.css';
import App from './App';
import logo from "./logo.svg";
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

function Course() {
  return (
    <div className="Course">
      <header className="Course-header">
      <img src={logo} className="Course-logo" alt="logo" />
      <img src={logo} className="Course-logo" alt="logo" />
      <img src={logo} className="Course-logo" alt="logo" />
        {/* <p>

        </p> */}
        <a>
          Code For good
        </a>
      </header>
    </div>
  );
}

export default Course;
