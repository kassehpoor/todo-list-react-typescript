import * as React from 'react';
import { NavLink } from 'react-router-dom';

import sm from '../state-manager';

type Props = {};
type State = { userDisplayName: string };


export default class HeaderComponent extends React.Component<any, State>{
    readonly state: State = {
        userDisplayName: ''
    };

    constructor(props: any) {
        super(props);
        let that = this;
        // sm.sub('user-changed', function (name: any) {
        //     that.setState({ userDisplayName: name });
        // });

        // props.registerStateUpdater(function (name: any) {
        //     that.setState({ userDisplayName: name });
        // });
    }

    render() {
        return (
            <div>
                <div>{this.state.userDisplayName}</div>
                <div>
                    <NavLink className='btn-Sign' to="/todolist">TodoList</NavLink>
                    <NavLink className='btn-Sign' to="/signin">Signin</NavLink>
                    <NavLink className='btn-Sign' to="/signup">Singup</NavLink>
                </div>
            </div>
        );
    };
}



















//  Wrong
// this.setState({
//   counter: this.state.counter + this.props.increment,
// });

//  Correct
// this.setState((state, props) => ({
//     counter: state.counter + props.increment
//   }));