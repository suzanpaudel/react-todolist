import React from 'react';
import { ListGroup } from 'react-bootstrap';
const TodoItem = ({ text }) => {
  return (
    <ListGroup.Item>
      <div className='row'>
        <div className='col col-10'>{text}</div>
        <div className='col col-2 text-right'>X</div>
      </div>
    </ListGroup.Item>
  );
};

export default TodoItem;
