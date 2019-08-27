import * as React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



var todoItems = [];
todoItems.push({ id: 1, title: "learn react", done: false });
todoItems.push({ id: 2, title: "learn typescript", done: true });
todoItems.push({ id: 3, title: "go to RPA project", done: true });

class TodoList extends React.Component {
    render() {
        var items = this.props.items.map((item, id) => {
            return (
                <TodoListItem key={id} item={item} id={id} removeItem={this.props.removeItem} markTodoDone={this.props.markTodoDone} />
            );
        });
        return (
            <ul className="list-group"> {items} </ul>
        );
    }
}

class TodoListItem extends React.Component {
    constructor(props) {
        super(props);
        this.onClickClose = this.onClickClose.bind(this);
        this.onClickDone = this.onClickDone.bind(this);
    }
    onClickClose() {
        var id = parseInt(this.props.id);
        this.props.removeItem(id);
    }
    onClickDone() {
        var id = parseInt(this.props.id);
        this.props.markTodoDone(id);
    }
    render() {
        var todoClass = this.props.item.done ?
            "done" : "undone";
        return (
            <li className="list-group-item ">
                <div className={todoClass}>
                    <span className="glyphicon glyphicon-ok icon" aria-hidden="true" onClick={this.onClickDone}></span>
                    {this.props.item.title}
                    <button type="button" className="close" onClick={this.onClickClose}>&times;</button>
                </div>
            </li>
        );
    }
}

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }
    componentDidMount() {
        this.refs.itemName.focus();
    }
    onSubmit(event) {
        event.preventDefault();
        var newItemValue = this.refs.itemName.value;

        if (newItemValue) {
            this.props.addItem({ newItemValue });
            this.refs.form.reset();
        }
    }
    render() {
        return (
            <form ref="form" onSubmit={this.onSubmit} className="form-inline">
                <input type="text" ref="itemName" className="form-control" placeholder="add a new todo..." />
                <button type="submit" className="btn btn-default">Add</button>
            </form>
        );
    }
}

class TodoHeader extends React.Component {
    render() {
        return <h1>Todo list</h1>;
    }
}

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.markTodoDone = this.markTodoDone.bind(this);
        this.state = { todoItems: todoItems };
    }
    addItem(todoItem) {
        todoItems.unshift({
            id: todoItems.length + 1,
            title: todoItem.newItemValue,
            done: false
        });
        this.setState({ todoItems: todoItems });
    }
    removeItem(itemId) {
        todoItems.splice(itemId, 1);
        this.setState({ todoItems: todoItems });
    }
    markTodoDone(itemId) {
        var todo = todoItems[itemId];
        todoItems.splice(itemId, 1);
        todo.done = !todo.done;
        todo.done ? todoItems.push(todo) : todoItems.unshift(todo);
        this.setState({ todoItems: todoItems });
    }
    render() {
        return (
            <div id="main">
                <TodoHeader />
                <TodoList items={this.props.initItems} removeItem={this.removeItem} markTodoDone={this.markTodoDone} />
                <TodoForm addItem={this.addItem} />
            </div>
        );
    }
}

export default TodoApp;

ReactDOM.render(<TodoApp initItems={todoItems} />, document.getElementById('root'));









