import React from 'react';
import './index.css';

import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

import TodolistComponent from './client/components/todolist-component';
import SignInComponent from './client/components/signin-component';
import SignUpComponent from './client/components/signup-component';

// import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      {/* <HeaderComponent /> */}
      <NavLink className='btn-Sign' to="/todolist">TodoList</NavLink>
      <NavLink className='btn-Sign' to="/signin">Signin</NavLink>
      <NavLink className='btn-Sign' to="/signup">Singup</NavLink>

      <Route exact path="/todolist" component={TodolistComponent} />
      <Route path="/signin" component={SignInComponent} />
      <Route path="/signup" component={SignUpComponent} />
    </Router>
  );
}

// function HeaderComponent() {
//   return (
//     <div>
//       {/* <span className="spnUserDisplayName"></span> */}
//       <NavLink className='btn-Sign' to="/todolist">TodoList</NavLink>
//       <NavLink className='btn-Sign' to="/signin">Signin</NavLink>
//       <NavLink className='btn-Sign' to="/signup">Singup</NavLink>
//     </div>

//   )
// }

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