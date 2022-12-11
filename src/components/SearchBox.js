import React from "react";
import { Col, Form, FormControl, FormGroup } from "react-bootstrap";

const SearchBox = ()=>{
    return(
        <>
        <Form>
            <FormGroup controlId="formBasicSearch">
                <Col xs={10}>
                    <FormControl type="text"
placeholder="Enter movie title"/>
            </Col>
            </FormGroup>
            </Form>
            </>
    )
}

export default SearchBox;