//-----------------------------------------------------------------------------------------------------------------------
/*
import * as React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



var todoItems = [];
todoItems.push({ id: 1, title: "learn react", done: false });
todoItems.push({ id: 2, title: "Go shopping", done: true });
todoItems.push({ id: 3, title: "buy flowers", done: true });

class TodoList extends React.Component {
    render() {
        var items = this.props.items.map((item, id) => {
            return (
                <TodoListItem key={id} item={item} id={id} removeItem={this.props.removeItem} markTodoDone={this.props.markTodoDone} />
            );
        });
        return (
            <ul className="list-group"> {items} </ul>
        );
    }
}

class TodoListItem extends React.Component {
    constructor(props) {
        super(props);
        this.onClickClose = this.onClickClose.bind(this);
        this.onClickDone = this.onClickDone.bind(this);
    }
    onClickClose() {
        var id = parseInt(this.props.id);
        this.props.removeItem(id);
    }
    onClickDone() {
        var id = parseInt(this.props.id);
        this.props.markTodoDone(id);
    }
    render() {
        var todoClass = this.props.item.done ?
            "done" : "undone";
        return (
            <li className="list-group-item ">
                <div className={todoClass}>
                    <span className="glyphicon glyphicon-ok icon" aria-hidden="true" onClick={this.onClickDone}></span>
                    {this.props.item.title}
                    <button type="button" className="close" onClick={this.onClickClose}>&times;</button>
                </div>
            </li>
        );
    }
}

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }
    componentDidMount() {
        this.refs.itemName.focus();
    }
    onSubmit(event) {
        event.preventDefault();
        var newItemValue = this.refs.itemName.value;

        if (newItemValue) {
            this.props.addItem({ newItemValue });
            this.refs.form.reset();
        }
    }
    render() {
        return (
            <form ref="form" onSubmit={this.onSubmit} className="form-inline">
                <input type="text" ref="itemName" className="form-control" placeholder="add a new todo..." />
                <button type="submit" className="btn btn-default">Add</button>
            </form>
        );
    }
}

class TodoHeader extends React.Component {
    render() {
        return <h1>Todo list</h1>;
    }
}

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.markTodoDone = this.markTodoDone.bind(this);
        this.state = { todoItems: todoItems };
    }
    addItem(todoItem) {
        todoItems.unshift({
            id: todoItems.length + 1,
            title: todoItem.newItemValue,
            done: false
        });
        this.setState({ todoItems: todoItems });
    }
    removeItem(itemId) {
        todoItems.splice(itemId, 1);
        this.setState({ todoItems: todoItems });
    }
    markTodoDone(itemId) {
        var todo = todoItems[itemId];
        todoItems.splice(itemId, 1);
        todo.done = !todo.done;
        todo.done ? todoItems.push(todo) : todoItems.unshift(todo);
        this.setState({ todoItems: todoItems });
    }
    render() {
        return (
            <div id="main">
                <TodoHeader />
                <TodoList items={this.props.initItems} removeItem={this.removeItem} markTodoDone={this.markTodoDone} />
                <TodoForm addItem={this.addItem} />
            </div>
        );
    }
}

export default TodoApp;

ReactDOM.render(<TodoApp initItems={todoItems} />, document.getElementById('root'));

*/

//-----------------------------------------------------------------------------------------------------------------------

// import * as React from 'react';

// interface Todos {
//     id: number;
//     title: string;
//     isComplete: boolean;
//     isDleted: boolean;
// }

// interface todoState {
//     title: string;
// }

// // interface Props {
// //     todo: Todos;
// // }

// interface todosarray {
//     todos: [{ id: 0, title: 'task1' }, { id: 1, title: 'task2' }, { id: 2, title: 'task3' }, { id: 3, title: 'task4' },]

// }

// class TodoList extends React.Component<todosarray, todoState> {
//     constructor(props: todosarray) {
//         super(props);

//         this.state = { todos: this.props.todos };
//     }

//     // state = {
//     //     todos: [{ id: 0, title: 'task1' }, { id: 1, title: 'task2' }, { id: 2, title: 'task3' }, { id: 3, title: 'task4' },]
//     // }
//     public handleSubmit(e: any) {
//         var value = this.state.todos.title;
//         if (value) {
//             this.props.onSave(value);
//             this.setSata({ title: value });
//         } else {
//             this.props.onDestroy;
//         }

//     }

//     public handleChange(e: any) {
//         this.setState(title: e.target.value);
//     }

//     render() {
//         return (
//             <form className="todo-form" onSubmit={e => this.handleSubmit(e)}>
//                 <input type="submit" value={} onChange={e => this.handleChange(e)} className="submit-todo-button" />
//                 <input type="button" value="Cancel" className="cancel-todo-button" />
//             </form>
//         );
//     }
// }


// export default class TodolistComponent extends React.Component<todosarray>{

//     render() {
//         return (
//             <div>
//                 <h1>TODO</h1>
//                 <TodoList {...this.props} />
//             </div>
//         )
//     }
// }
















