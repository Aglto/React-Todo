import React from 'react';
import {connect} from 'react-redux';
import { ActionCreator } from '../../store/action';
import './item-status-filter.css';

const ItemStatusFilter = ({buttonClick}) => {

  const handleFilterClick = (evt) => {
    const filterName = evt.target.textContent;
    buttonClick(filterName);
  }

  return (
    <div className="btn-group">
      <button type="button"
              className="btn btn-info" onClick={handleFilterClick}>All</button>
      <button type="button"
              className="btn btn-outline-secondary" onClick={handleFilterClick}>Active</button>
      <button type="button"
              className="btn btn-outline-secondary" onClick={handleFilterClick}>Done</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  buttonClick(filter){
    dispatch(ActionCreator.changeStatusFilter(filter))
  }
});

export default connect(null, mapDispatchToProps)(ItemStatusFilter);
