import * as React from 'react';
import '../../index.css';


var _todoItems: any[] = [];
_todoItems.push({ id: 1, title: "learn react", done: false });
_todoItems.push({ id: 2, title: "learn typescript", done: true });
_todoItems.push({ id: 3, title: "go to RPA project", done: true });

export default class TodolistComponent extends React.Component {

    inputValue: any;

    constructor(props: any) {
        super(props);
        this.state = { todoItems: _todoItems };
        this.inputValue = '';
    }
    componentDidMount() {
        // this.refs.itemName.focus();
    }

    deleteTodo(itemId: any) {
        var index = _todoItems.findIndex(t => t.id === itemId);
        _todoItems.splice(index, 1);
        this.setState({ todoItems: _todoItems });
    }

    doneTodo(itemId: any) {
        var todo = _todoItems.find(t => t.id === itemId);
        todo.done = !todo.done;
        this.setState({ todoItems: _todoItems });
    }

    onSubmit = (e: any) => {
        e.preventDefault();
        let title = this.inputValue.value;
        _todoItems.unshift({
            id: _todoItems.length + 1,
            title: title,
            done: false
        });
        this.setState({ todoItems: _todoItems });
        // this.inputValue.value = '';
    }

    render() {

        const todoList = _todoItems.map(todo => (
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

