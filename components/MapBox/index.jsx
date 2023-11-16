import { useState, useEffect } from "react"
import { MapContainer, TileLayer} from 'react-leaflet'
import GeoMarker from '../GeoMarker'

const MapBox = ({ address }) => {

  const [isMonted, setIsMonted] = useState(false)

  useEffect(() => {
    setIsMonted(true)
  }, [])
  

  return isMonted && (
    <MapContainer
        center={[53.35, 18.8]}
        zoom={1}
        scrollWheelZoom={false}
        style={{
          height: "40vh",
          width: "100%",
          marginTop: "20px",
          zIndex: 0,
        }}
    >
        <TileLayer 
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' 
        />
        <GeoMarker address={address} />
    </MapContainer>
  )
}

export default MapBox