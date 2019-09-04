import * as React from 'react';
import connection from '../connection';

type Props = {};
type State = {};


export default class SignUpComponent extends React.Component {
    inputFirstName: any;
    inputLastName: any;
    inputUserName: any;
    inputPassword: any;

    constructor(props: any) {
        super(props);
        this.state = {};
        this.inputFirstName = '';
        this.inputLastName = '';
        this.inputPassword = '';
        this.inputPassword = '';
    }

    onRegister(firstname: any, lastname: any, username: any, password: any) {
        // connection.registerUser(firstname, lastname, username, password).then(function (result: any) {
        //     if (!result) {
        //         return alert('register failed.');
        //     }
        //     var user = JSON.parse(result);
        //     alert('register done successfuly for  ' + user.firstName + ' ' + user.lastName);
        //     // App.reInit(user);
        //     // Router.goto('todolist');
        // }, function (err: any) {
        //     alert(err);
        // });
    }

    onCancel() {

        // goto('todolistComponent');
    }

    render() {
        return (
            <div>
                <form ref="form" className="form-inline">
                    <input autoComplete="off" type="text" ref={(f) => this.inputFirstName = f} className="form-control" placeholder="first name..." />
                    <input autoComplete="off" type="text" ref={(l) => this.inputLastName = l} className="form-control" placeholder="last name..." />
                    <input autoComplete="off" type="text" ref={(n) => this.inputUserName = n} className="form-control" placeholder="user name..." />
                    <input autoComplete="off" type="text" ref={(p) => this.inputPassword = p} className="form-control" placeholder="password..." />
                    <br />
                    <button type="button" onClick={() => this.onRegister(this.inputFirstName, this.inputLastName, this.inputUserName, this.inputPassword)} className="btn btn-default">submit</button>
                    <button onClick={this.onCancel} className="btn btn-default">cancel</button>
                </form>
            </div>
        )

    };
}
