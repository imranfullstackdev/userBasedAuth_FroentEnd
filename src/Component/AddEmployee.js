import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/esm/Col";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  const [addUser, SetAdduser] = useState({
    employeeid: "",
    employeeName: "",
    mobilenumber: "",
    Amobilenumber: "",
    emailadddress: "",
    adharcard: "",
    bankname: "",
    bankbranch: "",
    ifsc: "",
    uan: "",
    pan: "",
  });
  const {
    employeeid,
    employeeName,
    mobilenumber,
    Amobilenumber,
    emailadddress,
    adharcard,
    bankname,
    bankbranch,
    ifsc,
    uan,
    pincode,
    pan,
    address1,
    address2,
    district,
    state,
  } = addUser;
  const navigate = useNavigate();

  const changeHandler = (e) => {
    SetAdduser({ ...addUser, [e.target.name]: e.target.value });
  };

  // submit Handler
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(addUser);
    try {
      const body = addUser;
      console.log(body);
      const AddUser = await fetch(`http://localhost:8000/addEmployee`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const res = await AddUser.json();
      if (AddUser.status == 200) {
        alert(`welcome ${addUser.employeeName}`);
        navigate("/View");
      } else {
        alert(res.err);
        navigate("/");
      }
      console.log("res", res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Form onSubmit={submitHandler}>
        <Row className="mb-3">
          <Form.Group
            as={Col}
            md="4"
            className="mb-3"
            controlId="formBasicEmail"
          >
            <Form.Label>Employee Id:</Form.Label>
            <Form.Control
              type="tel"
              name="employeeid"
              value={employeeid}
              onChange={changeHandler}
              placeholder="Enter employeeid"
            />
          </Form.Group>
          <Form.Group
            as={Col}
            md="4"
            className="mb-3"
            controlId="formBasicEmail"
          >
            <Form.Label>Employee Name:</Form.Label>
            <Form.Control
              type="text"
              name="employeeName"
              value={employeeName}
              onChange={changeHandler}
              placeholder="Enter employeeName"
            />
          </Form.Group>
          <Form.Group
            as={Col}
            md="4"
            className="mb-3"
            controlId="formBasicEmail"
          >
            <Form.Label>Mobile Number:</Form.Label>
            <Form.Control
              type="tel"
              name="mobilenumber"
              value={mobilenumber}
              onChange={changeHandler}
              placeholder="Enter mobilenumber"
            />
          </Form.Group>
          <Form.Group
            as={Col}
            md="4"
            className="mb-3"
            controlId="formBasicEmail"
          >
            <Form.Label>Alternate MobileNumber:</Form.Label>
            <Form.Control
              type="tel"
              name="Amobilenumber"
              value={Amobilenumber}
              onChange={changeHandler}
              placeholder="Enter Alternate MobileNumber"
            />
          </Form.Group>
          <Form.Group
            as={Col}
            md="4"
            className="mb-3"
            controlId="formBasicEmail"
          >
            <Form.Label>Email Address:</Form.Label>
            <Form.Control
              type="tel"
              name="emailadddress"
              value={emailadddress}
              onChange={changeHandler}
              placeholder="Enter Email Address"
            />
          </Form.Group>
          {/*  */}
          <Form.Group
            as={Col}
            md="4"
            className="mb-3"
            controlId="formBasicEmail"
          >
            <Form.Label>PinCode:</Form.Label>
            <Form.Control
              type="tel"
              name="pincode"
              value={pincode}
              onChange={changeHandler}
              placeholder="Enter pincode"
            />
          </Form.Group>
          <Form.Group
            as={Col}
            md="4"
            className="mb-3"
            controlId="formBasicEmail"
          >
            <Form.Label>Address1:</Form.Label>
            <Form.Control
              type="tel"
              name="address1"
              value={address1}
              onChange={changeHandler}
              placeholder="Enter address1"
            />
          </Form.Group>{" "}
          <Form.Group
            as={Col}
            md="4"
            className="mb-3"
            controlId="formBasicEmail"
          >
            <Form.Label>Alternate Address:</Form.Label>
            <Form.Control
              type="tel"
              name="address2"
              value={address2}
              onChange={changeHandler}
              placeholder="Enter  Alternate Address"
            />
          </Form.Group>
          <Form.Group
            as={Col}
            md="4"
            className="mb-3"
            controlId="formBasicEmail"
          >
            <Form.Label>pan</Form.Label>
            <Form.Control
              type="text"
              name="pan"
              value={pan}
              onChange={changeHandler}
              placeholder="Enter  Pan Number"
            />
          </Form.Group>
          {/*  */}
        </Row>
        <Row>
          <Form.Group
            as={Col}
            md="4"
            className="mb-3"
            controlId="formBasicEmail"
          >
            <Form.Label>Adhar Number:</Form.Label>
            <Form.Control
              type="tel"
              name="adharcard"
              value={adharcard}
              onChange={changeHandler}
              placeholder="Enter adharcard number"
            />
          </Form.Group>
          <Form.Group
            as={Col}
            md="4"
            className="mb-3"
            controlId="formBasicEmail"
          >
            <Form.Label>Bank Name:</Form.Label>
            <Form.Control
              type="tel"
              name="bankname"
              value={bankname}
              onChange={changeHandler}
              placeholder="Enter bankname"
            />
          </Form.Group>
          <Form.Group
            as={Col}
            md="4"
            className="mb-3"
            controlId="formBasicEmail"
          >
            <Form.Label>Bank Branch</Form.Label>
            <Form.Control
              type="tel"
              name="bankbranch"
              value={bankbranch}
              onChange={changeHandler}
              placeholder="Enter bankbranch"
            />
          </Form.Group>
          <Form.Group
            as={Col}
            md="4"
            className="mb-3"
            controlId="formBasicEmail"
          >
            <Form.Label>IFSC CODE</Form.Label>
            <Form.Control
              type="tel"
              name="ifsc"
              value={ifsc}
              onChange={changeHandler}
              placeholder="Enter ifsc"
            />
          </Form.Group>
          <Form.Group
            as={Col}
            md="4"
            className="mb-3"
            controlId="formBasicEmail"
          >
            <Form.Label>UAN NUMBER:</Form.Label>
            <Form.Control
              type="tel"
              name="uan"
              value={uan}
              onChange={changeHandler}
              placeholder="Enter uan"
            />
          </Form.Group>
          <Form.Group
            as={Col}
            md="4"
            className="mb-3"
            controlId="formBasicEmail"
          >
            <Form.Label>District:</Form.Label>
            <Form.Control
              type="tel"
              name="district"
              value={district}
              onChange={changeHandler}
              placeholder="Enter district"
            />
          </Form.Group>
          <Form.Group
            as={Col}
            md="4"
            className="mb-3"
            controlId="formBasicEmail"
          >
            <Form.Label>State:</Form.Label>
            <Form.Control
              type="tel"
              name="state"
              value={state}
              onChange={changeHandler}
              placeholder="Enter state"
            />
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default AddEmployee;
