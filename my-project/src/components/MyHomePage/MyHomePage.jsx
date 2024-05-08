import React, { useContext, useState } from "react";
import "../MyHomePage/MyHomePage.css"
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import lionImage from '../images/ar7.jpeg'
import { myContext } from "../context/context";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import { useNavigate } from "react-router-dom";
import instaIcons from '../images/instagramIcons.png'
import fbIcons from '../images/facebookIcons.png'
import BodyScroll from "../BodyScroll/BodyScroll";
import { RiAdminLine } from "react-icons/ri";

export default function MyHomePage() {
  
  const nav = useNavigate()
  const {categoryImage,myJersey,searchQuery,setSearchQuery,searchItem,SetSearchItem,signIn,setSignIn,setItemSearch,cartProducts,setLikeProducts,setCartProducts
  } = useContext(myContext)
  const [filteredUsers, setFilteredUsers] = useState(myJersey)
  console.log(categoryImage)
  function showShopByTeams(CategoryTitle) {
    if (CategoryTitle === "SHOP BY TEAMS") {
      nav('/ShopByTeams')
    }
    else if (CategoryTitle === "SPECIAL EDITIONS") {
      nav('/ShopBySpecialEditions')

    }
    else if (CategoryTitle === "NEW ARRIVALS") {
      nav('/ShopByNewArrivals')
    }
    else if (CategoryTitle === "PLAYER EDITIONS") {
      nav('/ShopByPlayerEditions')
    }
  }
  
  function logoutBtn(){
    setLikeProducts([]);
        setCartProducts([]);
    const newA = [...signIn]
    newA.pop()
    setSignIn(newA)
    alert("Logout Successfully")
  }
  // Search Function(
  function serachInp(e){
    SetSearchItem(e.target.value)
  }
  function handleSearchInputChange() {
    
    if(searchItem === ""){
      // nav('/')
    }

    else{
    const query = searchItem
    setSearchQuery(query)
    const filteredResults = myJersey.filter((user) => {
        const { name, price,category } = user
        return (
            name.toLowerCase().includes(query.toLowerCase()) ||
            price.toString().includes(query) ||
            category.toLowerCase().includes(query.toLowerCase())
        )
    })
    setItemSearch(filteredResults)
    nav('/SearchPage')
  }

}
console.log("filtered",filteredUsers)

  return (
    <div className="main">

      <div className="topbar">
      <Nav className="top-main">

        <p className="topmain-text0">Now Enjoy All India Free Shipping On Every Order</p>
        <Link style={{ marginTop: '0px',marginLeft:'400px' }} to={'/AdminPage'}><RiAdminLine onClick={() => (nav('/AdminPage'))} /></Link>
      </Nav>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Link to={'/'}><img className="logo" onClick={() => (nav('/'))} src={lionImage} height={100} width={100} alt=""/></Link>
          <Navbar.Toggle aria-controls="navbarScroll" />

          <Navbar.Collapse id="navbarScroll">

            <Form className="d-flex">
              <Form.Control onChange={serachInp}  type="search" placeholder="Search" className="me-2" style={{ width: 400, marginLeft: 60 }} aria-label="Search" />
              <Button variant="outline-info" value={searchQuery} onClick={handleSearchInputChange}>Search</Button>
            </Form>

            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px", marginLeft: "0px" }} navbarScroll>
              <Nav.Link style={{ fontWeight: 'bold' }}  onClick={( ()=>nav('/MyStore'))}>My Store</Nav.Link>
              <BodyScroll />

              
      
            {signIn.length === 0 ? (
              
              <Nav.Link style={{ fontWeight: 'bold' }}  onClick={() => nav('/signIn')}>LogIn</Nav.Link>
              
            ) : (
              <Nav.Link style={{ fontWeight: 'bold' }} onClick={logoutBtn} >Logout</Nav.Link>
            )
          }
          
              <Nav.Link style={{ fontWeight: 'bold' }}  onClick={() => (nav('/ProductDisplay'))}>Support</Nav.Link>
              <Nav.Link style={{ fontWeight: 'bold' }} onClick={() => (nav('/MyWishList'))}>Wishlist</Nav.Link>
              
              {cartProducts.length === 0 ? (
                  <Nav.Link style={{ fontWeight: 'bold' }}  onClick={() => (nav('/AddToCart'))}>Cart</Nav.Link>
                ) : (
                  <>
                    <Nav.Link style={{ fontWeight: 'bold' }}  onClick={() => (nav('/AddToCart'))}>Cart</Nav.Link>

                    <button className="cart-count">{cartProducts.length}</button>

                  </>
                )
                }

              <Nav.Link style={{ fontWeight: 'bold' }} >Call Us : +91-9746726000</Nav.Link>
              

            </Nav>

          </Navbar.Collapse>

        </Container>
      </Navbar>

      </div>

      <div className="center">

        <div className="center-2" style={{ paddingTop: 50, paddingLeft: 50, paddingRight: 50 }}>
          <MDBCarousel showIndicators showControls fade>
            <Link to={'/ManchesterCity'}><MDBCarouselItem itemId={1}>
              <img src='https://dukaan.b-cdn.net/1440x1440/webp/media/78dc1a8d-0126-4471-b8cc-2c6aa9dd7b4c.blob' className='d-block w-80' alt='...' />
            </MDBCarouselItem></Link>

            <Link to={'/Arsenal'}><MDBCarouselItem itemId={2}>
              <img src='https://dukaan.b-cdn.net/1440x1440/webp/media/cb7e601c-3c44-487c-8884-a4ed26f6a550.blob' className='d-block w-80' alt='...' />
            </MDBCarouselItem></Link>

            <Link to={'/RealMadrid'}><MDBCarouselItem itemId={3}>
              <img src='https://dukaan.b-cdn.net/1440x1440/webp/upload_file_service/79c7fa71-63c0-4624-bf00-8cb81a8f96d5/image.png' className='d-block w-80' alt='...' />
            </MDBCarouselItem></Link>

            <Link to={'/ShopByNewArrivals'}><MDBCarouselItem itemId={4}>
              <img src='https://dukaan.b-cdn.net/1440x1440/webp/upload_file_service/3897d495-5e6f-4de2-ab7c-34e771afb8e9/image.png' className='d-block w-80' alt='...' />
            </MDBCarouselItem></Link>

            <Link to={'/ManchesterUnited'}><MDBCarouselItem itemId={5}>
              <img src='https://dukaan.b-cdn.net/1440x1440/webp/upload_file_service/b713bc67-abbb-4b6e-8382-b5b9c2270ef2/image.png' className='d-block w-80' alt='...' />
            </MDBCarouselItem></Link>

          </MDBCarousel>
        </div>

        <div className="center-1">
          <h3 class="t-black-12 z-ind-2 t-24_32 mt-18_26 medium mb32 m-mb16 textCenter" style={{ color: 'white' }}>Top categories</h3>

          <div className="category-cards">

            {
              categoryImage.map((data, index) => (

                <div key={index}>

                  <Card style={{ background: 'black' }} onClick={() => showShopByTeams(data.CategoryTitle)}>
                    <Card style={{ height: '300px', width: '300px', overflow: 'hidden' }}>
                      <Card.Img className="slideCards" variant="top" src={data.CategoryImage} />
                    </Card>
                    <Card.Body>
                      <Card.Title style={{ color: 'white', textDecoration: 'none' }}>{data.CategoryTitle}</Card.Title>
                    </Card.Body>
                  </Card>

                </div>
              ))
            }
          </div>

        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '50px', flexDirection: 'column', alignItems: 'center' }} className="center-images">
        <div className="center-images1"><img src="https://dukaan.b-cdn.net/1200x360/webp/upload_file_service/49b7cea0-fc78-4472-a880-60dcce8b3231/image.png" alt="" /></div>
        <span class="mt24 m-mt16 t-24_32 mt-18_26 medium textCenter title">Jersey World - Football Fans Choice</span>
        <span class="mt8 m-mt4 t-16_24 mt-14_20 regular textCenter description">Click Below to Find out why our store has a Rapidly Growing list of Super Happy Customers!</span>
        <div style={{ marginTop: '40px' }}><Button className="btn btn-dark">About Us</Button></div>
      </div>

      <hr style={{ width: '100%', marginTop: '50px' }} />

      <div className="footer" >
        <div style={{ textAlign: 'center', color: 'black' }}><p style={{ fontSize: '20px', letterSpacing: '2px' }}>FOLLOW US</p></div>
        <div style={{ textAlign: 'center' }}><img className="footer-logo" src={fbIcons} alt="" /><img className="footer-logo" alt="" src={instaIcons} /></div><br />
        <div style={{ paddingLeft: '85px' }}> <hr style={{ width: '1300px' }} /> </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div><p style={{ letterSpacing: '2px' }}>STORE DETAILS</p></div>
          <div><p style={{ fontWeight: 'bold' }}>Sports Jersey Hub</p></div>
          <div><p>Kochi, Kerala, India</p></div>
          <div style={{ paddingLeft: '85px' }}> <hr style={{ width: '1300px' }} /> </div>
          <div><p style={{ letterSpacing: '1px' }}>QUICK LINKS</p></div>
          <div><Link className="footer-links">Help & Support</Link> <Link className="footer-links">FAQs</Link> <Link className="footer-links">Store Policy</Link></div>
        </div>
      </div>

    </div>
  );
}