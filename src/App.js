import React from "react";
import './App.css';
import CourseForm from "./components/CourseForm";
import CourseList from "./components/CourseList";

function App() {
    return (
        <main className={"main-container"}>
            <h1 style={{
                fontSize: "2.5rem",
                marginBottom: "2rem",
                textTransform: "capitalize"
            }}>
                My course list
            </h1>
            <CourseForm/>
            <CourseList/>
        </main>
    );
}

export default App;
