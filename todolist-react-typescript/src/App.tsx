import React from "react";
import "./index.css";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";

import TodolistComponent from "./client/components/todolist-component";
import SignInComponent from "./client/components/signin-component";
import SignUpComponent from "./client/components/signup-component";
import HeaderComponent from "./client/components/header-component";

export const userContext = React.createContext("");

interface State {
  userDisplayName: string;
}

class App extends React.Component<any, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      userDisplayName: "anonymouse user"
    };
  }

  updateUserDisplayName(displayName: any) {
    this.setState({ userDisplayName: displayName });
  }

  render() {
    return (
      <Router>
        <userContext.Provider value={this.state.userDisplayName}>
          <HeaderComponent userDisplayName={this.props.userDisplayName} />
        </userContext.Provider>

        <Route exact path="/todolist" component={TodolistComponent} />
        <Route path="/signin" render={props => (<SignInComponent updateUserDisplayName={this.updateUserDisplayName.bind(this)} />)} />
        <Route path="/signup" render={props => <SignUpComponent updateUserDisplayName={this.updateUserDisplayName.bind(this)} />} />
      </Router>
    );
  }
}
SignInComponent.contextType = userContext;
export default App;










































/*
import React from "react";
import "./index.css";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";

import TodolistComponent from "./client/components/todolist-component";
import SignInComponent from "./client/components/signin-component";
import SignUpComponent from "./client/components/signup-component";
import HeaderComponent from "./client/components/header-component";

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      userDisplayName: "anonymouse user"
    };
  }

  render() {
    return (
      <Router>
        <HeaderComponent
          userDisplayName={this.state.userDisplayName}
        ></HeaderComponent>

        <Route exact path="/todolist" component={TodolistComponent} />
        <Route
          path="/signin"
          render={props => (
            <SignInComponent
              onUpdateUserDisplayName={(userDisplayName: string) =>
                this.setState({ userDisplayName })
              }
            />
          )}
        />
        <Route
          path="/signup"
          render={props => (
            <SignUpComponent
              onUpdateUserDisplayName={(userDisplayName: string) =>
                this.setState({ userDisplayName })
              }
            />
          )}
        />
      </Router>
    );
  }
}

export default App;

*/

/*
import React from 'react';
import './index.css';
import './App.css';

import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

import TodolistComponent from './client/components/todolist-component';
import SignInComponent from './client/components/signin-component';
import SignUpComponent from './client/components/signup-component';
import HeaderComponent from './client/components/header-component';

const App: React.FC = () => {

  var _stateUpdater: any;

  function registerUpdater(fn: any) {
    _stateUpdater = fn;
  }

  function updateState(name: any) {
    _stateUpdater(name);
  }

  return (
    <Router>
      <HeaderComponent registerStateUpdater={registerUpdater} />

      <Route exact path="/todolist" component={TodolistComponent} />
      <Route path="/signin" render={(props) => (<SignInComponent updateUserDisplayName={updateState} />)} />
      <Route path="/signup" render={(props) => (<SignUpComponent updateUserDisplayName={updateState} />)} />
    </Router>
  );
}

export default App;

*/

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
