import * as React from "react";
import { NavLink } from "react-router-dom";
import { userContext } from "../../App";
import { directive } from "@babel/types";

export default class HeaderComponent extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {                                                                                
    return (
      <userContext.Consumer>
        {(status) => (<div>
          {(status) ?
           <div>
           <userContext.Consumer>
             {(userDisplayName) => <span>{userDisplayName}</span>}
           </userContext.Consumer>
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
         </div>:
          <div></div>
         }
        </div>)
        }
      </userContext.Consumer>
    );
  }
}



// return (
//   <userContext.Consumer>
//     {(status) => (<div>
//       {(status === 'todolist') ?
//        <div>
//        <userContext.Consumer>
//          {(userDisplayName) => <span>{userDisplayName}</span>}
//        </userContext.Consumer>
//        <div>
//          <NavLink className="btn-Sign" to="/todolist">
//            TodoList
//  </NavLink>
//          <NavLink className="btn-Sign" to="/signin">
//            Signin
//  </NavLink>
//          <NavLink className="btn-Sign" to="/signup">
//            Singup
//  </NavLink>
//        </div>
//      </div>:
//       <div></div>
//      }
//     </div>)
//     }
//   </userContext.Consumer>
// );




































/*
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

*/
