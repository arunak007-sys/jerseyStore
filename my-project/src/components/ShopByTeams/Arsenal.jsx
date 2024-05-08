import React, { useContext, useState,useEffect } from "react";
import "../Teams/InterMiami.css"
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import lionImage from '../images/ar7.jpeg'
import { myContext } from "../context/context";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import instaIcons from '../images/instagramIcons.png'
import fbIcons from '../images/facebookIcons.png'
import BodyScroll from "../BodyScroll/BodyScroll";
import { CiHeart } from "react-icons/ci";

export default function Arsenal() {

    const nav = useNavigate()
    const { arsenal,setArsenal,likeProducts, setLikeProducts, cartProducts, setCartProducts, myJersey, prodDisp, setProdDdisp, setSearchQuery, signIn, setSignIn,
      searchItem,setItemSearch,searchQuery,SetSearchItem  } = useContext(myContext)

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


    useEffect(() => {
        handleShopByArsenal()
      }, [])
    
      function handleShopByArsenal() {
    
        setArsenal(myJersey.filter(data => data.specialCategory == "Arsenal"))
      }

      function clicksForWish(products) {
        console.log("wish btn clicked");
        if (signIn.length === 0) {
          alert("SignIn First")
        }
        else {
          if (likeProducts.includes(products)) {
            alert("Item Removed From Wish List")
      
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
    return (
        <div className="mainc">

            <Nav className="top-maincd">
                <p className="topmain-textc">Now Enjoy All India Free Shipping On Every Order</p>
            </Nav>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Link to={'/'}><img className="logo" onClick={() => (nav('/'))} src={lionImage} height={100} width={100} alt="" /></Link>
                    {/* <Navbar.Brand href="#" className="navBrand">SPORTS HUB</Navbar.Brand> */}
                    <Navbar.Toggle aria-controls="navbarScroll" />

                    <Navbar.Collapse id="navbarScroll">

                    <Form className="d-flex">
                    <Form.Control onChange={serachInp}  type="search" placeholder="Search" className="me-2" style={{ width: 400, marginLeft: 60 }} aria-label="Search" />
              <Button variant="outline-info" value={searchQuery} onClick={handleSearchInputChange}>Search</Button>
            </Form>

            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px", marginLeft: "0px" }} navbarScroll>
              <Nav.Link style={{ fontWeight: 'bold' }}  onClick={() => (nav('/MyStore'))}>My Store</Nav.Link>
           <BodyScroll/>
           {signIn.length === 0 ? (

<Nav.Link style={{ fontWeight: 'bold' }}  onClick={() => nav('/signIn')}>LogIn</Nav.Link>

) : (
<Nav.Link style={{ fontWeight: 'bold' }} onClick={logoutBtn} href="#action1">Logout</Nav.Link>
)
}
<Nav.Link style={{ fontWeight: 'bold' }}  >Support</Nav.Link>
<Nav.Link style={{ fontWeight: 'bold' }}  onClick={() => (nav('/MyWishList'))}>Wishlist</Nav.Link>
{cartProducts.length === 0 ? (
<Nav.Link style={{ fontWeight: 'bold' }}  onClick={() => (nav('/AddToCart'))}>Cart</Nav.Link>
) : (
<>
  <Nav.Link style={{ fontWeight: 'bold' }} onClick={() => (nav('/AddToCart'))}>Cart</Nav.Link>

  <button className="cart-count">{cartProducts.length}</button>

</>
)
}
<Nav.Link style={{ fontWeight: 'bold' }}>Call Us : +91-9746726000</Nav.Link>
              
            </Nav>

          </Navbar.Collapse>

        </Container>
      </Navbar>

            <hr style={{ widows: '100%' }} />

            <div className="centerc5">
                <div className="imagec">
                    <img src="https://dms.mydukaan.io/original/webp/media/90a01f65-b4ac-4f3f-9903-2f8cbf6f0c50.blob" alt="" />
                </div>
                <div className="imageTitlec"><p>Shop By Teams<h5 >({arsenal.length} items)</h5></p></div>
                <div><p style={{ color: 'grey', letterSpacing: 1 }}><Link to={'/'} style={{ textDecoration: 'none', color: 'black' }}>Home</Link> &nbsp;/ &nbsp;Arsenal</p></div>

                <div className="cardscd">
                    <div className="card-images-shopByteams" >
                       <Link to={'/InterMiami'}><img src="https://dukaan.b-cdn.net/500x500/webp/media/390e4bfa-a7e7-46c3-844a-8fd0e3b3b12b.png" captio alt="Inter Miami" /></Link> 
                    </div>
                    <div className="card-images-shopByteams">
                       <Link to={'/RealMadrid'}><img src="https://dukaan.b-cdn.net/500x500/webp/media/f365e11f-e6ab-4c07-853c-344cf96aedd8.png" alt="" /></Link>
                    </div>
                    <div className="card-images-shopByteams">
                        <Link to={'/Arsenal'}><img src="https://dukaan.b-cdn.net/500x500/webp/media/6fd94f41-d702-4b50-97dc-e02722e1e9a3.png" alt="" /></Link>
                    </div>
                    <div className="card-images-shopByteams">
                        <Link to={'/ManchesterUnited'}><img src="https://dukaan.b-cdn.net/500x500/webp/media/c69c2fbf-8c64-4a51-9062-6ccbe0c49688.png" alt="" /></Link>
                    </div>
                    <div className="card-images-shopByteams">
                        <Link to={'/Liverpool'}><img src="https://dukaan.b-cdn.net/500x500/webp/media/943eb4ab-81ae-4d2f-9aaf-80c90f0e0a62.png" alt="" /></Link>
                    </div>
                    <div className="card-images-shopByteams">
                        <Link to={'/Bayern'}><img src="https://dukaan.b-cdn.net/500x500/webp/media/b64125e0-7e36-405e-bd76-465e0d96b007.png" alt="" /></Link>
                    </div>
                    <div className="card-images-shopByteams">
                        <Link to={'/Alnassar'}><img src="https://dukaan.b-cdn.net/500x500/webp/media/75a8a48c-e82a-4878-9e94-958282ea6d2c.png" alt="" /></Link>
                    </div>
                    <div className="card-images-shopByteams">
                        <Link to={'/Barcelona'}><img src="https://dukaan.b-cdn.net/500x500/webp/media/62d899ff-1ef1-496a-8411-f182c8839fdb.png" alt="" /></Link>
                    </div>
                </div>

                <div className="center-items5" >
          <div className="amain-card05">

            {
              arsenal.map((data, index) => (
                <div className="card5" class="card" style={{marginBottom:'40px', height: '600px', width: '400px' }}>
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
    )
}