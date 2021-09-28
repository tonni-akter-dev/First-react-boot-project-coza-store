import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import './Footer.css'
const Footer = () => {
    return (
        <div style={{
            backgroundColor: 'black',
            color: 'gray',
            padding: '40px'
        }}>
            <Container>
                <Row>
                    <Col>
                        <h5>CATEGORIES</h5>
                        <p>Women</p>
                        <p>Men</p>
                        <p>Shoes</p>
                        <p>Watches</p>

                    </Col>
                    {/* second col */}
                    <Col>
                        <h5>Help</h5>
                        <p>Track Order</p>
                        <p>Returns</p>
                        <p>Shipping</p>
                        <p>FAQs</p>
                    </Col>
                    {/* 3rd column */}
                    <Col>
                        <h5>GET IN TOUCH</h5>
                        <p>Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879</p>
                        <p><i class="fab fa-facebook-f"></i> <i class="fab fa-instagram"></i> <i class="fab fa-pinterest-p"></i></p>
                    </Col>

                    <Col>
                        <h5>NEWSLETTER</h5>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Button style={{ width: '140px', borderRadius: '25px', marginBottom: '50px', height: '40px', backgroundColor: 'skyblue', border: 'none' }}>Subscribe</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
            <div>
                <p>
                    <img src="./images/images (30).webp" alt="" />
                    <img src="./images/images (31).webp" alt="" />
                    <img src="./images/images (18).webp" alt="" />
                    <img src="./images/images (20).webp" alt="" />
                    <img src="./images/images (17).webp" alt="" />
                </p>
                <p>Copyright ©2021 All rights reserved | This template is made with  by Colorlib</p>
            </div>
        </div>
    );
};

export default Footer;



