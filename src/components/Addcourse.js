import React, { Fragment, useEffect } from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";

const Addcourse = () => {

    useEffect(() =>{
        // alert("testing");
        document.title = "Add Course";
    },[]);

    return (
        <Fragment>
            <h1 className="text-center my-3">Fill Course Detail</h1>
            <Form className="">
                <FormGroup>
                    <label for="userId">Course Id</label>
                    <Input type="text" placeholder="Enter Here" name="userId" id="userId" />
                </FormGroup>
                
                <FormGroup>
                    <label for="title">Course Title</label>
                    <Input type="text" placeholder="Enter Title Here" id="title"/>
                </FormGroup>

                <FormGroup>
                    <label for="description">Course Description</label>
                    <Input type="textarea" placeholder="Enter Description Here" id="description" style={{height:200}}/>
                </FormGroup>  

                <Container className="text-center">
                    <Button color="success">Add Course</Button>{' '}
                    <Button color="warning">Clear</Button>{' '}
                </Container>  
            </Form>
        </Fragment>
    );

}

export default Addcourse;