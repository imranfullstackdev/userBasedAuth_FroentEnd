import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./Context";

const Login = () => {
  const { state, dispatch } = useContext(UserContext);
  const [log, SetLog] = useState({
    mobilenumber: "",
  });
  const { mobilenumber } = log;
  const navigate = useNavigate();
  const changeHandler = (e) => {
    SetLog({ ...log, [e.target.name]: e.target.value });
  };
  //   login User
  const submitHandler = async (e) => {
    e.preventDefault();
    const body = log;
    try {
      const loginUser = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const res = await loginUser.json();
      if (loginUser.status === 200) {
        alert("Login Sucessfully");
        localStorage.setItem("Token", res.token);
        localStorage.setItem("ROLE", res.role);
        dispatch({
          type: "role",
          payload: JSON.parse(localStorage.getItem("ROLE")),
        });
        navigate("/View");
      } else {
        localStorage.clear();
        SetLog({ mobilenumber: "" });
        console.log("else", log);
        alert("Invalid mobile number");
        navigate("/");
      }

      console.log(res.user);
      console.log(loginUser);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className=" d-flex justify-content-center align-it em-center">
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>MOBILE NUMBER</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Password"
              name="mobilenumber"
              value={mobilenumber}
              min={"0"}
              onChange={changeHandler}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Login;
