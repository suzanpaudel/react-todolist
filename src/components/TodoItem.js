import React from 'react';
import { ListGroup } from 'react-bootstrap';
const TodoItem = ({ text, todo, todos, setTodos }) => {
  const deleteTodoItem = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  return (
    <ListGroup.Item>
      <div className='row'>
        <div className='col col-10'>{text}</div>
        <div className='col col-2 text-right' onClick={deleteTodoItem}>
          X
        </div>
      </div>
    </ListGroup.Item>
  );
};

export default TodoItem;
