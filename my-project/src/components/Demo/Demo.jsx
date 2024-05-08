import React, { useContext, useState } from "react";
import '../Demo/Demo.css'
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import lionImage from '../images/ar7.jpeg'
import { myContext } from '../context/context';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import instaIcons from '../images/instagramIcons.png'
import fbIcons from '../images/facebookIcons.png'
import { myJerseys } from "../MyJerseyList/MyJerseyList";

export default function Demo() {

  const nav = useNavigate()
  const [menu, setMenu] = useState("SignIn")
  const { myPlayers, setMyPlayers, categoryImage, setCategoryImage,
    imageLink, setImageLink
  } = useContext(myContext)
  function showShopByTeam() {

  }
  return (
    <div className="amain">
      <div className="atop-nav-bar">
      <Nav className="atop-main">
        <p className="atopmain-text">Now Enjoy All India Free Shipping On Every Order</p>
      </Nav>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Link to={'/'}><img className="alogo" onClick={() => (nav('/'))} src={lionImage} height={100} width={100} alt="" /></Link>
          <Navbar.Toggle aria-controls="navbarScroll" />

          <Navbar.Collapse id="navbarScroll">

            <Form className="d-flex">
              <Form.Control type="search" placeholder="Search" className="me-2" style={{ width: 400, marginLeft: 120 }} aria-label="Search" />
              <Button variant="outline-info">Search</Button>
            </Form>

            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px", marginLeft: "80px" }} navbarScroll>
              <Nav.Link style={{ fontWeight: 'bold' }} href="#action2" onClick={() => (nav('/MyStore'))}>My Store</Nav.Link>
              <Nav.Link style={{ fontWeight: 'bold' }} href="#action1" onClick={() => (nav('/signIn'))}>LogIn</Nav.Link>
              <Nav.Link style={{ fontWeight: 'bold' }} href="#action3" onClick={() => (nav('/ShopByTeams'))}>Support</Nav.Link>
              <Nav.Link style={{ fontWeight: 'bold' }} href="#action4">Wishlist</Nav.Link>
              <Nav.Link style={{ fontWeight: 'bold' }} href="#action5">Cart</Nav.Link>
              <Nav.Link style={{ fontWeight: 'bold' }} href="#action5">Call Us : +91-9746726000</Nav.Link>
            </Nav>

          </Navbar.Collapse>

        </Container>
      </Navbar>
      </div>

      <hr style={{
        widows:'100%'
      }}/>

      <div className="aacenter">

        <div className="amain-00card">
          {
            myJerseys.map((data, index) => (
              <div class="card" style={{ height: '600px', width: '400px' }}>
                <div style={{overflow:'hidden'}} className="acard-image01">
                  <img class="card-img-top" src={data.image} alt="Card image cap" />
                </div>
                <div class="card-body" style={{width:'100%'}}>
                  <h5 class="card-title">{data.name}</h5>
                  <p class="card-text">{data.price}</p>
                  <Button className="acard-button">Add Cart</Button>
                </div>
              </div>
            ))
          }
        </div>

      </div>



      <hr style={{ width: '100%', marginTop: '50px' }} />

      <div className="afooter" >
        <div style={{ textAlign: 'center', color: 'black' }}><p style={{ fontSize: '20px', letterSpacing: '2px' }}>FOLLOW US</p></div>
        <div style={{ textAlign: 'center' }}><img className="afooter-logo" src={fbIcons} alt="" /><img className="footer-logo" alt="" src={instaIcons} /></div><br />
        <div style={{ paddingLeft: '85px' }}> <hr style={{ width: '1300px' }} /> </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div><p style={{ letterSpacing: '2px' }}>STORE DETAILS</p></div>
          <div><p style={{ fontWeight: 'bold' }}>Sports Jersey Hub</p></div>
          <div><p>Kochi, Kerala, India</p></div>
          <div style={{ paddingLeft: '85px' }}> <hr style={{ width: '1300px' }} /> </div>
          <div><p style={{ letterSpacing: '1px' }}>QUICK LINKS</p></div>
          <div><Link className="afooter-links">Help & Support</Link> <Link className="footer-links">FAQs</Link> <Link className="footer-links">Store Policy</Link></div>
        </div>
        <div style={{ textAlign: 'center' }}><Link to={'/DemoLinks'}>DemoLinks</Link></div>
      </div>

    </div>
  );
}