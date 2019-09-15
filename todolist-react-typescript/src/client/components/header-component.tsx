import * as React from 'react';
import { NavLink } from 'react-router-dom';
import database from '../database';
import sm from '../state-manager';

type Props = {};
// type State = { userDisplayName: string };
const HeaderContext = React.createContext({
    userDisplayName: '',
    updateUserDisplayName: () => { },
});

type State = {
    goTo_TodolistComp: boolean,
    userDisplayName: any,
    updateUserDisplayName: () => {}
};

export default class HeaderComponent extends React.Component<any, State>{

    updateUserDisplayName = (newUserDisplayName: any) => {
        this.setState({ userDisplayName: newUserDisplayName });
    };

    State = {
        goTo_TodolistComp: false,
        userDisplayName: '',
        updateUserDisplayName: this.updateUserDisplayName,
    };

    // readonly state: State = {
    //     userDisplayName: ''
    // };

    constructor(props: any) {
        super(props);
        let that = this;

        const user = database.getCurrentUser() || 0;
        const name = user.firstName + '' + user.lastName;

        this.setState({ userDisplayName: name });
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
                <HeaderContext.Provider value={this.state}>
                    {this.props.children}
                </HeaderContext.Provider>
            </div>
        );
    };
}

export const HeaderConsumer = HeaderContext.Consumer;

















//  Wrong
// this.setState({
//   counter: this.state.counter + this.props.increment,
// });

//  Correct
// this.setState((state, props) => ({
//     counter: state.counter + props.increment
//   }));