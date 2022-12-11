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
  const navigate = useNavigate();

   const handleSubmit = (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();
     // set configurations
    const configuration = {
      method: "post",
      url: "https://real-flannel-shirt-bee.cyclic.app/user/login",
      data: {
        email:email,
        password: password
      },
    };

    axios(configuration)
    .then((result)=>{
        setLogin(true);
        // set the cookie
        cookies.set("TOKEN", result.data.token, { path: "/", secure: true, sameSite: 'none'});
        
          // console.log(result.data)
        navigate("/home");
           // redirect user to the home page
        // setStatus(result.data.msg);
        // setTimeout(4000);
    })
    .catch((error) => {
        setLogin(false);
        console.log(error);
      });
  }

    return(
        <>
        <Navbar/>
        <Container>
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

        {/* submit button */}
        <Button variant="primary" type="submit" onSubmit={(e)=>handleSubmit(e)}>
          Login
        </Button>

<a href="/signup">Register</a>

      {/* display success message */}
      {login ? (
          <p className="text-success">You Are Logged in Successfully</p>
        ) : (
          <p className="text-danger">You Are Not Logged in</p>
        )}

      </Form>
      </Row>
      </Container>
        </>
    )

}