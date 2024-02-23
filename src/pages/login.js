import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { withRouter } from 'react-router-dom';

export default class Login extends Component {
    handleLogin = () => {
        window.location.href="/dashboard";
    }
    render() {
        return (
            <div className="app-prelogin-wrap">
                <div className="app-prelogin__container">
                    <div className="app-prelogin__content">
                        <Row>
                            <Col md={{ span: 10, offset: 1 }}>
                                <div className="app-prelogin__welcome">
                                    <h1>Login</h1>
                                    <p>Please login to continue</p>
                                </div>
                                <Form className="app-prelogin__form">
                                    <Form.Group className="mb-3">
                                        <Form.Label>Email Address:</Form.Label>
                                        <Form.Control type="email" placeholder="Enter Email Address" value="Admin" />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                    <Form.Label>Password:</Form.Label>
                                        <Form.Control type="password" placeholder="Enter Password" value="Admin" />
                                    </Form.Group>
                                    <div className="app-prelogin__action">
                                        <Button variant="primary" className="rounded-5" onClick={this.handleLogin}>Login</Button>
                                    </div>
                                </Form>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        )
    }
}