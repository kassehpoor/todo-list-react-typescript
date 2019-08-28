import * as React from 'react';
import './index.css';


var _todoItems: any[] = [];
_todoItems.push({ id: 1, title: "learn react", done: false });
_todoItems.push({ id: 2, title: "learn typescript", done: true });
_todoItems.push({ id: 3, title: "go to RPA project", done: true });

export default class TodolistComponent extends React.Component {
    constructor(props: any) {
        super(props);
        this.onClickClose = this.onClickClose.bind(this);
        this.onClickDone = this.onClickDone.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.markTodoDone = this.markTodoDone.bind(this);
        this.state = { todoItems: _todoItems };
        this.onSubmit = this.onSubmit.bind(this);
    }

    addItem(todoItem: any) {
        _todoItems.unshift({
            id: _todoItems.length + 1,
            title: todoItem.newItemValue,
            done: false
        });
        this.setState({ todoItems: _todoItems });
    }
    removeItem(itemId: any) {
        _todoItems.splice(itemId, 1);
        this.setState({ todoItems: _todoItems });
    }
    markTodoDone(itemId: any) {
        var todo = _todoItems[itemId];
        _todoItems.splice(itemId, 1);
        todo.done = !todo.done;
        todo.done ? _todoItems.push(todo) : _todoItems.unshift(todo);
        this.setState({ todoItems: _todoItems });
    }
    componentDidMount() {
        // this.refs.itemName.focus();
    }

    onSubmit(event: any) {
        event.preventDefault()
        // this.setState({ todoItems: this.state });
        this.addItem(this.refs);
    }

    onClickClose(itemId: any) {
        var id = parseInt(_todoItems[itemId]);
        this.removeItem(id);
    }

    onClickDone(itemId: any) {
        var id = parseInt(_todoItems[itemId]);
        this.markTodoDone(id);
    }

    render() {

        const todoList = _todoItems.map(todo => (
            <li key={todo.id}>
                <div>
                    <span className="glyphicon glyphicon-ok icon" aria-hidden="true" onClick={() => this.onClickDone(todo.id)}></span>
                    <div className={todo.done ? "done" : "undone"}>{todo.title}</div>
                    <button type="button" className="close" onClick={() => this.onClickClose(todo.id)}>&times;</button>
                </div>
            </li>
        ));

        return (
            <div>
                return <h1>Todo list</h1>;
                <form ref="form" onSubmit={this.onSubmit} className="form-inline">
                    <input type="text" ref="newItemValue" className="form-control" placeholder="add a new todo..." />
                    <button type="submit" className="btn btn-default">Add</button>
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