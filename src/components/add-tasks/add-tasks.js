import React, {useState} from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import './add-tasks.css';

const AddTasks = ({addNewTask}) => {
    const [inputValue, setInputValue] = useState('');

    const onChangeInput = (evt) => {
        setInputValue(evt.target.value);
    }

    const handleAddNewTask = (evt) => {
        evt.preventDefault();
        addNewTask(inputValue);
    }

    return (
        <form className='form' onSubmit={handleAddNewTask}>
            <input className='form-control form-input' type='text' onChange={onChangeInput}/>
            <button className='btn btn-outline-secondary' type='submit'>Add new task</button>
        </form>
    );
};

const mapDispatchToProps = (dispatch) => ({
    addNewTask(value) {
        dispatch(ActionCreator.addTask(value));
    }
});

export default connect(null, mapDispatchToProps)(AddTasks);