import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

const Menu = () => {

    return (
        <ListGroup>
            <ListGroupItem tag="a" href="/" action>Home</ListGroupItem>
            <ListGroupItem tag="a" href="/add-course" action>Add Course</ListGroupItem>
            <ListGroupItem tag="a" href="/view-course" action>View Courses</ListGroupItem>
            <ListGroupItem tag="a" href="#!" action>About</ListGroupItem>
            <ListGroupItem tag="a" href="#!" action>Home</ListGroupItem>
        </ListGroup>
    );
}

export default Menu;