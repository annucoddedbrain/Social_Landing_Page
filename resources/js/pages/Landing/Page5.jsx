import React from "react";
import { Button, Col, Row } from "react-bootstrap";



export default function Page5() {
    return (
        <>
            <Row className="w-100v">
                <Col xs={3}></Col>
                <Col xs={5} className="text-center mt-4 fst-italic fw-bold p-0 fs-2 w-50 fst-italic mt-2 ">
                    <h2 className="p-4"><b>Affordable Tools For Big Dreams</b></h2>
                </Col>
                <Col xs={4}></Col>

            </Row>



            <Row className="w-100 mt-5">
                <Col xs={6} className="m-auto fs-2 fw-semibold">
                    <h4 className="text-primary mx-4 fw-bolder fs-2">4. COORDINATE WITH EASE</h4>
                    <h4 className="m-4 fs-1 p-2 mx-3"><i><b>Collaboration has never been easier.</b></i></h4>

                    <p className="fst-italic mx-4"> With Oculus Permissions levels and approvals Flows, your team can work freely without any micro-management. </p>

                    <Button className="mx-4 fw-bold fs-4 fst-italic shadow rounded-4 mt-3">Start Collaborating</Button>
                </Col>
                <Col xs={6}>
                    <img src="/images/Page5.png" />
                </Col>
            </Row>
        </>
    )
}
