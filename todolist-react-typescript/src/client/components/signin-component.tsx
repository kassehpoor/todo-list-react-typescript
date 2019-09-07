import * as React from 'react';
import connection from '../connection';
import database from '../database';
import App from '../../App';

import sm from '../state-manager';

// type Props = {};

type State = { userDisplayName: string };


export default class SignInComponent extends React.Component<any, State> {
    inputUserName: any;
    inputPassword: any;

    readonly state: State = {
        userDisplayName: ''
    };

    constructor(props: any) {
        super(props);
        this.inputUserName = '';
        this.inputPassword = '';
    }


    onLogin() {
        // connection.authenticate(username, password).then(function (result: any) {
        //     if (!result) {
        //         return alert('authentication failed.');
        //     }
        //     var user = JSON.parse(result);
        //     database.setCurrentUser(user);
        //     // goto('todolistComponent');
        //     //change headercomponent userdisplay name
        //     sm.pub('user-changed', user.firstName + ' ' + user.lastName);
        // }, function (err: any) {
        //     alert(err);
        // });

        // sm.pub('user-changed', 'dummy' + ' ' + 'user');
        const name = this.inputUserName.value;
        this.props.updateUserDisplayName(name);
    }

    onCancel() {
        // goto('todolistComponent');
    }

    render() {
        return (
            <div>
                <form ref="form" className="form-inline">
                    <input autoComplete="off" type="text" ref={(n) => this.inputUserName = n} className="form-control" placeholder="user name..." />
                    <input autoComplete="off" type="text" ref={(p) => this.inputPassword = p} className="form-control" placeholder="password..." />
                    <br />
                    {/* <App value={this.state.userDisplayName} /> */}
                    <button type="button" onClick={this.onLogin.bind(this)} className="btn btn-default">login</button>
                    <button onClick={this.onCancel} className="btn btn-default">cancel</button>
                </form>
            </div>
        )

    };
}


// this.updateUserDisplayName.bind(this, this.inputUserName + '' + this.inputPassword)