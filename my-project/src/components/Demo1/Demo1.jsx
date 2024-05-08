import React, { useContext, useState } from "react";
import '../Demo1/Demo1.css'
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import lionImage from '../images/ar7.jpeg'
import { myContext } from '../context/context';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';
import { useNavigate } from "react-router-dom";
import instaIcons from '../images/instagramIcons.png'
import fbIcons from '../images/facebookIcons.png'

export default function Demo1() {

  const nav = useNavigate()
  const [menu, setMenu] = useState("SignIn")
  const { data, myPlayers, setMyPlayers, categoryImage, setCategoryImage,
    imageLink, setImageLink
  } = useContext(myContext)
  console.log(data)
  function showShopByTeam(){

  }
  return (
    <div className="main">
      <Nav className="top-main00">
        <p className="topmain-text">Now Enjoy All India Free Shipping On Every Order</p>
      </Nav>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
         <Link to={'/'}><img className="logo" onClick={()=>(nav('/'))} src={lionImage} height={100} width={100} alt="" /></Link> 
          <Navbar.Toggle aria-controls="navbarScroll" />

          <Navbar.Collapse id="navbarScroll">

            <Form className="d-flex">
              <Form.Control type="search" placeholder="Search" className="me-2" style={{ width: 400, marginLeft: 120 }} aria-label="Search" />
              <Button variant="outline-info">Search</Button>
            </Form>

            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px", marginLeft: "80px" }} navbarScroll>
            <Nav.Link style={{fontWeight:'bold'}} href="#action2" onClick={()=>(nav('/'))}>Home</Nav.Link>
              <Nav.Link style={{fontWeight:'bold'}} href="#action1" onClick={()=>(nav('/signIn'))}>LogIn</Nav.Link>
              <Nav.Link style={{fontWeight:'bold'}} href="#action3" >Support</Nav.Link>
              <Nav.Link style={{fontWeight:'bold'}} href="#action4">Wishlist</Nav.Link>
              <Nav.Link style={{fontWeight:'bold'}} href="#action5">Cart</Nav.Link>
              <Nav.Link style={{fontWeight:'bold'}} href="#action5">Call Us : +91-9746726000</Nav.Link>
            </Nav>

          </Navbar.Collapse>

        </Container>
      </Navbar>
           
      <div className="acenter">

        <h2>Hello</h2>
      </div>

        

      <hr style={{width:'100%',marginTop:'50px'}} />

      <div className="footer" >
        <div style={{textAlign:'center',color:'black'}}><p style={{fontSize:'20px',letterSpacing:'2px'}}>FOLLOW US</p></div>
        <div style={{textAlign:'center'}}><img className="footer-logo" src={fbIcons} alt="" /><img className="footer-logo" alt="" src={instaIcons} /></div><br />
        <div style={{paddingLeft:'85px'}}> <hr style={{width:'1300px'}} /> </div>
        <div style={{display:'flex', flexDirection:'column',alignItems:'center'}}>
        <div><p style={{letterSpacing:'2px'}}>STORE DETAILS</p></div>
        <div><p style={{fontWeight:'bold'}}>Sports Jersey Hub</p></div>
        <div><p>Kochi, Kerala, India</p></div>
        <div style={{paddingLeft:'85px'}}> <hr style={{width:'1300px'}} /> </div>
        <div><p style={{letterSpacing:'1px'}}>QUICK LINKS</p></div>
        <div><Link className="footer-links">Help & Support</Link> <Link className="footer-links">FAQs</Link> <Link className="footer-links">Store Policy</Link></div>
        </div>
        <div style={{textAlign:'center'}}><Link to={'/DemoLinks'}>DemoLinks</Link></div>
      </div>

    </div>
  );
}