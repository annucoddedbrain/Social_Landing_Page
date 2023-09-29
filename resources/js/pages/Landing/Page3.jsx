import React from "react";
import { Button, Col, Row } from "react-bootstrap";

export default function Page3() {
    return (
        <>
            <Row className="w-100v">
            <Col xs={3}></Col>
                <Col xs={5} className="text-center mt-4 fst-italic fw-bold p-0 fs-2 w-50 fst-italic mt-2 ">
                <h2><b>Your audience is unique and your approach should be too.</b></h2>                </Col>
                <Col xs={4}></Col>
                
            </Row>

            <Row className="w-100">
                <Col xs={3}></Col>
                <Col xs={5} className=" text-center mt-4 fst-italic fw-bold p-0 fs-5 w-50">
                    <p>We'll work with you to create a plan that fits your goals and speaks directly to your audience. Because one-size-fits-all just doesn't cut it in our book.</p>
                </Col>
                <Col xs={4}></Col>
            </Row>
            
            <Row className="w-100">
                <Col xs={6} className="m-auto fs-2 fw-semibold">
                    <h4 className="text-primary text-center fw-bolder fs-2">2. BUILD AN ENGAGED AUDIENCE</h4>
                    <h3 className="m-4 fs-1 p-2 text-center"><i><b>Grow your following</b></i></h3>
                    <p className="fst-italic p-4 mx-5">Oculus will share your content on the right Channels, with suggested hashtags to help you grow.</p>

                    <Button className="mx-5 fw-bold fs-4 fst-italic shadow rounded-4">Start growing</Button>
                </Col>
                <Col xs={6}>
                    <img src="/images/Page2.png"/>
                </Col>
            </Row>
        </>
    )
}