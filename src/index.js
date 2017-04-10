import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import ListItems from './componets/ListItem';
import './App.css';
import './index.css';

class App extends React.Component {
  constructor(){
    super();

    this.changeStatus = this.changeStatus.bind(this);
    this.onChange = this.onChange.bind(this);
    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.edit = this.edit.bind(this);
    this.state = {
      tasks : [
        {
          name: 'buy book',
          completed: false
        },
        {
          name: 'study math',
          completed: false
        },
        {
          name: 'go somewhere',
          completed: false
        }
      ],
      value: '',
      editMode: {
        edit: false,
        index: null
      }
    }
  }

  onChange(newValue){
    this.setState({
      value: newValue.target.value
    });
  }

  changeStatus(index){
    var tasks = this.state.tasks;
    var task = tasks[index];
    task.completed = !task.completed;

    this.setState({
      tasks: tasks
    });
  }

  removeTask(index){
    var tasks = this.state.tasks;
    tasks.splice(index, 1);

    this.setState({
      tasks: tasks
    });
  }

  edit(index){
    var editMode = this.state.editMode;
    var tasks = this.state.tasks;
    var selectedValue = tasks[index].name;

    tasks[index].name = '';
    editMode.edit = true;
    editMode.index = index;

    this.setState({
      tasks: tasks,
      value: selectedValue,
      editMode: editMode
    });

  }

  addTask(ev){
    ev.preventDefault();

    let tasks = this.state.tasks;
    let value = this.state.value;

    if(this.state.editMode.edit){
      tasks[this.state.editMode.index].name = value;
      this.setState({
        tasks: tasks,
        value: ''
      });
    } else {
      tasks.unshift({
        name: value,
        completed: false
      });

      this.setState({
        tasks: tasks,
        value: ''
      });
    }

    /*to reset edit counter*/
    this.setDefault();
  }

  setDefault(){
    var tasks = this.state.tasks;
    var value = '';
    var editMode = {
      edit: false,
      index: null
    };
    this.setState({
      tasks: tasks,
      value: value,
      editMode: editMode
    });
  }

  render() {
    return (
      <div>
        <div className="App App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React TodoList</h2>
        </div>
        <hr/>
        <form onSubmit={this.addTask}>
          <input type="text"
                 value={this.state.value}
                 onChange={this.onChange}/>
          <input type="submit" value="save" />
        </form>
        <ul>
          {
            this.state.tasks.map((task, index) => {
              return (
                <ListItems
                  key={task.name}
                  removeTask={this.removeTask}
                  editTask={this.edit}
                  task={task}
                  index={index}
                  clickHandler={this.changeStatus} />
              )
            })
          }
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
