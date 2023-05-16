import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle, ListGroup, ListGroupItem, Row, Col } from "reactstrap";
import "./FoodMenu.css";

function Menu({ items, title }) {
    return (
        <section className="col-md-5">
            <Card>
                <CardBody>
                    <CardTitle className="font-weight-bold text-center">Menu</CardTitle>
                    <Row>
                        <Col>
                            <ListGroup>
                                <h5 className="text-center">{title}</h5>
                                {items.map((item) => (
                                    <Link to={`/${title.toLowerCase()}/${item.id}`} key={item.id}>
                                        <ListGroupItem>{item.name}</ListGroupItem>
                                    </Link>
                                ))}
                            </ListGroup>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </section>
    );
}

export default Menu;




/**import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText, ListGroup, ListGroupItem, Row, Col } from "reactstrap";
import "./FoodMenu.css";

function Menu({ items }) {
    const itemList = Object.values(items);

    return (
        <section className="col-md-5">
            <Card>
                <CardBody>
                    <CardTitle className="font-weight-bold text-center">Menu</CardTitle>
                    <CardText>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </CardText>
                    <Row>
                        <Col>
                            <ListGroup>
                                {itemList.map((item) => (
                                    <Link to={`/snacks/${item.id}`} key={item.id}>
                                        <ListGroupItem>{item.name}</ListGroupItem>
                                    </Link>
                                ))}
                            </ListGroup>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </section>
    );
}

export default Menu; **/