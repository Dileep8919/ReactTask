import { useEffect, useState } from "react";

function Timer () {
    const [count, setCount] = useState<number>(0);
    useEffect(()=>{
        const setIntervalId = setInterval (() => {
            setCount(prevCount => prevCount + 1);
        },1000)
        return () => clearInterval(setIntervalId)
    }, [])
    return (
        <>
            <p>count : {count}</p>
        </>
    )
}
export default Timer;