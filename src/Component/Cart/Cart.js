import React from "react";
import "./Cart.css";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Cart = (props) => {
  // console.log(props.data.title)
  const { image, title, ratting, p, weeks, hrs, catagori, price } = props.data;
  return (
    <div>
      <Card className="card">
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <p>Price: {price} </p>
          <p>Ratting: {ratting}</p>
          <Card.Text>{p}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small>{weeks}weeks</small>
          <small className="text-muted">{hrs} per week</small>
          <Button variant="primary" onClick={() => props.handel(price)}>
            {" "}
            Enroll Now
          </Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Cart;
