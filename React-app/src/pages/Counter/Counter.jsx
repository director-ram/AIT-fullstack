import React from 'react'
import { useState } from 'react'

export default function Counter() {

    let [count, setCount] = useState(0)



    return (
        <div className='m-2 p-2'>
            <h2>Counter: </h2>
            <p>{count}</p>
            <button className='btn btn-success m-2' onClick={() => { setCount(count + 1) }}>Increment</button>
            <button className='btn btn-warning m-2' onClick={() => {
                if (count > 0) {
                    setCount(count - 1)
                }
            }}>Decrement</button>
            <button className='btn btn-secondary px-2 border m-2' onClick={() => { setCount(0) }}>Reset</button>
        </div>
    )
}
