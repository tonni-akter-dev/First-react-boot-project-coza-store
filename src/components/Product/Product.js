import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './Product.css'
const Product = () => {
    const marginStyle={
        marginTop:'50px'
    }
    const imgStyle={
        // height:'450px',
        width:'250px',
        borderRadius:'8px'
    }
    return (
        <div>
            <Container>
                <h1 style={{ textAlign: 'left', fontWeight: 'bold' }}>PRODUCT OVERVIEW</h1>
            </Container>
            <Container>
                <Row  style={marginStyle}>
                    <Col style={{width:'200px'}}>
                        <img style={imgStyle} src="./images/carousal1.webp" alt="" />
                        <small>Esprit Ruffle Shirt</small> <br />
                        <small>$16.64</small>
                    </Col>
                    <Col>
                        <img  style={imgStyle} src="./images/carosal2.jpg" alt="" />
                        <small>Esprit Ruffle Shirt</small> <br />
                        <small>$16.64</small>
                    </Col>
                    <Col>
                        <img  style={imgStyle} src="./images/images (9).webp" alt="" />   <small>Esprit Ruffle Shirt</small> <br />
                        <small>$16.64</small>
                    </Col>
                    <Col>
                        <img  style={imgStyle} src="./images/images (10).webp" alt="" />   <small>Esprit Ruffle Shirt</small> <br />
                        <small>$16.64</small>
                    </Col>
                </Row>
            
                <Row style={marginStyle}>
                    <Col style={{width:'200px'}}>
                        <img style={imgStyle} src="./images/images (8).webp" alt="" />   <small>Esprit Ruffle Shirt</small> <br />
                        <small>$16.64</small>
                    </Col>
                    <Col>
                        <img  style={imgStyle} src="./images/images (12).webp" alt="" />   <small>Esprit Ruffle Shirt</small> <br />
                        <small>$16.64</small>
                    </Col>
                    <Col>
                        <img  style={imgStyle} src="./images/images (23).webp" alt="" />   <small>Esprit Ruffle Shirt</small> <br />
                        <small>$16.64</small>
                    </Col>
                    <Col>
                        <img  style={imgStyle} src="./images/images (16).webp" alt="" />   <small>Esprit Ruffle Shirt</small> <br />
                        <small>$16.64</small>
                    </Col>
                </Row>
            
                <Row style={marginStyle}>
                    <Col style={imgStyle}>
                        <img style={{width:'250px'}} src="./images/images (19).webp" alt="" />   <small>Esprit Ruffle Shirt</small> <br />
                        <small>$16.64</small>
                    </Col>
                    <Col>
                        <img  style={imgStyle} src="./images/images.jpg" alt="" />   <small>Esprit Ruffle Shirt</small> <br />
                        <small>$16.64</small>
                    </Col>
                    <Col>
                        <img  style={imgStyle} src="./images/images (2).jpg" alt="" />   <small>Esprit Ruffle Shirt</small> <br />
                        <small>$16.64</small>
                    </Col>
                    <Col>
                        <img  style={imgStyle} src="./images/images (24).webp" alt="" />
                        <small>Esprit Ruffle Shirt</small> <br />
                        <small>$16.64</small>
                    </Col>
                </Row>
            
                <Row style={marginStyle}>
                    <Col style={{width:'250px',}}>
                        <img style={imgStyle} src="./images/images (4).webp" alt="" />   <small>Esprit Ruffle Shirt</small> <br />
                        <small>$16.64</small>
                    </Col>
                    <Col>
                        <img  style={imgStyle} src="./images/images (28).webp" alt="" />   <small>Esprit Ruffle Shirt</small> <br />
                        <small>$16.64</small>
                    </Col>
                    <Col>
                        <img  style={imgStyle} src="./images/images (22).webp" alt="" />   <small>Esprit Ruffle Shirt</small> <br />
                        <small>$16.64</small>
                    </Col>   
                    <Col>
                        <img  style={imgStyle} src="./images/images (26).webp" alt="" />   <small>Esprit Ruffle Shirt</small> <br />
                        <small>$16.64</small>
                    </Col>
                </Row>
            </Container>
            <Button variant='outline-dark'
            style={{
                width:'140px',
                borderRadius:'25px',
                marginBottom:'50px'
            }}
            >Load More</Button>
        </div>
    );
};

export default Product;