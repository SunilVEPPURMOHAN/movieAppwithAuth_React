import React, { useState } from "react";
import { Form, Button, Container, Row } from "react-bootstrap";
import axios from "axios";


export default function Register(){

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name,setName] = useState("");
  const [register, setRegister] = useState(false);
  const [status,setStatus] = useState("");

   const handleSubmit = (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();
     // set configurations
    const configuration = {
      method: "post",
      url: "http://localhost:8080/user/signup",
      data: {
        email:email,
        password: password,
        name: name,
        admin:"normal"
      },
    };

    axios(configuration)
    .then((result)=>{
        setRegister(true);
        setStatus(result.data.msg);
        // navigate("/");
        
        // setTimeout(4000);
    })
    .catch((error) => {
        setRegister(false);
        console.log(error);
      });
  }


    return(

        <>
        <Container className="justify-content-center">
          <Row>
        <h2>Register</h2>
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

{/* name */}
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" value={name} placeholder="Name" onChange={(e) => setName(e.target.value)} />
        </Form.Group>
        {/* submit button */}
        <Button variant="primary" type="submit" onSubmit={(e)=>handleSubmit(e)}>
          Submit
        </Button>
       

         {/* display success message */}
        {register ? (
          <p className="text-success">{status}</p>
        ) : (
          <p className="text-danger">You Are Not Registered</p>
        )}
<p></p>
<a href="/">Login</a>
      </Form>
      </Row>
      </Container>
        </>
    )

}