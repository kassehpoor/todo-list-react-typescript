import * as React from 'react';
import '../../index.css';
import database from '../database';

// var _todoItems: any[] = [];
// _todoItems.push({ id: 1, title: "learn react", done: false });
// _todoItems.push({ id: 2, title: "learn typescript", done: true });
// _todoItems.push({ id: 3, title: "go to RPA project", done: true });



export default class TodolistComponent extends React.Component<any, {}> {

    _user: any = {};
    _todoItems: any[] = [];

    inputValue: any;

    constructor(props: any) {
        super(props);
        this._user = database.getCurrentUser() || 0;
        this._todoItems = database.getModel(this._user.id) || [];

        this.state = { userId: this._user.id, todoItems: this._todoItems };
        this.inputValue = '';
    }

    deleteTodo(itemId: any) {
        var index = this._todoItems.findIndex(t => t.id === itemId);
        this._todoItems.splice(index, 1);
        this.setState({ todoItems: this._todoItems });
    }

    doneTodo(itemId: any) {
        var todo = this._todoItems.find(t => t.id === itemId);
        todo.done = !todo.done;
        this.setState({ todoItems: this._todoItems });
    }

    onSubmit = (e: any) => {
        e.preventDefault();
        let title = this.inputValue.value;
        this._todoItems.unshift({
            id: this._todoItems.length + 1,
            title: title,
            done: false
        });
        database.setModel(this._user.id, this._todoItems);
        this.setState({ userId: this._user.id, todoItems: this._todoItems });
        // this.inputValue.value = '';
    }

    render() {

        const todoList = this._todoItems.map(todo => (
            <li key={todo.id}>
                <div>
                    <span className="checkmark" onClick={() => this.doneTodo(todo.id)}></span>
                    <div className={todo.done ? "done" : "undone"}>{todo.title}</div>
                    <button type="button" className="close" onClick={() => this.deleteTodo(todo.id)}>&times;</button>
                </div>
            </li>
        ));

        return (
            <div>
                <h1>Todo list</h1>;
                 <form ref="form" onSubmit={this.onSubmit} className="form-inline">
                    <input autoComplete="off" type="text" ref={(input) => this.inputValue = input} name="inputValue" className="form-control" placeholder="add a new todo..." />
                    <button type="submit" onClick={e => this.onSubmit(e)} className="btn btn-default">Add</button>
                </form>
                <br />
                <ul className="list-group">
                    {todoList}
                </ul>
            </div>
        )
    }
}

