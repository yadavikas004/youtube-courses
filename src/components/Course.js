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
    return (
        <Card className="text-center">
            <CardBody>
                <CardSubtitle className="font-weight-bold">{course.title}</CardSubtitle>
                <CardText>{course.description}</CardText>
                <Container className="text-center">
                    <Button color="danger">Delete</Button>{' '}
                    <Button color="primary">Update</Button>{' '}
                </Container>
            </CardBody>
        </Card>
    );
}

export default Course;