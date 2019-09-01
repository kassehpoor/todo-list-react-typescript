import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


// import TodoPageComponent from './components/todoPage-component';
// import TodolistComponent from './components/todolist-component';
// import HeaderComponent from './components/header-component';
// import SignInComponent from './components/signin-component';
// import SignOutComponent from './components/signout-component';


// import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  return (
    <div>
      {/* <HeaderComponent /> */}
      {/* <header>
        <Link to="/"></Link>
        <Link to="/todolist"></Link>
        <Link to="/signin"></Link>
        <Link to="/singout"></Link>
      </header> */}
      {/* <Router>
        <div>
          <Route exact path="/" component={TodoPageComponent} />
          <Route exact path="/todolist" component={TodolistComponent} />
           <Route path="/signin" component={SignInComponent} />
           <Route path="/signout" component={SignOutComponent} />
        </div>
      </Router> */}
    </div>
  );
}

// function Header() {
//   return (

//   );
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