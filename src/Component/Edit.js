import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/esm/Col";
import { useNavigate, useLocation } from "react-router-dom";

const Edit = () => {
  const location = useLocation();
  const [addUser, SetAdduser] = useState(location.state);
  console.log("locat6ion", location.state);
  const navigate = useNavigate();

  const changeHandler = (e) => {
    SetAdduser({ ...addUser, [e.target.name]: e.target.value });
  };

  // submit Handler
  const editHandler = async (e, id) => {
    e.preventDefault();
    console.log("adduser", addUser);
    try {
      let body =  addUser ;
      console.log("first", body);
      const edituser = await fetch(`http://localhost:8000/updateEmployee/${id}`, {
        method: "put",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      console.log(edituser)
      if(edituser.status===200){
        alert('Data is Updated')
        navigate('/View')
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Form
      onSubmit={(e) => {
        editHandler(e, location.state.id);
      }}
    >
      <Row className="mb-3">
        <Form.Group as={Col} md="4" className="mb-3" controlId="formBasicEmail">
          <Form.Label>Employee Id:</Form.Label>
          <Form.Control
            type="tel"
            name="employeeid"
            defaultValue={location.state.employeeid}
            onChange={changeHandler}
            placeholder="Enter employeeid"
          />
        </Form.Group>
        <Form.Group as={Col} md="4" className="mb-3" controlId="formBasicEmail">
          <Form.Label>Employee Name:</Form.Label>
          <Form.Control
            type="text"
            name="employeeName"
            defaultValue={location.state.employeename}
            onChange={changeHandler}
            placeholder="Enter employeeName"
          />
        </Form.Group>
        <Form.Group as={Col} md="4" className="mb-3" controlId="formBasicEmail">
          <Form.Label>Mobile Number:</Form.Label>
          <Form.Control
            type="tel"
            name="mobilenumber"
            defaultValue={location.state.mobilenumber}
            onChange={changeHandler}
            placeholder="Enter mobilenumber"
          />
        </Form.Group>
        <Form.Group as={Col} md="4" className="mb-3" controlId="formBasicEmail">
          <Form.Label>Alternate MobileNumber:</Form.Label>
          <Form.Control
            type="tel"
            name="Amobilenumber"
            defaultValue={location.state.Amobilenumber}
            onChange={changeHandler}
            placeholder="Enter Alternate MobileNumber"
          />
        </Form.Group>
        <Form.Group as={Col} md="4" className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email Address:</Form.Label>
          <Form.Control
            type="tel"
            name="emailadddress"
            defaultValue={location.state.emailadddress}
            onChange={changeHandler}
            placeholder="Enter Email Address"
          />
        </Form.Group>
        {/*  */}
        <Form.Group as={Col} md="4" className="mb-3" controlId="formBasicEmail">
          <Form.Label>PinCode:</Form.Label>
          <Form.Control
            type="tel"
            name="pincode"
            defaultValue={location.state.pincode}
            onChange={changeHandler}
            placeholder="Enter pincode"
          />
        </Form.Group>
        <Form.Group as={Col} md="4" className="mb-3" controlId="formBasicEmail">
          <Form.Label>Address1:</Form.Label>
          <Form.Control
            type="tel"
            name="address1"
            defaultValue={location.state.address1}
            onChange={changeHandler}
            placeholder="Enter address1"
          />
        </Form.Group>{" "}
        <Form.Group as={Col} md="4" className="mb-3" controlId="formBasicEmail">
          <Form.Label>Alternate Address:</Form.Label>
          <Form.Control
            type="tel"
            name="address2"
            defaultValue={location.state.address2}
            onChange={changeHandler}
            placeholder="Enter  Alternate Address"
          />
        </Form.Group>
        <Form.Group as={Col} md="4" className="mb-3" controlId="formBasicEmail">
          <Form.Label>pan</Form.Label>
          <Form.Control
            type="text"
            name="pan"
            defaultValue={location.state.pan}
            onChange={changeHandler}
            placeholder="Enter  Pan Number"
          />
        </Form.Group>
        {/*  */}
      </Row>
      <Row>
        <Form.Group as={Col} md="4" className="mb-3" controlId="formBasicEmail">
          <Form.Label>Adhar Number:</Form.Label>
          <Form.Control
            type="tel"
            name="adharcard"
            defaultValue={location.state.adharcard}
            onChange={changeHandler}
            placeholder="Enter adharcard number"
          />
        </Form.Group>
        <Form.Group as={Col} md="4" className="mb-3" controlId="formBasicEmail">
          <Form.Label>Bank Name:</Form.Label>
          <Form.Control
            type="tel"
            name="bankname"
            defaultValue={location.state.bankname}
            onChange={changeHandler}
            placeholder="Enter bankname"
          />
        </Form.Group>
        <Form.Group as={Col} md="4" className="mb-3" controlId="formBasicEmail">
          <Form.Label>Bank Branch</Form.Label>
          <Form.Control
            type="tel"
            name="bankbranch"
            defaultValue={location.state.bankbranch}
            onChange={changeHandler}
            placeholder="Enter bankbranch"
          />
        </Form.Group>
        <Form.Group as={Col} md="4" className="mb-3" controlId="formBasicEmail">
          <Form.Label>IFSC CODE</Form.Label>
          <Form.Control
            type="tel"
            name="ifsc"
            defaultValue={location.state.ifsc}
            onChange={changeHandler}
            placeholder="Enter ifsc"
          />
        </Form.Group>
        <Form.Group as={Col} md="4" className="mb-3" controlId="formBasicEmail">
          <Form.Label>UAN NUMBER:</Form.Label>
          <Form.Control
            type="tel"
            name="uan"
            defaultValue={location.state.uan}
            onChange={changeHandler}
            placeholder="Enter uan"
          />
        </Form.Group>
        <Form.Group as={Col} md="4" className="mb-3" controlId="formBasicEmail">
          <Form.Label>District:</Form.Label>
          <Form.Control
            type="tel"
            name="district"
            defaultValue={location.state.district}
            onChange={changeHandler}
            placeholder="Enter district"
          />
        </Form.Group>
        <Form.Group as={Col} md="4" className="mb-3" controlId="formBasicEmail">
          <Form.Label>State:</Form.Label>
          <Form.Control
            type="tel"
            name="state"
            defaultValue={location.state.state}
            onChange={changeHandler}
            placeholder="Enter state"
          />
        </Form.Group>
      </Row>

      <Button variant="primary" type="submit">
        Edit
      </Button>
    </Form>
  );
};

export default Edit;

// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";

// const Edit = (prop) => {
//   console.log("props", prop);
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <>
//       <Button className="variant" onClick={handleShow}>EDIT</Button>
//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Modal heading</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleClose}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// };

// export default Edit;
