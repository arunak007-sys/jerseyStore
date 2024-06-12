import React, { useState } from "react";
import "../SignIn/SignIn.css";
import lionImage from "../images/ar7.jpeg";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { myContext } from "../context/context";
import toast from "react-hot-toast";
export default function SignIn() {
  const nav = useNavigate();


  const { email, signsUps, newEmail, setNewEmail, newPassword, setNewPassword, signIn, setSignIn, bannedUser, setBannedUser
  } = useContext(myContext)

  function inpEmails(a) {
    setNewEmail(a.target.value)
  }
  function InpPasswords(b) {
    setNewPassword(b.target.value)
  }
  function userSubmit() {
    const logged = signsUps.find((userD) => userD.email === newEmail && userD.password === newPassword)
    if (logged) {

      const banned = bannedUser.find((userD) => userD.email === newEmail && userD.password === newPassword)
      if (banned) {
        alert("You are banned, you cannot logIn")
      }
      else {
        toast.success("Login successfull !!!,", email)
        setSignIn([...signIn, { newEmail, newPassword }])
        setNewEmail(null)
        setNewPassword(null)
        nav('/')
        // console.log("first",signIn)
      }
    }
    else {
      toast.error("Invalid email adrress or password")

    }
    // console.log("UserData",signsUps)
  }
  console.log("first", bannedUser)
  return (
    <div className="mainb">
      <div className="signIn-logo">
        <Link to={'/'}><img src={lionImage} height={100} width={100} alt="" /></Link>
      </div>
      <div className="signIn-centerb">
        <div className="form-mainb">
          <div className="form-groupsb">
            <h2 className="form-headerb">Sign In</h2>
            <div>
              <label className="signIn-emailb">Email</label>
            </div>
            <div>
              <input type="email" value={newEmail} onChange={inpEmails} placeholder="Enter email..." />
              <br />
              <br />
            </div>
            <div>
              <label className="signIn-passwordb">Password</label>
            </div>
            <div>
              <input value={newPassword} type="password" onChange={InpPasswords} placeholder="Enter password..." />
              <br />
              <br />
            </div>
            <p className="form-parab">
              By continuing, I agree to <a href=""> Terms of Use</a> &{" "}
              <a href="#">Privacy Policy</a>
            </p>
            <div>
              <button onClick={userSubmit}>Sign In</button>
            </div>
            <div style={{ marginTop: "10px" }}>
              <Link to={'/SignUp'}>
                <p style={{ color: "white", fontSize: "14px" }}>
                  New User?, Create an account
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
