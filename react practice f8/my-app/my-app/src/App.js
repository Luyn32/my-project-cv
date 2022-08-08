import { useState } from "react";
import "./App.css";

const courses = [
    {
        id: 1,
        name: "html,css",
    },
    {
        id: 2,
        name: "javascript",
    },
    {
        id: 3,
        name: "reactjs",
    },
];
function App() {
    const [checked, setChecked] = useState([]);
    console.log(checked);

    const handleSubmit = () => {
        console.log({ id: checked });
    };
    return (
        <div>
            {courses.map((course) => (
                <div key={course.id}>
                    <input
                        type="checkbox"
                        checked={checked === course.id}
                        onChange={() => setChecked(course.id)}
                    ></input>
                    {course.name}
                </div>
            ))}
            <button>register</button>
        </div>
    );
}

export default App;
