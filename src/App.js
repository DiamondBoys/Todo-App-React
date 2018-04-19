import React from 'react';
import './App.css';
import Header from './components/header';
import TodoInput from './components/todoInput';
import TodoItem  from'./components/todoItem';
import Search  from'./components/search';
import { tasks } from './components/todos';  // import data in file todos
import uuidv4 from 'uuid/v4';            // package make random id.

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos : tasks.todos,
            nextId: tasks.nextId,
            search: ''
        }
        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
    }

    addTodo(todoText) {   // add text from input then add to file data (components/todo.js)
        let todos = this.state.todos.slice(); // create a coppy object
        todos.push({id: this.state.nextId, text:todoText}); // push new todo object to todos
        this.setState({
            todos: todos,
            nextId: uuidv4()       // create random new nextid
        }); 
    }

    removeTodo(id) {
        this.setState({
            todos: this.state.todos.filter((todo, index) => todo.id !== id)
        });
    }

    search = (value) => {
        this.setState({search: value})
    }

     render() {
        return (
          <div className="App">
            <div className="todo-wrapper">
                <Header />
                <TodoInput todoText="" addTodo={this.addTodo} />
                <Search value={this.state.search} onSearch={this.search} />
                <ul>
                    {
                        this.state.todos.filter(todo => {
                            console.log(this.state.search)
                            const search = new RegExp(this.state.search, 'ig')
                            return search.test(todo.text)
                        } ).map((todo, index) => {
                            return <TodoItem todo={todo} key={todo.id} id={todo.id} removeTodo={this.removeTodo} />
                        })
                    }
                </ul>
            </div>
          </div>
        );
      }
    }
    
    export default App;


