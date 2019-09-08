import * as React from 'react';
import connection from '../connection';
import database from '../database';
import App from '../../App';

import sm from '../state-manager';

export default class SignInComponent extends React.Component<any, {}> {
    inputUserName: any;
    inputPassword: any;

    constructor(props: any) {
        super(props);
        this.inputUserName = '';
        this.inputPassword = '';
    }

    onLogin() {
        connection.authenticate(this.inputUserName, this.inputPassword).then((result: any) => {

            if (!result) {
                return alert('authentication failed.');
            }
            var user = JSON.parse(result);
            database.setCurrentUser(user);

            const name = user.firstName + ' ' + user.lastName;
            this.props.updateUserDisplayName(name);
            // goto('todolistComponent');

            sm.pub('user-changed', user.firstName + ' ' + user.lastName);
        }, function (err: any) {
            alert(err);
        });

        // const name = this.inputUserName.value;
        // sm.pub('user-changed', 'dummy' + ' ' + 'user');

        // const name = this.inputUserName.value;
        // this.props.updateUserDisplayName(name);

        // goto('todolistComponent');
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
                    <button type="button" onClick={() => this.onLogin()} className="btn btn-default">login</button>
                    <button onClick={this.onCancel} className="btn btn-default">cancel</button>
                </form>
            </div>
        )

    };
}


