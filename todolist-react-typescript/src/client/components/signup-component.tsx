import * as React from "react";
import connection from "../connection";
import database from "../database";
import { Redirect } from "react-router";

type Props = {};
type State = {
  goTo_TodolistComp: boolean;
  updateUserDisplayName: () => void;
  userDisplayName: string;
};
export default class SignUpComponent extends React.Component<any, State> {
  inputFirstName: any;
  inputLastName: any;
  inputUserName: any;
  inputPassword: any;

  
  constructor(props: any) {
    super(props);
    this.inputFirstName = "";
    this.inputLastName = "";
    this.inputPassword = "";
    this.inputPassword = "";

    this.state = {
      goTo_TodolistComp: false,
      updateUserDisplayName: this.props.updateUserDisplayName,
      userDisplayName: ""
    };
  }

  onRegister(firstname: any, lastname: any, username: any, password: any) {
    var that = this;
    connection.registerUser(firstname, lastname, username, password).then(
      function(result: any) {
        if (!result) {
          return alert("register failed.");
        }
        var user = JSON.parse(result);
        alert(
          "register done successfuly for  " +
            user.firstName +
            " " +
            user.lastName
        );
        database.setCurrentUser(user);
         //update userDisplayName  
        that.props.updateUserDisplayName(user.firstName+' '+user.lastName);

        // goto('todolistComponent');
        that.setState({ goTo_TodolistComp: true });
      },
      function(err: any) {
        alert(err);
      }
    );
  }

  onCancel() {
    var that = this;
    that.setState({ goTo_TodolistComp: true });
  }

  render() {
    if (this.state.goTo_TodolistComp === true) {
      return <Redirect to="/todolist" />;
    }

    return (
      <div>
        <form ref="form" className="form-inline">
          <input
            autoComplete="off"
            type="text"
            ref={f => (this.inputFirstName = f)}
            className="form-control"
            placeholder="first name..."
          />
          <input
            autoComplete="off"
            type="text"
            ref={l => (this.inputLastName = l)}
            className="form-control"
            placeholder="last name..."
          />
          <input
            autoComplete="off"
            type="text"
            ref={n => (this.inputUserName = n)}
            className="form-control"
            placeholder="user name..."
          />
          <input
            autoComplete="off"
            type="text"
            ref={p => (this.inputPassword = p)}
            className="form-control"
            placeholder="password..."
          />
          <br />
          <button
            type="button"
            onClick={() =>
              this.onRegister(
                this.inputFirstName.value,
                this.inputLastName.value,
                this.inputUserName.value,
                this.inputPassword.value
              )
            }
            className="btn btn-default"
          >
            submit
          </button>
          <button
            onClick={this.onCancel.bind(this)}
            className="btn btn-default"
          >
            cancel
          </button>
        </form>
      </div>
    );
  }
}
































































/*
import * as React from "react";
import connection from "../connection";
import database from "../database";
import { Redirect } from "react-router";

type Props = {};
type State = { goTo_TodolistComp: boolean };

export default class SignUpComponent extends React.Component<any, State> {
  inputFirstName: any;
  inputLastName: any;
  inputUserName: any;
  inputPassword: any;

  readonly state: State = {
    goTo_TodolistComp: false
  };

  constructor(props: any) {
    super(props);
    this.inputFirstName = "";
    this.inputLastName = "";
    this.inputPassword = "";
    this.inputPassword = "";
  }

  onRegister(firstname: any, lastname: any, username: any, password: any) {
    var that = this;
    connection.registerUser(firstname, lastname, username, password).then(
      function(result: any) {
        if (!result) {
          return alert("register failed.");
        }
        var user = JSON.parse(result);
        alert(
          "register done successfuly for  " +
            user.firstName +
            " " +
            user.lastName
        );
        database.setCurrentUser(user);

        that.props.onUpdateUserDisplayName(
          user.firstName + " " + user.lastName
        );

        // that.props.updateUserDisplayName(name);

        // goto('todolistComponent');
        that.setState({ goTo_TodolistComp: true });
      },
      function(err: any) {
        alert(err);
      }
    );
  }

  onCancel() {
    var that = this;
    that.setState({ goTo_TodolistComp: true });
  }

  render() {
    if (this.state.goTo_TodolistComp === true) {
      return <Redirect to="/todolist" />;
    }

    return (
      <div>
        <form ref="form" className="form-inline">
          <input
            autoComplete="off"
            type="text"
            ref={f => (this.inputFirstName = f)}
            className="form-control"
            placeholder="first name..."
          />
          <input
            autoComplete="off"
            type="text"
            ref={l => (this.inputLastName = l)}
            className="form-control"
            placeholder="last name..."
          />
          <input
            autoComplete="off"
            type="text"
            ref={n => (this.inputUserName = n)}
            className="form-control"
            placeholder="user name..."
          />
          <input
            autoComplete="off"
            type="text"
            ref={p => (this.inputPassword = p)}
            className="form-control"
            placeholder="password..."
          />
          <br />
          <button
            type="button"
            onClick={() =>
              this.onRegister(
                this.inputFirstName.value,
                this.inputLastName.value,
                this.inputUserName.value,
                this.inputPassword.value
              )
            }
            className="btn btn-default"
          >
            submit
          </button>
          <button
            onClick={this.onCancel.bind(this)}
            className="btn btn-default"
          >
            cancel
          </button>
        </form>
      </div>
    );
  }
}

*/
