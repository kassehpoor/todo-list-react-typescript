import * as React from "react";
import connection from "../connection";
import database from "../database";
import { withRouter, Redirect } from "react-router-dom";
import HeaderComponent from "./header-component";
// import sm from '../state-manager';

type State = {
  goTo_TodolistComp: boolean;
  updateUserDisplayName: () => void;
  userDisplayName: string;
};

export default class SignInComponent extends React.Component<any, State> {
  inputUserName: any;
  inputPassword: any;

  constructor(props: any) {
    super(props);
    this.inputUserName = "";
    this.inputPassword = "";

    this.state = {
      goTo_TodolistComp: false,
      updateUserDisplayName: this.props.updateUserDisplayName,
      userDisplayName: ""
    };
  }

  onLogin() {
    var that = this;
    connection.authenticate(this.inputUserName.value, this.inputPassword.value).then(function (result: any) {
        if (!result) {
          return alert("authentication failed.");
        }
        var user = JSON.parse(result);
        database.setCurrentUser(user);
       
        //update userDisplayName
        that.props.updateUserDisplayName(user.firstName+' '+user.lastName);
        
        // goto('todolistComponent');
        that.setState({ goTo_TodolistComp: true });
      },
        function (err: any) {
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
    // const Button = withRouter(({ history }) => (<button type='button' onClick={() => { history.push('/todolist') }}>login! </button>))
    return (
      <div>
        <form ref="form" className="form-inline">
          <input
            autoComplete="off"
            type="text"
            ref={n => (this.inputUserName = n)}
            className="form-control"
            placeholder="user name..."
          />
          <input
            autoComplete="off"
            type="password"
            ref={p => (this.inputPassword = p)}
            className="form-control"
            placeholder="password..."
          />
          <br />
          <button
            type="button"
            onClick={this.onLogin.bind(this)}
            className="btn btn-default"
          >
            login
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
import { withRouter, Redirect } from "react-router-dom";

interface State {
  goTo_TodolistComp: boolean;
}

export default class SignInComponent extends React.Component<any, State> {
  inputUserName: any;
  inputPassword: any;

  constructor(props: any) {
    super(props);
    this.inputUserName = "";
    this.inputPassword = "";

    this.state = {
      goTo_TodolistComp: false
    };
  }

  onLogin() {
    var that = this;
    connection
      .authenticate(this.inputUserName.value, this.inputPassword.value)
      .then(
        function(result: any) {
          if (!result) {
            return alert("authentication failed.");
          }
          var user = JSON.parse(result);
          database.setCurrentUser(user);

          that.props.onUpdateUserDisplayName(
            user.firstName + " " + user.lastName
          );

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
      return (
        <div>
          <Redirect to="/todolist" />
        </div>
      );
    }
    return (
      <div>
        <form ref="form" className="form-inline">
          <input
            autoComplete="off"
            type="text"
            ref={n => (this.inputUserName = n)}
            className="form-control"
            placeholder="user name..."
          />
          <input
            autoComplete="off"
            type="password"
            ref={p => (this.inputPassword = p)}
            className="form-control"
            placeholder="password..."
          />
          <br />
          <button
            type="button"
            onClick={this.onLogin.bind(this)}
            className="btn btn-default"
          >
            login
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
