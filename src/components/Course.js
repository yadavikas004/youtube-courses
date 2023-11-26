import React from "react";
import {
    Card,
    CardBody,
    CardSubtitle,
    // CardFooter,
    CardText,
    Button,
    Container,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Course = ({course}) => {
    return(
        <div className=" d-flex justify-content-center">
            <Card>
            <CardBody className="text-center">
                <CardSubtitle className="font-weight-bold">{course.title}</CardSubtitle>
                <CardText>{course.description}</CardText>
                <Container className="text-center button-container">
                    <Button color="danger">Delete</Button>
                    <Button color="primary">Update</Button>
                </Container>
            </CardBody>
        </Card>
        </div>
        
    );
}

export default Course;