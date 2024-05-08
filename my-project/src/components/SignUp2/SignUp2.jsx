// import React from "react";
// import "../SignUp/SignUp.css";
// import '../SignUp2/SignUp2.css'
// import lionImage from "../images/ar7.jpeg";
// import { Link, useNavigate } from "react-router-dom";
// import { useContext } from "react";
// import { myContext } from "../context/context";

// export default function SignUp2() {
//   const nav = useNavigate();

//   const { userName, setUserName, email, setEmail, password, setPassword, confPassword, setConfPassword, signsUps, setSignsUps
//   } = useContext(myContext)


//   function inpUserName(a) {
//     setUserName(a.target.value)
//   }
//   function inpEmail(b) {
//     setEmail(b.target.value)
//   }
//   function inpPassw(c) {
//     setPassword(c.target.value)
//   }
//   function inpConfPassw(d) {
//     setConfPassword(d.target.value)
//   }
//   function signUpRead(){
//     const userData = {userName,email,password,confPassword}
//     setSignsUps([...signsUps,userData])
//     console.log("first",signsUps)
//   }
//   return (
//     <div className="mainb">
//       <div className="signIn-logo">
//         <Link to={'/'}><img src={lionImage} height={100} width={100} alt="" /></Link>
//       </div>

//       <div className="SignUp-center" style={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

//         <div className="form-center">

//           <div><h2 style={{color:'white'}}>Sign Up</h2></div>
//           <div><label className="lblstyle">User Name</label></div>
//           <div><input type="text" onChange={inpUserName} placeholder="Enter username..."/></div>
//           <div><label className="lblstyle">Email</label></div>
//           <div><input type="email" onChange={inpEmail} placeholder="Enter email..."/></div>
//           <div><label className="lblstyle">Password</label></div>
//           <div><input type="password" onChange={inpPassw} placeholder="Enter password..."/></div>
//           <div><label className="lblstyle">Confirm Password</label></div>
//           <div><input type="password" onChange={inpConfPassw} placeholder="Enter password..."/></div>
//           <div><button onClick={()=>signUpRead()}>Sign Up</button></div>
          

//         </div>

//       </div>

//     </div>
//   );
// }
import React, { useState } from "react";
export default function SignUp2(){
  const [username,setUserName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [confPassword,setConfPassword] = useState("")
  const [array,setArray] = useState([])
  function inpUserName(a) {
    setUserName(a.target.value)
  }
  function inpEmail(b) {
    setEmail(b.target.value)
  }
  function inpPassw(c) {
    setPassword(c.target.value)
  }
  function inpConfPassw(d) {
    setConfPassword(d.target.value)
  }
  function register(){
    setArray([...array,{username,email,password,confPassword}])
    console.log("first",array)
  }
  return(
    <div>
      <div><h2>SignUp</h2></div>
      <div><input type="text" onChange={inpUserName} placeholder="Enter userName" /></div>
      <div><input type="email" onChange={inpEmail} placeholder="Enter email" /></div>
      <div><input type="password" onChange={inpPassw} placeholder="Enter password"/></div>
      <div><input type="password" onChange={inpConfPassw} placeholder="confirm password" /></div>
      <button onClick={register}>Sign Up</button>
    </div>
  )
}
