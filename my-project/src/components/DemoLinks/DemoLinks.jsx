import React, { useContext } from "react";
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';
import { myContext } from "../context/context";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import '../DemoLinks/DemoLinks.css'
export default function DemoLinks() {
  const { imageLink, setImageLink, myJersey, setMyJersey } = useContext(myContext);
  return (
    <div className="mainsa">
      {
        myJersey.map((data,index) => (

      <div className="main-cardsa">
        
        <div class="carda" > 
        <div className="card-imagesa">
          <img class="card-img-topa" src={data.image} alt="Card image cap" />
          </div>
          <div class="card-bodya" style={{textAlign:"center"}}>
            <h5 class="card-titlea">{data.name}</h5>
            <p class="card-texta">{data.price}</p>
            <a href="#" class="btn btn-dark" style={{width:"100%"}}>Add To Cart</a>
          </div>
      
        </div>
      </div>

        ))
      }
    </div>
  );
}
