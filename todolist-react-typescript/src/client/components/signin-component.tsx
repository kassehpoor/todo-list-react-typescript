import * as React from 'react';
import connection from '../connection';

import App from '../../App';

type Props = {};
type State = {};


export default class SignInComponent extends React.Component {
    inputUserName: any;
    inputPassword: any;

    constructor(props: any) {
        super(props);
        this.state = {};
        this.inputUserName = '';
        this.inputPassword = '';
    }

    onLogin(username: any, password: any) {
        connection.authenticate(username, password).then(function (result: any) {
            if (!result) {
                return alert('authentication failed.');
            }
            var user = JSON.parse(result);
            // App.reInit(user);
            // goto('todolistComponent');
            <App />
        }, function (err: any) {
            alert(err);
        });
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
                    <button type="button" onClick={() => this.onLogin(this.inputUserName, this.inputPassword)} className="btn btn-default">login</button>
                    <button onClick={this.onCancel} className="btn btn-default">cancel</button>
                </form>
            </div>
        )

    };
}
