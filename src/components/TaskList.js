import React from 'react';
import { ListGroup, Container } from 'react-bootstrap';
const TaskList = () => {
  return (
    <Container>
      <ListGroup>
        <ListGroup.Item>
          <div className='row'>
            <div className='col col-10'>Task One</div>
            <div className='col col-2 text-right'>X</div>
          </div>
        </ListGroup.Item>
      </ListGroup>
    </Container>
  );
};

export default TaskList;
