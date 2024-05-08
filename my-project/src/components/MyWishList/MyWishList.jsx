import React, { useContext } from "react";
import '../MyWishList/MyWishList.css'
import Nav from "react-bootstrap/Nav";
import lionImage from "../images/ar7.jpeg";
import { Link, useNavigate } from "react-router-dom";
import { myContext } from '../context/context';

export default function MyWishList() {
    const nav = useNavigate()
    const { likeProducts, setLikeProducts
    } = useContext(myContext)
    console.log("my wish list",likeProducts)
    function removeWishList(index){
        setLikeProducts(likeProducts.filter((data,i) => i!==index))
    }
    
    return (
        <div className="mainf">

            <div className="topf">
                <Nav className="top-mainf">
                    <p className="topmain-textf">Now Enjoy All India Free Shipping On Every Order</p>
                </Nav>
                <div className="signIn-logof">
                    <Link to={'/'}><img src={lionImage} height={100} width={100} alt="" /></Link>
                </div>
            </div>
            <hr style={{ widows: '100%' }} />

            <div className="centerf">
            {likeProducts == "" ? (
                    <div className="centerf1">
                        <div className="center-textf1"><h4>Your wishlist is empty</h4></div>
                        <div className="center-textf2" style={{ marginBottom: '25px' }}><p>Looks like you haven't made your choice yet..</p></div>
                        <button className="btnf" onClick={() => nav('/MyStore')}>Back to Store</button>
                    </div>
                ) : (
                    <div className="centerf2">

                                <div className="amain-card1a">
                                {
                                  likeProducts.map((data, index) => (
                                    <div class="card1a">
                                      
                                      <div className="card1a-left">
                                      <img src={data.image} alt="" style={{height:'260px',width:'100%'}}/>
                                      </div>
                                      <div className="card1a-right">
                                        <div className="removeButton"><Link style={{textDecoration:'none'}}><p style={{fontSize:'16px',color:'grey',letterSpacing:'1px'}} onClick={()=>removeWishList(index)}>REMOVE</p></Link></div>
                                        <div className="data11"><h2>{data.name}</h2></div>
                                        <div className="data12"><h2>{data.price}</h2></div>
                                      </div>

                                    </div>
                                  ))
                                }
                              </div>   

                            

                    </div>
                )
                }
            </div>
        </div>
    )
}