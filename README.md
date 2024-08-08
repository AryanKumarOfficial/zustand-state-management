# Zustand Store Setup

This project demonstrates a Zustand store setup with `immer`, `persist`, and `devtools` middleware. The store manages a
list of courses, allowing for adding, removing, and toggling courses with state immutability, persistence, and debugging
capabilities.

## Installation

To install Zustand and the necessary dependencies, run:

```bash
npm install zustand immer
```

##### Or if using yarn:

```bash
yarn add zustand immer
```

## Usage

### Basic Store Setup

#### 1. Create the store

```javascript
import {create} from 'zustand';
import {persist} from 'zustand/middleware';
import {immer} from 'zustand/middleware/immer';
import {devtools} from 'zustand/middleware';

const store = (set) => ({
    courses: [],
    addCourse: (course) => set((state) => {
        state.courses.unshift(course);
    }),
    removeCourse: (courseId) => set((state) => {
        state.courses = state.courses.filter(c => c.id !== courseId);
    }),
    toggleCourse: (courseId) => set((state) => {
        const course = state.courses.find(c => c.id === courseId);
        if (course) {
            course.completed = !course.completed;
        }
    }),
});

const useStore = create(
    devtools(
        persist(
            immer(store),
            {
                name: 'course-storage', // Unique name
            }
        )
    )
);

export default useStore;

```

#### 2. Use the store in a component

```javascript
import useStore from './path/to/your/store';

const Component = () => {
    const courses = useStore(state => state.courses);
    const addCourse = useStore(state => state.addCourse);
    const removeCourse = useStore(state => state.removeCourse);
    const toggleCourse = useStore(state => state.toggleCourse);

    // Example usage
    const handleAddCourse = () => {
        const newCourse = {id: 1, title: 'React Basics', completed: false};
        addCourse(newCourse);
    };

    return (
        <div>
            <button onClick={handleAddCourse}>Add Course</button>
            {/* Render courses */}
        </div>
    );
};
```

## Middleware

- **immer**: Allows you to write simpler state updates by enabling direct mutations within the `set` function while
  keeping the state immutable under the hood.
- **persist**: Persists the store's state in `localStorage` or any other storage engine you choose. This setup ensures
  that the state persists even after a page reload.
- **devtools**: Integrates with Redux DevTools, enabling you to inspect and debug the Zustand store’s state changes.

# Zustand Library

Zustand is a small, fast, and scalable state management library for React. It allows you to create a global store to
manage the state across your application components. Zustand is known for its simplicity and flexibility, making it a
popular choice for both small and large applications.

## Key Features:

- **No biolerplate**: Zustand has a minimal API that is easy to set up and use without the need for extensive
  configuration.
- **Fast and lightweight**:The library is designed to be small and performant, with a focus on delivering fast state updates.
- **Flexible**: Zustand works well with React's component-based architecture and can be easily integrated with other tools and libraries.
- **Middleware support**:Zustand supports middleware such as `persist`, `immer`, and `devtools`, allowing for advanced state management capabilities like persistence and debugging.

## Official Documentation

For more detailed information on Zustand, visit the [official documentation](https://docs.pmnd.rs/zustand/getting-started/introduction).

