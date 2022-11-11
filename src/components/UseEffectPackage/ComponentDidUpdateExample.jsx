import React, {useState, useEffect} from 'react'

function ComponentDidMountExample(){
    const [count, setCount] = useState(0)

    useEffect(() =>{
        console.log("ComponentDidMountExample Render Edildi.");
    });

    return (
        <div>
            <div>{"react hooks örneği"}</div>
            <div>{count}</div>
            <button onClick={() => setCount(c => c + 1)}>Increment</button>
        </div>
    )
}

export default ComponentDidMountExample

