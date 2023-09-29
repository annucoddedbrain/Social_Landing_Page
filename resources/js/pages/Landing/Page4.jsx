import React from "react";
import { Button, Col, Row } from "react-bootstrap";



export default function Page4() {
    return (
        <>
            <Row className="w-100v">
                <Col xs={3}></Col>
                <Col xs={5} className="text-center mt-4 fst-italic fw-bold p-0 fs-2 w-50 fst-italic mt-2 ">
                    <h2><b>You don't need a huge budget to make a big splash.</b></h2>
                </Col>
                <Col xs={4}></Col>

            </Row>

            <Row className="w-100">
                <Col xs={3}></Col>
                <Col xs={5} className=" text-center mt-4 fst-italic fw-bold p-0 fs-5 w-50">
                    <p>Our tools are designed with you in mind, so you can get the result you want without breaking the bank, whether you're a solo creator or port of a team, we,ve got something for everyone. </p>
                </Col>
                <Col xs={4}></Col>
            </Row>

            <Row className="w-100 mt-5">
                <Col xs={6} className="m-auto fs-2 fw-semibold">
                    <h4 className="text-primary mx-4 fw-bolder fs-2">2. SAVE TONS OF TIME</h4>
                    <h3 className="m-4 fs-1 p-2 mx-4"><i><b>Halve your workload</b></i></h3>
                    <p className="fst-italic mx-4">Oculus will publish everything for you to save time and it'll showcase your work with automated projects.</p>

                    <Button className="mx-4 fw-bold fs-4 fst-italic shadow rounded-4">Start Optimizing</Button>
                </Col>
                <Col xs={6}>
                    <img src="/images/Page4.png" />
                </Col>
            </Row>
        </>
    )
}
