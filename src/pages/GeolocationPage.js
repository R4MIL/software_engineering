import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

export const GeolocationPage = () => {
    const [geoData, setGeoData] = useState([])

    useEffect(() => {
        fetch().then(res => res.json()).then((data) => { setGeoData(data)})
    },[])

    return (<div>GeolocationPage <Link to="/">Назад</Link></div>)
}