import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import BASE_URL from "../api/bootapi";
import { toast } from "react-toastify";

const Addcourse = () => {
    useEffect(() => {
        document.title = "Add Course";
    }, []);

    const [course, setCourse] = useState({});

    // form handler function
    const handleForm = (e) => {
        e.preventDefault();
        console.log(course);

        // Check if the required fields are filled before making the API call
        if (course.id && course.title && course.description) {
            // Call the function to post data to the server
            postDataServer(course);
        } else {
            // Display an error toast if any of the required fields is missing
            toast.error("Please fill in all the required fields.");
        }
    };

    // creating function to post on server
    const postDataServer = (data) => {
        axios.post(`${BASE_URL}/courses`, data).then(
            (response) => {
                console.log(response);
                console.log("success");
                toast.success("Course added successfully");
                // Clear the form after successful submission
                setCourse({ id: "", title: "", description: "" });
            },
            (error) => {
                console.log(error);
                console.log("error");
                toast.error("Error! Something went wrong");
            }
        );
    };

    return (
        <Fragment>
            <h1 className="text-center my-3">Fill Course Detail</h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <label htmlFor="userId">Course Id</label>
                    <Input
                        type="text"
                        placeholder="Enter Here"
                        name="userId"
                        id="userId"
                        onChange={(e) => {
                            setCourse({ ...course, id: e.target.value });
                        }}
                    />
                </FormGroup>

                <FormGroup>
                    <label htmlFor="title">Course Title</label>
                    <Input
                        type="text"
                        placeholder="Enter Title Here"
                        id="title"
                        onChange={(e) => {
                            setCourse({ ...course, title: e.target.value });
                        }}
                    />
                </FormGroup>

                <FormGroup>
                    <label htmlFor="description">Course Description</label>
                    <Input
                        type="textarea"
                        placeholder="Enter Description Here"
                        id="description"
                        style={{ height: 200 }}
                        onChange={(e) => {
                            setCourse({ ...course, description: e.target.value });
                        }}
                    />
                </FormGroup>

                <Container className="text-center">
                    <Button type="submit" color="success">
                        Add Course
                    </Button>{" "}
                    <Button
                        type="reset"
                        color="warning"
                        onClick={() => {
                            setCourse({ id: "", title: "", description: "" });
                        }}
                    >
                        Clear
                    </Button>{" "}
                </Container>
            </Form>
        </Fragment>
    );
};

export default Addcourse;
