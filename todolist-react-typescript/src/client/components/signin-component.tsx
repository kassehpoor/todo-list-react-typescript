import * as React from 'react';
import connection from '../connection';
import database from '../database';
import { withRouter, Redirect } from 'react-router-dom'
import HeaderComponent from './header-component';
// import sm from '../state-manager';


type State = {
    userDisplayName: string
    goTo_TodolistComp: boolean,
};
// const defaultName: string = 'anonymose user'

export const userContext = React.createContext({
    userDisplayName: 'anonymous user',
});

export default class SignInComponent extends React.Component<any, State> {
    inputUserName: any;
    inputPassword: any;

    constructor(props: any) {
        super(props);
        this.inputUserName = '';
        this.inputPassword = '';

        this.state = {
            userDisplayName: 'anony',
            goTo_TodolistComp: false,
        }
    }

    onLogin() {
        var that = this;
        connection.authenticate(this.inputUserName.value, this.inputPassword.value).then(function (result: any) {

            if (!result) {
                return alert('authentication failed.');
            }
            var user = JSON.parse(result);
            database.setCurrentUser(user);

            const _userName = user.firstName + ' ' + user.lastName;

            that.setState({ userDisplayName: _userName, goTo_TodolistComp: true });

        }, function (err: any) {
            alert(err);
        });

    }

    onCancel() {
        var that = this;
        that.setState({ goTo_TodolistComp: true });
    }

    render() {

        if (this.state.goTo_TodolistComp === true) {
            return <Redirect to='/todolist' />
        }
        // const Button = withRouter(({ history }) => (<button type='button' onClick={() => { history.push('/todolist') }}>login! </button>))
        return (
            <div>
                <form ref="form" className="form-inline">
                    <input autoComplete="off" type="text" ref={(n) => this.inputUserName = n} className="form-control" placeholder="user name..." />
                    <input autoComplete="off" type="password" ref={(p) => this.inputPassword = p} className="form-control" placeholder="password..." />
                    <br />
                    <button type="button" onClick={this.onLogin.bind(this)} className="btn btn-default">login</button>
                    <button onClick={this.onCancel.bind(this)} className="btn btn-default">cancel</button>
                </form>
                <userContext.Provider value={this.state}>

                </userContext.Provider>

            </div>
        )

    };
}

SignInComponent.contextType = userContext;

