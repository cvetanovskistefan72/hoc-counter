import { useState } from "react";


const HOCCOUNTER = OriginalComponent => {
     
    const NewComponent = () => {
        const [counter, setCounter] = useState(0)

        return <OriginalComponent counter={counter} setCounter={setCounter}/>
    }

    return NewComponent;
}


export default HOCCOUNTER