import React, { useEffect, useState } from "react";
import Course from "./Course";
// import { Button } from "reactstrap";
import BASE_URL from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";

const Allcourses = () => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        // alert("testing");
        document.title = "All Courses";
    }, []);

    //function to call url
    const getAllCoursesFromServer = () => {
        axios.get(`${BASE_URL}/courses`).then(
            (response) => {
                // console.log(response);
                console.log(response.data);
                toast.success("course has been reloaded", {
                    position: "bottom-center",
                });
                setCourses(response.data);
            },
            (error) => {
                console.log(error);
                toast.error("something went wrong", {
                    position: "bottom-center",
                });
            }
        )
    }

    useEffect(() => {
        getAllCoursesFromServer();
    }, []);

    // const [courses] = useState([
    //     {title:"Java Course", description: "This is Java Learning Course"},
    //     {title:"Python Course", description: "This is Python Learning Course"},
    //     {title:"Nodejs Course", description: "This is Nodejs Learning Course"}
    // ])

    return (
        <div>
            <h1 className="text-center">All Course</h1>
            <p className="text-center">List of courses are as follows</p>
            {courses.length > 0 ? (
                courses.map((course) => (
                    <Course key={course.id} course={course} />
                ))
            ) : (
                <p>No courses</p>
            )}
        </div>
    );
}

export default Allcourses;