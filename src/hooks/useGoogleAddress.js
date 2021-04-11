import {useState, useEffect} from 'react'
import axios from 'axios'

const useGoogleAddress = (address) => {
    const [map, setMap] = useState({})

    const API = `http://api.positionstack.com/v1/forward?access_key=61dc71651bc1305b51dd017ad51b6b10&query=${address}`
    // useEffect(async () => {
    //     await axios(API).then((response) => {
    //         console.log(response)
    //         setMap(response.data[0])
    //     })
    // }, [])

    useEffect(async ()=> {
        const res = await axios(API)
        setMap(res.data[0])
    }, [API])
    return map;
}
// Se encarga de manejar el estado
export default useGoogleAddress