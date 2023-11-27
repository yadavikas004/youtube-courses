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
import axios from "axios";
import BASE_URL from "../api/bootapi";
import { toast } from "react-toastify";

const Course = ({course,update}) => {


    const deleteCourse = (id) => {
        axios.delete(`${BASE_URL}/courses/${id}`).then(
            (response) => {
                toast.success("Course Deleted");
                update(id);
            },
            (error) => {
                toast.error("course not deleted!!!")
            }
        )
    }
    return (
        <Card className="text-center">
            <CardBody>
                <CardSubtitle className="font-weight-bold">{course.title}</CardSubtitle>
                <CardText>{course.description}</CardText>
                <Container className="text-center">
                    <Button color="danger" onClick={() => {
                        deleteCourse(course.id);
                    }}>Delete</Button>{' '}
                    <Button color="primary">Update</Button>{' '}
                </Container>
            </CardBody>
        </Card>
    );
}

export default Course;