import React from 'react'
import HOCCOUNTER from './HOCCounter'

const IncreaseCounter = ({ counter, setCounter}) => {
    return (
        <div>
            <p>Increase Counter: {counter}</p>
            <button onClick={() => setCounter(counter + 1)}>Increase</button>
        </div>
    )
}

export default HOCCOUNTER(IncreaseCounter)
