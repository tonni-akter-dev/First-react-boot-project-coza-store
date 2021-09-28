
import React from 'react';

// import  logo from './images/logo.webp'
import { Button, Carousel, Container, Nav, Navbar} from 'react-bootstrap';
import './Header.css'
const Header = () => {
    return (
        <div>

            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#">
                        <img src="./images/logo.webp" alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="mr-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll>
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">Shop</Nav.Link>

                            <Nav.Link href="#">
                                Feature
                            </Nav.Link>
                            <Nav.Link href="#">
                                Blog
                            </Nav.Link>
                            <Nav.Link href="#">
                                About
                            </Nav.Link>
                            <Nav.Link href="#">
                                Contact
                            </Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link href="#" style={{marginLeft:'450px'}}>
                            <i class="fas fa-search"></i>
                            </Nav.Link>
                            <Nav.Link href="#" >
                            <i class="fas fa-shopping-cart"></i>
                            </Nav.Link>
                            <Nav.Link href="#">
                            <i class="far fa-heart"></i>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
{/* carousal start here..... */}
<Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="./images/c1.webp"
      alt="First slide"
    />
    <Carousel.Caption style={{
        textAlign:'left',
        paddingBottom:'250px',
        color:'black'
    }}>
         <p>Women Collection 2018</p>
      <h1>NEW COLLECTION</h1>
     <Button  pill style={{backgroundColor:'#7380E0',borderRadius:"30px",width:'120px'}}>Shop Now</Button>

    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img className="d-block w-100"src="./images/c2.webp"
      alt="Second slide"/>
   <Carousel.Caption style={{
        textAlign:'left',
        paddingBottom:'250px',
        color:'black'
    }}>
         <p>Women Collection 2018</p>
      <h1>NEW COLLECTION</h1>
     <Button  pill style={{backgroundColor:'#7380E0',borderRadius:"30px",width:'120px'}}>Shop Now</Button>

    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./images/c3.webp"
      alt="Third slide"
    />
  <Carousel.Caption style={{
        textAlign:'left',
        paddingBottom:'250px',
        color:'black'
    }}>
         <p>Women Collection 2018</p>
      <h1>NEW COLLECTION</h1>
     <Button  pill style={{backgroundColor:'#7380E0',borderRadius:"30px",width:'120px'}}>Shop Now</Button>

    </Carousel.Caption>
  </Carousel.Item>
</Carousel>





































        </div>
    );
};

export default Header;