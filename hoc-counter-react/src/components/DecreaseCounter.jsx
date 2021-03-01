import React from 'react'
import HOCCOUNTER from './HOCCounter'

const DecreaseCounter = ({ counter, setCounter}) => {
    return (
        <div>
            <p>Decrease Counter: {counter}</p>
            <button onClick={()=>setCounter(counter-1)}>Decrease</button>
        </div>
    )
}

export default HOCCOUNTER(DecreaseCounter)
