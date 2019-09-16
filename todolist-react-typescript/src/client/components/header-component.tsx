import * as React from "react";
import { NavLink } from "react-router-dom";

export default class HeaderComponent extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div>
        <span>{"current user is : " + this.props.userDisplayName}</span>
        <div>
          <NavLink className="btn-Sign" to="/todolist">
            TodoList
          </NavLink>
          <NavLink className="btn-Sign" to="/signin">
            Signin
          </NavLink>
          <NavLink className="btn-Sign" to="/signup">
            Singup
          </NavLink>
        </div>
      </div>
    );
  }
}

//  Wrong
// this.setState({
//   counter: this.state.counter + this.props.increment,
// });

//  Correct
// this.setState((state, props) => ({
//     counter: state.counter + props.increment
//   }));

/*
import * as React from 'react';
import { NavLink } from 'react-router-dom';
import database from '../database';
import sm from '../state-manager';

type Props = {};
type State = {
    userDisplayName: string
};

const { Provider, Consumer } = React.createContext({
    updateUserDisplayName: (name: string) => { },
});

export default class HeaderComponent extends React.Component<any, State> {

    constructor(props: any) {
        super(props);
        let that = this;

        this.updateUserDisplayName('');
     }

    updateUserDisplayName = (newUserDisplayName: string) => {
        this.setState({ userDisplayName: newUserDisplayName });
    };

    render() {
        const contextValue = { updateUserDisplayName: this.updateUserDisplayName };

        return (
            <div>
                <Provider value={contextValue}>
                    <div>
                        <NavLink className='btn-Sign' to="/todolist">TodoList</NavLink>
                        <NavLink className='btn-Sign' to="/signin">Signin</NavLink>
                        <NavLink className='btn-Sign' to="/signup">Singup</NavLink>
                    </div>
                    <div>{this.state.userDisplayName}</div>
                </Provider>
            </div>
        );
    };
}

export const HeaderConsumer = Consumer;

*/
