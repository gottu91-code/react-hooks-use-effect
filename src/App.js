import { useEffect, useState } from "react";

function App() {
    const [count, setCount] = useState(0);

    const countup = () => {
        setCount((prev) => prev + 1);
    };

    useEffect(() => {
        console.log(`${count}回 useEffect`);
    }, [count]);

    return (
        <>
            <p>{count}</p>
            <button onClick={countup}>count up</button>
        </>
    );
}

export default App;
