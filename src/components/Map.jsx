import React, { useState, useCallback } from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Map = ({data}) => {
    const [map, setMap] = useState(null)
    // const onLoad = useCallback((mapa) => {
    //   const bounds = new window.google.maps.LatLngBounds();
    //   mapa.fitBounds(bounds);
    //   setMap(map)
    // }, [])
    // const { isLoaded } =  useJsApiLoader({
    //     id: 'google-map-script',
    //     googleMapsApiKey: "AIzaSyABYfwGKpusJn2DbvOKRRE-iJuX5BbsAxQ"
    // })
    // const mapStyles = {
    //     height: "50vh",
    //     with: "100%",
    // }
    // const defaultCenter = {
    //     lat: data.latitude,
    //     lng: data.longitude
    // }
    // const onUnmount = useCallback((map) => {
    //     setMap(null)
    // }, [])

    return data?(

        <MapContainer center={[data.latitude, data.longitude]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[data.latitude, data.longitude]}>
                <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
            </MapContainer>
        // <div>
        //     <GoogleMap
        //     mapContainerStyle={mapStyles}
        //     center={defaultCenter}
        //     zoom={10}
        //     onLoad={onLoad}
        //     onUnmount={onUnmount}
        // >

        //     { /* Child components, such as markers, info windows, etc. */ }
        // </GoogleMap>
        // </div>

    ): <></>
}

export default Map;