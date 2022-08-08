import { useState } from "react";
import "./App.css";

const gifts = ["cpu i9", "ram 32gb rgb", "rgb keyboard"];

function App() {
    const [gift, setGift] = useState();
    const randomGift = () => {
        const index = Math.floor(Math.random() * gifts.length);
        setGift(gifts[index]);
    };
    return (
        <div className="App" style={{ padding: 32 }}>
            <h1>{gift || "chua co phan thuong"}</h1>
            <button onClick={randomGift}>lay thuong</button>
        </div>
    );
}

export default App;
