import React from 'react';
import 'whatwg-fetch';
import TaskForm from './task-form';
import TaskList from './task-list';
import TaskMap from './task-map';

class TaskContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = { task: [] };
  }
  componentDidMount(){
    $.ajax({
      method: 'GET',
      url: '/',
      dataType: 'json'
    })
    .done(function(data){
      this.setState({ task: data})
    }.bind(this))
  }
  _addTask(newTask){
    let currentTasks = this.state.tasks;
    debugger
    currentTasks.task.push(newTask);
    this.setState({tasks: currentTasks});
  }

  render() {
    return (
      <div>
        <TaskForm addTask={this._addTask.bind(this)} />
        <TaskList tasks={this.state.tasks} />
        <TaskMap/>
      </div>
    );
  }
}



export default TaskContainer;
