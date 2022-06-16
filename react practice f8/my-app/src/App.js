import { useState } from "react";

function App() {
    const [checked, setChecked] = useState([]);

    console.log(checked);
    console.log("rerender");
    const courses = [
        { id: 1, name: "java" },
        { id: 2, name: "c++" },
        { id: 3, name: "javascript" },
    ];
    const handleCheck = (id) => {
        setChecked([id]);
    };
    return (
        <div className="App">
            {courses.map((course) => (
                <div key={course.id}>
                    <input
                        type="checkbox"
                        onChange={() => handleCheck(course.id)}
                    />
                    {course.name}
                </div>
            ))}
        </div>
    );
}

export default App;
