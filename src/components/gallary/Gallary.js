import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Gallary.css';
const Gallary = () => {
    return (
        <Container style={{
            marginTop:'50px',
            marginBottom:'50px'
        }}>
            <Row>
                <Col className="hover" style={{position:'relative'}}>
                    <img src="./images/g1.webp" style={{ width: '350px',
                border:'1px solid lightgray'
                }} alt=""/>
                   <div className="text-position">
                   <h3 className="women">Women</h3>
                   <p>Spring 2018</p>
                   </div>
                </Col>
                <Col style={{position:'relative'}}>
                    <img src="./images/g2.webp" style={{ width: '350px',
                border:'1px solid lightgray'
                }} alt=""/>
                   <div className="text-position">
                   <h3 className="women">Men</h3>
                   <p>Spring 2018</p>
                   </div>
                </Col>
                <Col style={{position:'relative'}}>
                    <img src="./images/g3.webp" style={{ width: '350px',
                border:'1px solid lightgray'
                }} alt=""/>
                   <div className="text-position">
                   <h3 className="women">Accessories</h3>
                   <p>New Trend</p>
                   </div>
                </Col>
            </Row>
        </Container>
    );
};
export default Gallary;


