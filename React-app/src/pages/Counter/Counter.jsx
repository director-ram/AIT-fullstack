import { useCount } from '../../Hooks/useCount'

export default function Counter() {

    let [count,INC,DEC,RES] = useCount()



    return (
        <div className='m-2 p-2'>
            <h2>Counter: </h2>
            <p>{count}</p>
            <button className='btn btn-success m-2' onClick={INC}>Increment</button>
            <button className='btn btn-warning m-2' onClick={DEC}>Decrement</button>
            <button className='btn btn-secondary px-2 border m-2' onClick={RES}>Reset</button>
        </div>
    )
}
