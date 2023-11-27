import React, { useEffect, useState } from "react";
import Course from "./Course";
import BASE_URL from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";

const Allcourses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        document.title = "All Courses";
    }, []);

    // function to call url
    const getAllCoursesFromServer = () => {
        axios.get(`${BASE_URL}/courses`).then(
            (response) => {
                console.log(response.data);
                toast.success("Courses have been reloaded", {
                    position: "bottom-center",
                });
                setCourses(response.data);
            },
            (error) => {
                console.log(error);
                toast.error("Something went wrong while fetching courses", {
                    position: "bottom-center",
                });
            }
        );
    };

    useEffect(() => {
        getAllCoursesFromServer(); // Call on component mount only
    }, []);

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
};

export default Allcourses;
