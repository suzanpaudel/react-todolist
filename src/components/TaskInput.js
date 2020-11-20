import React from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';

const TaskInput = () => {
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
              />
            </Form.Group>
            <Button as='input' type='submit' value='Submit' size='lg' block />
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default TaskInput;
