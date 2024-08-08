import React, {Fragment} from "react";
import useStore from "../app/store";

const CourseList = () => {
    const {courses, removeCourse, toggleCourse} = useStore(state => ({
        courses: state.courses, removeCourse: state.removeCourse, toggleCourse: state.toggleCourse
    }))
    return (<>
            <ul>
                {courses.map((course, index) => {
                    return (<Fragment key={index}>
                            <li
                                className={'course-item'}
                                style={{
                                    background: course.completed ? "#00ff0044" : "white"
                                }}
                            >
                                <span className={'course-item-col-1'}>
                                    <input
                                        type="checkbox"
                                        checked={course.completed}
                                        onChange={(e) => toggleCourse(course.id)}
                                    />
                                </span>
                                <span style={{
                                    color:"#2dd4bf"
                                }}>{course.title}</span>
                                <button onClick={() => removeCourse(course.id)} className={'delete-btn'}>Delete</button>
                            </li>
                        </Fragment>)
                })}
            </ul>
        </>)
}

export default CourseList;