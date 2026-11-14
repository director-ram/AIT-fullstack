import { useRef, useState } from "react"

export const Timer = () => {
    const [count, setCount] = useState(0)
    const timerRef = useRef(null)

    function onStart() {
        if (timerRef.current === null) {
            timerRef.current = setInterval(() => {
                setCount((previousCount) => previousCount + 1)
            }, 1000)
        }
    }

    function onStop() {
        clearInterval(timerRef.current)
        timerRef.current = null
    }

    function onReset(){
        clearInterval(timerRef.current)
        timerRef.current = null
        setCount(0)
    }
    return (
        <div className="col-8">
            <h3>Timer: {count}</h3>
            <button className="btn btn-success m-2 p-2" onClick={onStart}>Start</button>
            <button className="btn btn-warning m-2 p-2" onClick={onStop}>Stop</button>
            <button className="btn btn-danger m-2 p-2" onClick={onReset}>Reset</button>
        </div>
    )
}