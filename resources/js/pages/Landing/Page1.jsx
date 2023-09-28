import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

export default function Page1(){
    return(
        <>
            <Row >
                <Col xs={4} className="m-2">
                    <Button className="rounded-5"> Social Oculus</Button>
                </Col>
                <Col xs={4}>
                <Button>Tools</Button>
                <Button>Channels</Button>
                <Button>Blogs</Button>
                </Col>
                <Col xs={4}></Col>
            </Row>
        </>
    )
}