import React, { useContext, useEffect, useState } from "react";
import '../ShopBySpecialEditions/ShopBySpecialEditions.css'
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
import { CiHeart } from "react-icons/ci";
import BodyScroll from "../BodyScroll/BodyScroll";

export default function ShopBySpecialEditions() {
  const nav = useNavigate()
  const [menu, setMenu] = useState("SignIn")
  const { specialEditions, setSpecialEditions,searchItem,setItemSearch,SetSearchItem,searchQuery, setLikeProducts, cartProducts, setCartProducts, myJersey, prodDisp, setProdDdisp, setSearchQuery, setMyJersey, signIn, setSignIn,
     likeProducts
  } = useContext(myContext)

  useEffect(() => {
    handleSpecial()
  }, [])

  function handleSpecial() {

    setSpecialEditions(myJersey.filter(data => data.category == "Special Edition Jersey"))
  }

  // WISH ITEMS
  const [colors, setColors] = useState("red")
  const [totalPrice, setTotalPrice] = useState(0)
  function clicksForWish(products) {
    console.log("wish btn clicked");
    if (signIn.length === 0) {
      alert("SignIn First")
    }
    else {
      if (likeProducts.includes(products)) {
        alert("Item Removed From Wish List")
        setColors("red")
        setLikeProducts(likeProducts.filter((shoe) => shoe !== products))
      }
      else {
        alert("Item Added To Wish List")
        setLikeProducts([...likeProducts, products])
      }
    }

  }

  // CART ITEMS
  function clicksForAddCart(products) {

    if (signIn.length === 0) {
      alert("SignIn First")
    }
    else {
      if (cartProducts.includes(products)) {
        // setCartProducts(cartProducts.filter((shoe) => shoe !== products))

      }
      else {
        setCartProducts([...cartProducts, products])
      }
    }

  }
  // Display Product Details

  function displayProdDetails(products) {
    if (prodDisp.includes(products)) {
      // setProdDdisp(prodDisp.filter((shoe) => shoe !== products))
    }
    else {
      setProdDdisp([products])
    }
    nav('/ProductDisplay')
  }
  function logoutBtn() {
    setLikeProducts([]);
        setCartProducts([]);
    const newA = [...signIn]
    newA.pop()
    setSignIn(newA)
    alert("Logout Successfully")
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
function serachInp(e){
  SetSearchItem(e.target.value)
}
  return (
    <div className="main1">
      <Nav className="top-main1">
        <p className="topmain-text">Now Enjoy All India Free Shipping On Every Order</p>
      </Nav>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Link to={'/'}><img className="logo" onClick={() => (nav('/'))} src={lionImage} height={100} width={100} alt="" /></Link>
          <Navbar.Toggle aria-controls="navbarScroll" />

          <Navbar.Collapse id="navbarScroll">

            <Form className="d-flex">
            <Form.Control onChange={serachInp}  type="search" placeholder="Search" className="me-2" style={{ width: 400, marginLeft: 60 }} aria-label="Search" />
              <Button variant="outline-info" value={searchQuery} onClick={handleSearchInputChange}>Search</Button>
            </Form>

            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px", marginLeft: "0px" }} navbarScroll>
              <Nav.Link style={{ fontWeight: 'bold' }}  onClick={() => (nav('/'))}>Home</Nav.Link>
              <BodyScroll />

              {signIn.length === 0 ? (

                <Nav.Link style={{ fontWeight: 'bold' }}  onClick={() => nav('/signIn')}>LogIn</Nav.Link>

              ) : (
                <Nav.Link style={{ fontWeight: 'bold' }} onClick={logoutBtn} href="#action1">Logout</Nav.Link>
              )
              }
              <Nav.Link style={{ fontWeight: 'bold' }} >Support</Nav.Link>
              <Nav.Link style={{ fontWeight: 'bold' }}  onClick={() => (nav('/MyWishList'))}>Wishlist</Nav.Link>
              {cartProducts.length === 0 ? (
                <Nav.Link style={{ fontWeight: 'bold' }} onClick={() => (nav('/AddToCart'))}>Cart</Nav.Link>
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

      <hr style={{ widows: '100%' }} />

      <div className="centerc1">

        <div className="imagec1">
          <img src="https://dms.mydukaan.io/original/webp/media/e0b7acf0-c044-48b5-ac57-cc7e0bffbd78.blob" alt="" />
        </div>
        <div className="imageTitlec1"><p>Special Editions<h5 >({specialEditions.length} items)</h5></p></div>
        <div><p style={{ color: 'grey', letterSpacing: 1 }}><Link to={'/'} style={{ textDecoration: 'none', color: 'black' }}>Home</Link> &nbsp;/ &nbsp;Special Editions</p></div>

        <div className="center-items1">

          <div className="amain-card1">

            {
              specialEditions.map((data, index) => (
                <div class="card" style={{ height: '600px', width: '400px', marginBottom: '40px', border: '10px bold black' }}>
                  <Link>
                  <CiHeart
                    onClick={() => clicksForWish(data)}
                    style={{
                      height: '35px',
                      width: '35px',
                      marginLeft: '360px',
                      color: likeProducts.includes(data) ? 'red' : 'green'
                    }}
                  />
                </Link>
                  <div style={{ overflow: 'hidden' }} className="acard-image">
                    <img class="card-img-top" onClick={() => displayProdDetails(data)} src={data.image} alt="Card image cap" />
                  </div>
                  <div class="card-body" style={{ width: '100%' }}>
                    <h5 class="card-title card_text product-title medium t-16_24 mt-15_20 mb8 lineClamp dkn-product-card-name" style={{ fontSize: '16px', lineHeight: '24px' }}>{data.name}</h5>
                    <p class="card-text">₹{data.price}</p>
                    <Button className="acard-button" onClick={() => clicksForAddCart(data)}>
                    {
                          cartProducts.includes(data)?"Added":"Add to cart"
                        }
                    </Button>
                  </div>
                </div>
              ))
            }

          </div>

        </div>

      </div>

      <hr style={{ widows: '100%' }} />

      <div className="footer1" >
        <div style={{ textAlign: 'center', color: 'black' }}><p style={{ fontSize: '20px', letterSpacing: '2px' }}>FOLLOW US</p></div>
        <div style={{ textAlign: 'center' }}><img className="footer-logo" src={fbIcons} alt="" /><img className="footer-logo" alt="" src={instaIcons} /></div><br />
        <div style={{ paddingLeft: '85px' }}> <hr style={{ width: '1300px' }} /> </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div><p style={{ letterSpacing: '2px' }}>STORE DETAILS</p></div>
          <div><p style={{ fontWeight: 'bold' }}>Sports Jersey Hub</p></div>
          <div><p>Kochi, Kerala, India</p></div>
          <div style={{ paddingLeft: '0px' }}> <hr style={{ width: '1300px' }} /> </div>
          <div><p style={{ letterSpacing: '1px' }}>QUICK LINKS</p></div>
          <div><Link className="footer-links">Help & Support</Link> <Link className="footer-links">FAQs</Link> <Link className="footer-links">Store Policy</Link></div>
        </div>
      </div>

    </div>
  );
}