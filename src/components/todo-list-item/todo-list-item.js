import React from 'react';
import { connect } from 'react-redux';
import {ActionCreator} from '../../store/action';
import './todo-list-item.css';

const TodoListItem = ({ id, label, done, important, handleRemoveTask, changeDoneStatus, changeImportantStatus }) => {

  return (
    <span className={`todo-list-item ${done && 'done'}`}>
      <span
        className={`todo-list-item-label ${important && 'important'}`}
        onClick={() => changeDoneStatus(id)}>
        {label}
      </span>

      <button type="button"
              className="btn btn-outline-success btn-sm float-right"
              onClick={() => changeImportantStatus(id)}>
        <i className="fa fa-exclamation" />
      </button>

      <button type="button"
              className="btn btn-outline-danger btn-sm float-right"
              onClick={() => handleRemoveTask(id)}>
        <i className="fa fa-trash-o" />
      </button>
    </span>
  );
};

const mapDispatchToProps = (dispatch) => ({
  handleRemoveTask(id) {
    dispatch(ActionCreator.delTask(id))
  },

  changeDoneStatus(id) {
    dispatch(ActionCreator.doneTask(id))
  },

  changeImportantStatus(id) {
    dispatch(ActionCreator.importantTask(id))
  }
});

export default connect(null, mapDispatchToProps)(TodoListItem);
