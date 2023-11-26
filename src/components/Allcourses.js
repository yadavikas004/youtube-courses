import React, { useState } from "react";
import Course from "./Course";

const Allcourses = () => {

    const [courses] = useState([
        {title:"Java Course", description: "This is Java Learning Course"},
        {title:"Python Course", description: "This is Python Learning Course"},
        {title:"Nodejs Course", description: "This is Nodejs Learning Course"}
    ])

    return (
        <div>
            <h1 className="text-center">All Course</h1>
            <p className="text-center">List of courses are as follows</p>
            {
                courses.length>0 ? courses.map((item) =>
                    <Course course={item}/>
                ) : "No courses"
            }
        </div>
    );
}

export default Allcourses;