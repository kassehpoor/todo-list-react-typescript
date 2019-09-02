import * as React from 'react';

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

    onLogin() {

        // <Authenticate username={this.inputUserName.value} password={this.inputPassword.value} />
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
                <form ref="form" onSubmit={this.onLogin} className="form-inline">
                    <input autoComplete="off" type="text" ref={(n) => this.inputUserName = n} className="form-control" placeholder="user name..." />
                    <input autoComplete="off" type="text" ref={(p) => this.inputPassword = p} className="form-control" placeholder="password..." />
                    <br />
                    <button type="submit" onClick={this.onLogin} className="btn btn-default">login</button>
                    <button onClick={this.onCancel} className="btn btn-default">cancel</button>
                </form>
            </div>
        )

    };
}
