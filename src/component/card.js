import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Cards(props) {
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
           {props.text}
          </Card.Text>
          <Button variant="primary">{props.btnName}</Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default Cards;
