import React, { Component } from "react";
import "./todo.css";

class Todo extends Component {
  constructor() {
    super();

    this.state = {
      todo: "",
      list: [],
      inputvalue: "",
    };
  }

  handleChange = (ee) => {
    this.setState({ todo: ee.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState((a) => ({
      // return {
      list: [...a.list, a.todo],
      todo: "",
    }));
  };

  handleDelete = (d) => {
    this.setState((a) => {
      const newList = a.list.filter((c, i) => i !== d);
      return { list: newList };
    });
  };

  render() {
    return (
      <>
        <div class="todo">
          <h1>Todo List </h1>

          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="todo"
              id="todo"
              value={this.state.todo}
              onChange={this.handleChange}
            />
            <input type="submit" />
          </form>

          <ul>
            {this.state.list.map((c, d) => (
              <li key={d}>
                {c}
                <button onClick={() => this.handleDelete(d)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
        <hr />
      </>
    );
  }
}

export default Todo;
