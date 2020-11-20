import React from 'react';
import { ListGroup } from 'react-bootstrap';
const TodoItem = ({ text, todo, todos, setTodos }) => {
  const deleteTodoItem = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  return (
    <ListGroup.Item>
      <div className='row' style={{ fontSize: '20px' }}>
        <div className='col col-10 text-lg'>{text}</div>
        <div
          className='col col-2 text-right'
          onClick={deleteTodoItem}
          style={{ cursor: 'pointer', color: 'red', fontWeight: 'bold' }}
        >
          X
        </div>
      </div>
    </ListGroup.Item>
  );
};

export default TodoItem;
