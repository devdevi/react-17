import React, { useState, useCallback } from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'

const Map = () => {
    const [map, setMap] = useState(null)
    const onLoad = useCallback((mapa) => {
      const bounds = new window.google.maps.LatLngBounds();
      mapa.fitBounds(bounds);
      setMap(map)
    }, [])
    const { isLoaded } =  useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyABYfwGKpusJn2DbvOKRRE-iJuX5BbsAxQ"
    })
    const mapStyles = {
        height: "50vh",
        with: "100%",
    }
    const defaultCenter = {
        lat: 19.4268,
        lng: -99.17
    }
    const onUnmount = useCallback((map) => {
        setMap(null)
    }, [])
    return isLoaded ?  (
        <GoogleMap
            mapContainerStyle={mapStyles}
            center={defaultCenter}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            { /* Child components, such as markers, info windows, etc. */ }
        </GoogleMap>

    ): <></>
}

export default Map;