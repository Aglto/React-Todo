import React, {useState} from 'react';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import ItemStatusFilter from '../item-status-filter/item-status-filter';
import TodoList from '../todo-list/todo-list';

const App = () => {
  const [todoData, setTodoData] = useState(
    [
      { label: 'Drink Coffee', important: false, id: 1 },
      { label: 'Make Awesome App', important: true, id: 2 },
      { label: 'Have a lunch', important: false, id: 3 }
    ]
  );
  
  const handleDelItem = (label) => {
    setTodoData((prev) => {
      return prev.filter((item) => item.label !== label);
    });
  };
  
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
  
        <TodoList todos={todoData} remove={handleDelItem}/>
      </div>
    );
  };

export default App;