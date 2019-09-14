import * as React from 'react';
import '../../index.css';
import database from '../database';

export default class TodolistComponent extends React.Component<any, any> {

    counter: any;

    inputValue: any;

    constructor(props: any) {
        super(props);

        const userId = database.getCurrentUser() || 0
        const todoItems = database.getModel(userId) || []

        this.state = {
            userId,
            todoItems,
            filter: 0
        };

        this.counter = todoItems.reduce((a: any, todo: any) => Math.max(a, todo.id), 0) + 1

        this.inputValue = '';
    }

    deleteTodo(itemId: any) {
        const todoItems = this.state.todoItems
        todoItems.splice(this.state.todoItems.findIndex((t: any) => t.id === itemId), 1)
        this.setState({ todoItems })
    }

    doneTodo(itemId: any) {
        var todo = this.state.todoItems.find((t: any) => t.id === itemId);
        todo.done = !todo.done;
        this.setState({ todoItems: [...this.state.todoItems] });
    }

    onSubmit = (e: any) => {
        e.preventDefault();
        let title = this.inputValue.value;

        this.setState({
            todoItems: [{
                id: this.counter++,
                title: title,
                done: false
            }].concat(this.state.todoItems)
        })
    }

    filter(f: Number) {
        this.setState({ filter: f })
    }

    render() {
        const { todoItems, filter } = this.state;

        const todoList = todoItems.filter((todo: any) => filter === 0 || filter === 1 && !todo.done || filter === 2 && todo.done).map((todo: any) => (
            <li key={todo.id} >
                <div >

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
                <br />
                <ul>
                    <input className="filters" type="button" onClick={this.filter.bind(this, 0)} value="All" />
                    <input className="filters" type="button" onClick={this.filter.bind(this, 1)} value="Active" />
                    <input className="filters" type="button" onClick={this.filter.bind(this, 2)} value="Complete" />
                </ul>
            </div>
        )
    }
}


























/*
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
    _filter: any = 0;

    inputValue: any;

    constructor(props: any) {
        super(props);
        this._user = database.getCurrentUser() || 0;
        this._todoItems = database.getModel(this._user.id) || [];

        this.state = { userId: this._user.id, todoItems: this._todoItems, filter: this._filter };
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

    filter(f: Number) {
        this.setState({ filter: f })
    }

    render() {

         const todoList = this._todoItems.filter((todo: any) => filter === 0 || filter === 1 && !todo.done || filter === 2 && todo.done).map((todo: any) => (
            <li key={todo.id} >
                <div >
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
                <br />
                <ul>
                    <input className="filters" type="button" onClick={this.filter.bind(this, 0)} value="All" />
                    <input className="filters" type="button" onClick={this.filter.bind(this, 1)} value="Active" />
                    <input className="filters" type="button" onClick={this.filter.bind(this, 2)} value="Complete" />
                </ul>
            </div>
        )
    }
}
*/