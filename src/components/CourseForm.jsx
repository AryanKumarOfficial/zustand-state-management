import React, {useState} from "react";
import useStore from "../app/store";

const CourseForm = () => {
    const addCourse = useStore(state => state.addCourse)
    const [courseTitle, setCourseTitle] = useState("");
    const handleCourseSubmit = (e) => {
        e.preventDefault();
        if (!courseTitle) return alert("Please enter a course");
        addCourse({
            id: Math.ceil(Math.random() * Date.now()),
            title: courseTitle
        })
        console.log("course added successfully")
        setCourseTitle("")

    }
    return (
        <form onSubmit={handleCourseSubmit} className={"form-container"}>
            <input
                type={'text'}
                value={courseTitle}
                onChange={(e) => setCourseTitle(e.target.value)}
                className={'form-input'}
            />
            <button
                type={"submit"}
                className={"form-submit-btn"}
            >
                Add course
            </button>
        </form>
    )

}

export default CourseForm;