import React, { useState, useEffect } from 'react'
import axios from 'axios'

const API = 'https://rickandmortyapi.com/api/character'
const HooksComponent = () => {
    const [characters, setCharacters] = useState([])
    //yüklenip yüklenmeme durumunu boolean olarak tutacağımız bir state oluşturuyoruz
    const [loading, setLoading] = useState(true)
    const [count, setCount] = useState(0)

    useEffect(() => {
            fetchData().then();
    }, [])
    const fetchData = async () => {
        const response = await axios.get(API)
        setCharacters(response.data.results)
        //Datayı set ettikten hemen sonra loading değerini false a çekiyoruz
        setLoading(false);
    }

    return (
        <div>
            {!loading ? (
                characters.map((ddd) => <h6>{ddd.name}</h6>)
                )
                :
                (
                    <div>Loading</div>
                )
            }
        </div>
    )
}
export default HooksComponent;
