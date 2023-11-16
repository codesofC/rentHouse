import { useState, useEffect } from 'react'
import { Marker, Popup, useMap } from 'react-leaflet'
import { IoLocationSharp } from 'react-icons/io5'
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import * as ELG from 'esri-leaflet-geocoder'
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png'


let DefaultIcon = L.icon({
  iconRetinaUrl: iconRetina,
    iconUrl: icon,
    shadowUrl: iconShadow
});


const GeoMarker = ({ address }) => {

    const [position, setPosition] = useState([60, 19])
    const map = useMap()

    useEffect(() => {
      ELG.geocode().text(address).run((err, results, response) => {
        if(results?.results?.length > 0){
          const { lat, lng} = results?.results[0].latlng
          setPosition([ lat, lng ])
          map.flyTo([lat, lng], 6)
        }
      })
    }, [address])

  return (
    <Marker
        position={position}
        icon={L.divIcon({
          iconSize: [25, 25],
          iconAnchor: [0, 20],
          className: "mymarker",
          html: "🏁",
        })}
    >
        <Popup>
          {address}
        </Popup>
    </Marker>
  )
}

export default GeoMarker