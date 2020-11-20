import React from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';

const TodoInput = ({ inputTask, setInputTask, todos, setTodos }) => {
  const changeInput = (e) => {
    setInputTask(e.target.value);
  };

  const addTask = (e) => {
    e.preventDefault();
    if (inputTask !== '') {
      setTodos([...todos, { text: inputTask, id: Math.random() * 100 }]);
      setInputTask('');
    }
  };

  return (
    <Container className='my-5 text-center'>
      <Card>
        <Card.Body>
          <Card.Title>Enter Your ToDos</Card.Title>
          <Form>
            <Form.Group>
              <Form.Control
                size='lg'
                type='text'
                placeholder='Enter Your ToDo'
                onChange={changeInput}
                value={inputTask}
              />
            </Form.Group>
            <Button
              as='input'
              type='submit'
              value='Submit'
              size='lg'
              block
              onClick={addTask}
            />
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default TodoInput;
