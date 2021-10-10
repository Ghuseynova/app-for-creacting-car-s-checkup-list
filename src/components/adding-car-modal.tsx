import React, { useState } from 'react';
import { Form, Modal, Button, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addToCarList, setModalShow } from '../store/actions';

const AddingCarModal = (props: { show: boolean }): JSX.Element => {
  const [model, setModel] = useState('');
  const [owner, setOwner] = useState('');
  const dispatch = useDispatch();

  console.log(model, owner);

  function handleClose() {
    dispatch(setModalShow(false));
  }

  function handleAddBtn() {
    const car = {
      model,
      owner,
      isPassedCheckup: false,
    };

    dispatch(addToCarList(car));

    console.log('huhuhu');
    handleClose();
  }

  return (
    <Modal show={props.show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>Add Car</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className='mb-3'>
            <Form.Label>Model</Form.Label>
            <Form.Control
              name='model'
              value={model}
              placeholder='Honda'
              onChange={event => setModel(event.target.value)}
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formGridAddress2'>
            <Form.Label>Owner</Form.Label>
            <Form.Control
              name='owner'
              value={owner}
              placeholder='Michail Petrov'
              onChange={event => setOwner(event.target.value)}
            />
          </Form.Group>

          <Form.Group as={Row} className='mb-3 justify-content-center'>
            <Col xs='auto' className='my-1'>
              <Button variant='primary' onClick={handleAddBtn}>
                Add to List
              </Button>
            </Col>
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddingCarModal;
