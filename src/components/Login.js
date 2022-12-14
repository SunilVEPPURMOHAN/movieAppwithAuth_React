import React, { useState } from "react";
import { Form, Button, Container, Row } from "react-bootstrap";
import axios from "axios";
import Cookies from "universal-cookie";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const cookies = new Cookies();


export default function Login(){

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  const [message,setMessage] = useState("Please key in details to login")
  const navigate = useNavigate();

   const handleSubmit = (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();
     // set configurations
     
// http://localhost:8080/user/login
// https://real-flannel-shirt-bee.cyclic.app/user/login"

    const configuration = {
      method: "post",
      url: "http://localhost:8080/user/login",
      data: {
        email:email,
        password: password
      },
    };

    axios(configuration)
    .then((result)=>{
        setLogin(true);
        console.log(result);
        // set the cookie
        cookies.set("TOKEN", result.data.token, { path: "/", secure: true, sameSite: 'none'})
        setMessage("Login Sucessful");
        navigate("/home");
           // redirect user to the home page
        // setStatus(result.data.msg);
        // setTimeout(4000);
    })
    .catch((error) => {
        setLogin(false);
setMessage("Please enter proper details")      });
  }


    return(

      
        <div>
        <Navbar/>
        <Container className="justify-content-center">
          <Row>
      <Form onSubmit={(e)=>handleSubmit(e)}>
        {/* email */}
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" value={email} placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>

        {/* password */}
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
      <p></p>
        {/* submit button */}
        <Button variant="primary" type="submit" onSubmit={(e)=>handleSubmit(e)}>
          Login
        </Button>

      {/* display success message */}
      {login ? (
          <p className="text-success">{message}</p>
        ) : (
          <p className="text-danger">{message}</p>
        )}

      </Form>
      </Row>
      </Container></div>

    )

}