import * as React from 'react';
import connection from '../connection';
import database from '../database';
import App from '../../App';
// import todolistComponent from '../../client/components/todolist-component';

import sm from '../state-manager';

import { withRouter, Redirect } from 'react-router-dom'

const HeaderContext = React.createContext({
    userDisplayName: '',
    updateUserDisplayName: () => { },
});

type State = {
    goTo_TodolistComp: boolean,
    userDisplayName: any,
    updateUserDisplayName: () => {}
};

export default class SignInComponent extends React.Component<any, State> {
    inputUserName: any;
    inputPassword: any;

    updateUserDisplayName = (newUserDisplayName: any) => {
        this.setState({ userDisplayName: newUserDisplayName });
    };

    // readonly state: State = {
    //     goTo_TodolistComp: false,
    // }

    State = {
        goTo_TodolistComp: false,
        userDisplayName: 'user',
        updateUserDisplayName: this.updateUserDisplayName,
    };

    constructor(props: any) {
        super(props);
        this.inputUserName = '';
        this.inputPassword = '';

    }

    onLogin() {
        var that = this;
        connection.authenticate(this.inputUserName.value, this.inputPassword.value).then(function (result: any) {

            if (!result) {
                return alert('authentication failed.');
            }
            var user = JSON.parse(result);
            database.setCurrentUser(user);

            const name = user.firstName + ' ' + user.lastName;
            that.props.updateUserDisplayName(name);
            // sm.pub('user-changed', user.firstName + ' ' + user.lastName);

            // goto('todolistComponent');
            // that.props.history.push('/todolist');
            that.setState({ goTo_TodolistComp: true });

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
                <HeaderContext.Provider value={this.state}>
                    {this.props.children}
                </HeaderContext.Provider>
            </div>
        )

    };
}

export const HeaderConsumer = HeaderContext.Consumer;
