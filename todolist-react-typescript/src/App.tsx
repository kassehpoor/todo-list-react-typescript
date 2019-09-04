import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


// import TodoPageComponent from './components/todoPage-component';
// import HeaderComponent from './components/header-component';
import TodolistComponent from './client/components/todolist-component';
import SignInComponent from './client/components/signin-component';
import SignUpComponent from './client/components/signup-component';


// import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Link to="/todolist">TodoList</Link>
      <Link to="/signin">Signin</Link>
      <Link to="/singup">Singup</Link>

      <Route exact path="/todolist" component={TodolistComponent} />
      <Route path="/signin" component={SignInComponent} />
      <Route path="/signup" component={SignUpComponent} />
    </Router>
  );
}

export default App;




















// const App: React.FC = () => {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }