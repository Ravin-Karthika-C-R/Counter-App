import React from "react";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';

function OperatingHour({data}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <div>
        <Button variant="warning w-100" onClick={handleShow}>
        Operating Hours
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Operating Hours</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ListGroup>
            <ListGroup.Item>Monday : {data.Monday}</ListGroup.Item>
            <ListGroup.Item>Tuesday : {data.Tuesday}</ListGroup.Item>
            <ListGroup.Item>Wednesday : {data.Wednesday}</ListGroup.Item>
            <ListGroup.Item>Thursday : {data.Thursday}</ListGroup.Item>
            <ListGroup.Item>Friday : {data.Friday}</ListGroup.Item>
            <ListGroup.Item>Saturday : {data.Saturday}</ListGroup.Item>
            <ListGroup.Item>Sunday : {data.Sunday}</ListGroup.Item>

        </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
export default OperatingHour