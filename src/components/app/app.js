import React from 'react';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import ItemStatusFilter from '../item-status-filter/item-status-filter';
import TodoList from '../todo-list/todo-list';
import { connect } from 'react-redux';
import AddTasks from '../add-tasks/add-tasks'

const App = ({tasks, searchFragment, statusFilter}) => {
    
    const searchFilteredTask = tasks.filter((item) => {
      return searchFragment.length === 0 ? item : item.label.toLowerCase().includes(searchFragment.toLowerCase());
    });

    const statusFilteredTask = searchFilteredTask.filter((item) => {
      switch(statusFilter) {
        case 'All':
          return item;

        case 'Active':
          return item.done === false;

        case 'Done':
          return item.done;

        default:
          return item;
      }
    });

    return (
      <div className="todo-app">
        <AppHeader todos={statusFilteredTask} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList todos={statusFilteredTask} />
        <AddTasks />
      </div>
    );
  };

  const mapStateToProps = (state) => ({
    tasks: state.tasks,
    searchFragment: state.searchFragment,
    statusFilter: state.statusFilter,
  });

export default connect(mapStateToProps, null)(App);