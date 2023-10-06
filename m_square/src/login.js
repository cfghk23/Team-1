import React from "react";
// import ReactDOM from 'react-dom/client';
import App from "./App";
import logo from "./logo.svg";
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

function Login() {
  return (
    <div className="Login">
      <header className="Login-header">
        <img src={logo} className="Login-logo" alt="logo" />
        <img src={logo} className="Login-logo" alt="logo" />
        <img src={logo} className="Login-logo" alt="logo" />
        <Button></Button>
        {/* <p>
        </p> */}
        <a>Login Page</a>
      </header>
    </div>
  );
}

export default Login;
