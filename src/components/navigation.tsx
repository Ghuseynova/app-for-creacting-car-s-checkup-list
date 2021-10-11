import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { setModalShow } from '../store/actions';

const Navigation = (): JSX.Element => {
  const dispatch = useDispatch();

  function handleBtn() {
    dispatch(setModalShow(true));
  }
  return (
    <Navbar bg='light' expand='lg'>
      <Container>
        <Nav>
          <LinkContainer to='/active'>
            <Nav.Link>Active</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/passed'>
            <Nav.Link>Passed</Nav.Link>
          </LinkContainer>
        </Nav>
        <Button variant='primary' onClick={handleBtn}>
          Add Car
        </Button>
      </Container>
    </Navbar>
  );
};

export default Navigation;
