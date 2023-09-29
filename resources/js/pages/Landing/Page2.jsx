import React from "react";
import { Button, Col, Row } from "react-bootstrap";

export default function Page2() {
    return (
        <>
            <Row className="w-100v">
                <Col xs={12} className="d-flex justify-content-center fst-italic mt-2 ">
                    <h3><b>Grow your following without draining your time</b></h3>
                </Col>
            </Row>

            <Row className="w-100">
                <Col xs={4}></Col>
                <Col xs={4} className="mt-4 fst-italic fw-bold p-0 fs-5 w-50">
                    <p>Social media can be the fastest and cheapest way to build your following and grow your business. But it can also take up all your time. Here are four ways Social Oculus can help.</p>
                </Col>
                <Col xs={4}></Col>
            </Row>
            
            <Row className="w-100">
                <Col xs={6} className="m-auto fs-2 fw-semibold">
                    <h4 className="text-primary text-center fw-bolder fs-2">1. SHARE CLICK-WORTHY CONTENT</h4>
                    <h3 className="m-4 fs-1 p-2 text-center"><i><b>Get the clicks you deserve</b></i></h3>
                    <p className="fst-italic p-4 mx-5">Oculus will tell you when and what to publish to make your content stand out</p>

                    <Button className="mx-5 fw-bold fs-4 fst-italic shadow rounded-4">Start Creating</Button>
                </Col>
                <Col xs={6}>
                    <img src="/images/Page2.png"/>
                </Col>
            </Row>
        </>
    )
}