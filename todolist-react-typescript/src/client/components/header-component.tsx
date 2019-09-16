import * as React from "react";
import { NavLink } from "react-router-dom";
import { userContext } from "../components/signin-component";
import { spawn } from "child_process";

export default class HeaderComponent extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div>
        <userContext.Consumer>
          {({ userDisplayName }) => <span>{userDisplayName}</span>}
        </userContext.Consumer>
        <div>
          <NavLink className="btn-Sign" to="/todolist">
            TodoList
          </NavLink>
          <NavLink className="btn-Sign" to="/signin">
            Signin
          </NavLink>
          <NavLink className="btn-Sign" to="/signup">
            Singup
          </NavLink>
        </div>
      </div>
    );
  }
}

/*
import * as React from "react";
import { NavLink } from "react-router-dom";

export default class HeaderComponent extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div>
        <span>{"current user is : " + this.props.userDisplayName}</span>
        <div>
          <NavLink className="btn-Sign" to="/todolist">
            TodoList
          </NavLink>
          <NavLink className="btn-Sign" to="/signin">
            Signin
          </NavLink>
          <NavLink className="btn-Sign" to="/signup">
            Singup
          </NavLink>
        </div>
      </div>
    );
  }
}

*/
