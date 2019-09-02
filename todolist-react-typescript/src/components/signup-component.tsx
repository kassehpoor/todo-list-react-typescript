import * as React from 'react';

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

    onRegister() {

        // <RegisterUser firstname={this.inputFirstName.value} lastname={this.inputLastName.value} username={this.inputUserName.value} password={this.inputPassword.value} />
        // goto('todolistComponent');
        this.setState({});
    }

    onCancel() {

        // goto('todolistComponent');
        this.setState({});
    }

    render() {
        return (
            <div>
                <form ref="form" onSubmit={this.onRegister} className="form-inline">
                    <input autoComplete="off" type="text" ref={(f) => this.inputFirstName = f} className="form-control" placeholder="first name..." />
                    <input autoComplete="off" type="text" ref={(l) => this.inputLastName = l} className="form-control" placeholder="last name..." />
                    <input autoComplete="off" type="text" ref={(n) => this.inputUserName = n} className="form-control" placeholder="user name..." />
                    <input autoComplete="off" type="text" ref={(p) => this.inputPassword = p} className="form-control" placeholder="password..." />
                    <br />
                    <button type="submit" onClick={this.onRegister} className="btn btn-default">submit</button>
                    <button onClick={this.onCancel} className="btn btn-default">cancel</button>
                </form>
            </div>
        )

    };
}
