import React, {useEffect} from 'react'

function ComponentWillUnMountExample(){
    useEffect(() => {
        console.log('WillUnMount Calisti...')
    });
    useEffect(() =>{
        console.log("Effect");
    }, []);

    return (
        <div id={"unmount"}>UseEffect Hooks UnMount Componenti</div>
    );
}

export default ComponentWillUnMountExample
