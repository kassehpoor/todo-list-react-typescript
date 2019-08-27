import * as React from 'react';

type Props = {};
type State = {};

export default class SubmitTodoComponent extends React.Component<Props, State>{
    readonly state: State = {
        todos: {}
    }

    // const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    //     event.preventDefault();
    //     setTodos(previousTodos => [previousTodos, { title: todoValue, isCompleted: false }]);

    //     setTodoValue("");
    // }

    // render() {
    //     return (
    //         <form className="todo-form" onSubmit={handleSubmit}>
    //             <input type="submit" value={inputValaue} onChange={onInputChange} className="submit-todo-button" />
    //             <input type="button" value="Cancel" className="cancel-todo-button" />
    //         </form>
    //     )
    // };
}











