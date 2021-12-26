import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Navheader from './Navheader';

function App() {
  return (
    <>
      <Navheader />
      <Container className='mt-4'>
        <Row>
          <Col>
            <Card className='text-center'>
              <Card.Header>Featured</Card.Header>
              <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
                </Card.Text>
                <Button variant='primary'>Go somewhere</Button>
              </Card.Body>
              <Card.Footer className='text-muted'>2 days ago</Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
