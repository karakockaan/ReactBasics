import React, {useEffect, useLayoutEffect} from 'react'

function ComponentDidMountExample(){
    useEffect(() => {
        console.log('WillDidMount Calisti...')
    });
    // useEffect(() =>{
    //     console.log("Effect");
    // }, []);

    return (
        <div id="Didmount">UseEffect Hooks</div>
    );
}

export default ComponentDidMountExample
