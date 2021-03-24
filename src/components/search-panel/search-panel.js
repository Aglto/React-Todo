import React from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import './search-panel.css';

const SearchPanel = ({search}) => {

  const handleSearchTask = (evt) => {
    const value = evt.target.value;
    search(value);
  };

  return (
    <input type="text"
      className="form-control search-input"
      placeholder="type to search"
      onChange={handleSearchTask}/>
  );
};

const mapDispatchToProps = (dispatch) => ({
  search(value) {
    dispatch(ActionCreator.searchTask(value))
  }
});

export default connect(null, mapDispatchToProps)(SearchPanel);
