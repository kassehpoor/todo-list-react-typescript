import * as React from 'react';
import '../index.css';


var _todoItems: any[] = [];
_todoItems.push({ id: 1, title: "learn react", done: false });
_todoItems.push({ id: 2, title: "learn typescript", done: true });
_todoItems.push({ id: 3, title: "go to RPA project", done: true });

export default class TodolistComponent extends React.Component {

    inputValue: string;

    constructor(props: any) {
        super(props);
        this.state = { todoItems: _todoItems };
        this.inputValue = '';
    }
    componentDidMount() {
        // this.refs.itemName.focus();
    }

    onClickClose(itemId: any) {
        var id = parseInt(_todoItems[itemId]);
        this.removeItem(id);
    }

    onClickDone(itemId: any) {
        var id = parseInt(_todoItems[itemId]);
        this.markTodoDone(id);
    }

    markTodoDone(itemId: any) {
        var todo = _todoItems[itemId];
        _todoItems.splice(itemId, 1);
        todo.done = !todo.done;
        todo.done ? _todoItems.push(todo) : _todoItems.unshift(todo);
        this.setState({ todoItems: _todoItems });
    }

    removeItem(itemId: any) {
        _todoItems.splice(itemId, 1);
        this.setState({ todoItems: _todoItems });
    }

    onSubmit = (e: any) => {
        e.preventDefault();
        let title = this.context.value;
        _todoItems.unshift({
            id: _todoItems.length + 1,
            title: title,
            done: false
        });
        this.setState({ todoItems: _todoItems });
    }

    // handleChange(e: any) {
    //     this.setState({ [e.target.name]: e.target.value });
    // }

    createOnClickDone(itemId: any) {
        var that = this;
        return function () {
            var id = parseInt(_todoItems[itemId]);
            that.markTodoDone(id);
        }
    }

    render() {

        const todoList = _todoItems.map(todo => (
            <li key={todo.id}>
                <div>
                    <span className="glyphicon glyphicon-ok icon" aria-hidden="true" onClick={this.createOnClickDone.bind(this, todo.id)}></span>
                    <div className={todo.done ? "done" : "undone"}>{todo.title}</div>
                    <button type="button" className="close" onClick={() => this.onClickClose(todo.id)}>&times;</button>
                </div>
            </li>
        ));

        return (
            <div>
                <h1>Todo list</h1>;
                <form ref="form" onSubmit={this.onSubmit} className="form-inline">
                    <input type="text" ref={(input) => this.context = input} name="inputValue" className="form-control" placeholder="add a new todo..." />
                    <button type="submit" onClick={e => this.onSubmit(e)} className="btn btn-default">Add</button>
                </form>
                <br />
                <ul className="list-group">
                    {todoList}
                </ul>
            </div>
        );
    }
}




// return (
//     <ul>
//         {this.state.todoItems.map(function (todo) {
//             return <li>{todo.title}</li>;
//         })}
//     </ul>
// )