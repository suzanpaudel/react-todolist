import React from 'react';
import { ListGroup, Container } from 'react-bootstrap';
import TodoItem from './TodoItem';

const TaskList = ({ todos }) => {
  return (
    <Container>
      <ListGroup>
        {todos.map((todo) => (
          <TodoItem text={todo.text} key={todo.id} />
        ))}
      </ListGroup>
    </Container>
  );
};

export default TaskList;
