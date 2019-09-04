import * as React from 'react';
import { NavLink } from 'react-router-dom';

type Props = {};
type State = { userDisplayName: string };


export default class HeaderComponent extends React.Component<Props, State>{
    readonly state: State = {
        userDisplayName: ''
    };

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