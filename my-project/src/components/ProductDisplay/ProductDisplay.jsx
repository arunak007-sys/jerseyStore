import React, { useContext, useState } from "react";
import '../MyStore/MyStore.css'
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
import '../ProductDisplay/ProductDisplay.css'
import Modal from "../Modal/Modal";



export default function ProductDisplay() {

  const nav = useNavigate()

  const { setLikeProducts,prodDisp, cartProducts, setCartProducts,signIn,setSignIn,searchQuery,setSearchQuery,searchItem,SetSearchItem,myJersey,setItemSearch} = useContext(myContext)
  // WISH ITEMS

  function logoutBtn() {
    setLikeProducts([]);
        setCartProducts([]);
    const newA = [...signIn]
    newA.pop()
    setSignIn(newA)
    alert("Logout Successfully")
  }

  function buyNow(products) {

    if (signIn.length === 0) {
      alert("SignIn First")
    }
    else{
    if (cartProducts.includes(products)) {
      // setCartProducts(cartProducts.filter((shoe) => shoe !== products))

    }
    else {
      setCartProducts([...cartProducts, products])
    }
    nav('/AddToCart')
  }

  }

  function clicksForAddCart(products) {

    if (signIn.length === 0) {
      alert("SignIn First")
    }
    else{
      if (cartProducts.includes(products)) {
        // setCartProducts(cartProducts.filter((shoe) => shoe !== products))

      }
      else {
        setCartProducts([...cartProducts, products])
      }
    }

  }
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
              <Form.Control onChange={serachInp}  type="search" placeholder="Search" className="me-2" style={{ width: 400, marginLeft: 60 }} aria-label="Search" />
              <Button variant="outline-info" value={searchQuery} onClick={handleSearchInputChange}>Search</Button>
              </Form>

              <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px", marginLeft: "80px" }} navbarScroll>
                <Nav.Link style={{ fontWeight: 'bold' }} href="#action2" onClick={() => (nav('/'))}>Home</Nav.Link>

                {signIn.length === 0 ? (
              
              <Nav.Link style={{ fontWeight: 'bold' }} href="#action1" onClick={() => nav('/signIn')}>LogIn</Nav.Link>
              
            ) : (
              <Nav.Link style={{ fontWeight: 'bold' }} onClick={logoutBtn} href="#action1">Logout</Nav.Link>
            )
          }
          
              <Nav.Link style={{ fontWeight: 'bold' }} href="#action3" onClick={() => (nav('/ProductDisplay'))}>Support</Nav.Link>
              <Nav.Link style={{ fontWeight: 'bold' }} href="#action4" onClick={() => (nav('/MyWishList'))}>Wishlist</Nav.Link>
              
              {cartProducts.length === 0 ? (
                  <Nav.Link style={{ fontWeight: 'bold' }} href="#action5" onClick={() => (nav('/AddToCart'))}>Cart</Nav.Link>
                ) : (
                  <>
                    <Nav.Link style={{ fontWeight: 'bold' }} href="#action5" onClick={() => (nav('/AddToCart'))}>Cart</Nav.Link>

                    <button className="cart-count">{cartProducts.length}</button>

                  </>
                )
                }

                <Nav.Link style={{ fontWeight: 'bold' }} href="#action5">Call Us : +91-9746726000</Nav.Link>
              </Nav>

            </Navbar.Collapse>

          </Container>
        </Navbar>
      </div>

      <hr style={{
        widows: '100%'
      }} />

      <div className="a1acenter">


        {prodDisp.map((data, index) => (
          <div className="prodDisp">

            <div className="prod-leftSection">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}><img style={{ margin: '40px' }} src={data.image} alt="" height={500} width={500} /></div>
              <div style={{ margin: '10px' }}><img src="https://dukaan.b-cdn.net/700x700/webp/upload_file_service/5a57ac2d-8d37-4f94-b949-62d86a1d5c0e/fan-size-chart.png" height={250} width={700} alt="" /></div>
            </div>

            <div className="prod-rightSection" style={{ padding: '30px' }}>

              <div><h2 style={{ fontSize: "22px", lineHeight: "28px", fontWeight: 'bold' }}>{data.name}</h2></div>
              <div style={{ marginTop: '20px' }}><p style={{ fontSize: '24px', lineHeight: '32px', fontWeight: '500' }}>₹{data.price}</p></div>

              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <div className="sizes" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                  <p style={{ fontWeight: 'bold' }}>Select Size</p>
                  <button className="BtnProd" style={{marginLeft:'20px'}}>S</button>
                  <button className="BtnProd" style={{marginLeft:'20px'}}>M</button>
                  <button className="BtnProd" style={{marginLeft:'20px'}}>X</button>
                  <button className="BtnProd" style={{marginLeft:'20px'}}>XL</button>
                  <button className="BtnProd" style={{marginLeft:'20px'}}>XLL</button>
                </div>

                <div className="sizes">
                  <Modal />
                </div>
              </div>

              <div>

              </div>

              <div style={{ display: 'flex', flexDirection: 'row',marginTop:'20px' }}>
                <div><Button style={{ width: '200px', borderRadius: '0px' }} className="acard-button" onClick={() => clicksForAddCart(data)}>
                        {
                          cartProducts.includes(data)?"Added":"Add to cart"
                        }
                  </Button></div> &nbsp;&nbsp;
                <div><Button style={{ width: '200px', borderRadius: '0px' }} className="acard-button" onClick={() => buyNow(data)} >Buy Now</Button></div>
              </div>

              <div class="trusted-badges-wrapper flex d-row" style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>

                <div class="trusted-badge">
                  <img src="https://dukaan.b-cdn.net/original/dukaan-media/plugins/trusted_badges_v2/free-shipping.svg" alt="badge" />
                </div>

                <div class="trusted-badge">
                  <img src="https://dukaan.b-cdn.net/original/dukaan-media/plugins/trusted_badges_v2/cod-available.svg" alt="badge" />
                </div>

                <div class="trusted-badge">
                  <img src="https://dukaan.b-cdn.net/original/dukaan-media/plugins/trusted_badges_v2/premium-quality.svg" alt="badge" />
                </div>

              </div>

              <div style={{ marginTop: '40px' }}><p>Products Details</p></div>
              <div><h4 style={{ fontSize: '16px' }}>Cash On Delivery (COD) Available</h4></div>
              <div><p>{data.description}</p></div>
              <div><p>Fitting - Regular/Parallel Fit</p></div>
              <div><p style={{ color: 'grey' }}>Please Note</p></div>
              <div><ul>
                <li>Kindly refer to the size chart given at the last slide of jersey images before placing the order</li>
                <li>For further size assistance from our team, kindly DM us on Instagram or WhatsApp</li>
                <li>For any custom print requirements or bulk orders, kindly DM us on Instagram or WhatsApp</li>
              </ul></div>

            </div>
          </div>

        ))}



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
      </div>

    </div>
  );
}
