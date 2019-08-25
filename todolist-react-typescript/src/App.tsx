import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TodoPageComponent from './components/todopage-component';
import HeaderComponent from './components/header-component';


import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  return (
    <div>
      <HeaderComponent />
      <Router>
        <div>
          <Route exact path="/" component={TodoPageComponent} />
        </div>
      </Router>
    </div>
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