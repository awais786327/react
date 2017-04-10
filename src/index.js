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
    this.states = {
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
      currentTask: 'test'
    }
  }

  changeStatus(index){
    var task = this.states.tasks[index];
    task.completed = !task.completed;

    this.setState({
      tasks: task
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
        <ul>
          {
            this.states.tasks.map((task, index) => {
              return <ListItems key={task.name} task={task} index={index} clickHandler={this.changeStatus} />
            })
          }
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
