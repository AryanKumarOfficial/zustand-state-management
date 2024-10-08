import {create} from 'zustand';
import {persist} from "zustand/middleware";
import {immer} from "zustand/middleware/immer";
import {devtools} from "zustand/middleware";


const store = (set) => ({
    courses: [],
    addCourse: (course) => set((state) => ({
        courses: [course, ...state.courses]
    })),
    removeCourse: (courseId) => {
        set((state) => ({
            courses: state.courses.filter(c => c.id !== courseId)
        }))
    },
    toggleCourse: (courseId) => {
        set((state) => ({
            courses: state.courses.map(course => course.id === courseId ? {
                ...course,
                completed: !course.completed
            } : course)
        }))
    }
});

const useStore = create(
    devtools(
        persist(immer(store), {
            name: "courses",
        })))

export default useStore;