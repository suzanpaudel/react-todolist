import React from 'react';
import { ListGroup, Container } from 'react-bootstrap';
import TodoItem from './TodoItem';

const TaskList = ({ todos, setTodos }) => {
  return (
    <Container>
      <ListGroup>
        {todos.map((todo) => (
          <TodoItem
            text={todo.text}
            key={todo.id}
            todos={todos}
            setTodos={setTodos}
            todo={todo}
          />
        ))}
      </ListGroup>
    </Container>
  );
};

export default TaskList;
