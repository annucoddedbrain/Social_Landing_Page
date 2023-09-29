import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import {AiOutlineCheck} from "react-icons/ai"


export default function Page1() {
    return (
        <Container fluid>
            <Row>
                <Col xs={3}>
                    <Button variant="primary" className="rounded-5 mx-4 mt-4 p-2">Social Oculus</Button>

                </Col>

                <Col xs={6} className="align-items-center justify-content-center d-flex">
                    <Button variant="light" className="rounded-2 shadow mx-4 mt-4 p-2 border-black">Tools</Button>
                    <Button variant="light" className="rounded-2 shadow mx-4 mt-4 p-2 border-black">Channels</Button>
                    <Button variant="light" className="rounded-2 shadow mx-4 mt-4 p-2 border-black">Blogs</Button>

                </Col>

                <Col xs={3} className="justify-content-end d-flex">
                    <Button type="button" className="btn btn-light text-primary mx-4 mt-4 p-2">Log in</Button>
                    <Button type="button" className="rounded-2 shadow mx-4 mt-4 p-2 border-black">Get Started Now</Button>
                </Col>
            </Row>
                    <Row>
                        <Col xs={6}>
                            <Row className="mx-2 mt-5">
                                <h2>
                                    Expand your reach across social media and beyond
                                </h2>
                            </Row>

                            <Row className="mx-2 mt-4">
                                <h3>Social Oculus is a user-friendly platform focused on helping individuals and teams grow their audience organically</h3>
                            </Row>

                            <Row className="mx-2 mt-5">
                                <h4>We prioritize values-driven marketing and offer affordable tools tailored to specific goals and target demographics. Our approach emphasizes genuine connections and aunthetic growth strategies.</h4>
                            </Row>

                            <Row>
                                <Col xs={7}>
                                    <Form>
                                        <Form.Group className="mx-3 " controlId="formBasicPassword">
                                            <Form.Label></Form.Label>
                                            <Form.Control type="password" placeholder="" />
                                        </Form.Group>
                                    </Form>
                                </Col>

                                <Col xs={5} className="">
                                    <Button type="button" className="rounded-2 mx-4 mt-4 border-black">Get Started Now</Button>

                                </Col>
                            </Row>

                            <Row className="mt-4 mx-2">
                                <Col xs={4}>
                                <Button type="button" className="rounded-2  btn btn-light "><h5 className="fw-bold">Try For Free <AiOutlineCheck className="text-primary fs-5 fw-bold"/></h5></Button>

                                </Col>
                                <Col xs={4}>
                                <Button type="button" className="rounded-2  btn btn-light "><h5 className="fw-bold">No Credit Cards<AiOutlineCheck className="text-primary fs-5 fw-bold"/></h5></Button>

                                </Col>
                                <Col xs={4}>
                                <Button type="button" className="rounded-2  btn btn-light "><h5 className="fw-bold">Cancel Anytime<AiOutlineCheck className="text-primary fs-5 fw-bold"/></h5></Button>

                                </Col>
                            </Row>


                        </Col>
                        <Col xs={6}>
                        <img src="/images/Page1.png"/>
                    </Col>
                    </Row>








        </Container>
    )
}
