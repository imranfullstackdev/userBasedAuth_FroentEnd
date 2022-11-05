import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const User = () => {
  const [auser, setAuser] = useState([]);
  const navigate=useNavigate()
  const user = async () => {
    if(!localStorage.getItem('Token')){
      
      navigate('/')
    }else{
    const getUSER = await fetch(`http://localhost:8000/user`, {
      method: "get",
      headers: {
        autherization: localStorage.getItem("Token"),
      },
    });
    const res = await getUSER.json();
    setAuser(res.user[0]);
  }
  };
  useEffect(() => {
    user();
  }, []);
  console.log("userdata", auser);
  return (
    <>
      <h3>employeeid :{auser.employeeid}</h3>
      <h3>employeename :{auser.employeename}</h3>
      <h3>mobilenumber :{auser.mobilenumber}</h3>
      <h3>amobilenumber :{auser.amobilenumber}</h3>
      <h3>emailadddress: :{auser.emailadddress}</h3>
      <h3>adharcard :{auser.adharcard}</h3>
      <h3>bankbranch :{auser.bankbranch}</h3>
      <h3>ifsc :{auser.ifsc}</h3>
      <h3>uan :{auser.uan}</h3>
      <h3>pincode :{auser.pincode}</h3>
      <h3>pan :{auser.pan}</h3>
      <h3>address1 :{auser.address1}</h3>
      <h3>address2 :{auser.address2}</h3>
      <h3>district :{auser.district}</h3>
      <h3>state :{auser.state}</h3>
    </>
  );
};

export default User;
