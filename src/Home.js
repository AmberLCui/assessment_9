import React from "react";
import { Row, Col } from "reactstrap";
import Menu from "./Menu";

function Home({ snacks, drinks }) {
    return (
        <div>
            <h1>Welcome to Snack or Booze!</h1>
            <Row>
                <Col>
                    <Menu items={snacks || []} title="Snacks" />
                </Col>
                <Col>
                    <Menu items={drinks || []} title="Drinks" />
                </Col>
            </Row>
        </div>
    );
}

export default Home;


/**import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

function Home() {
    return (
        <section className="col-md-8">
            <Card>
                <CardBody className="text-center">
                    <CardTitle>
                        <h3 className="font-weight-bold">
                            Welcome to Silicon Valley's premier dive cafe!
                        </h3>
                    </CardTitle>
                </CardBody>
            </Card>
        </section>
    );
}

export default Home;**/