// "use client"

// import { useEffect, useRef, useState } from "react"
// import mapboxgl from "mapbox-gl"
// import "mapbox-gl/dist/mapbox-gl.css"

// mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN || ""

// const Map = () => {
//   const mapContainer = useRef<HTMLDivElement>(null)
//   const map = useRef<mapboxgl.Map | null>(null)
//   const [lng, setLng] = useState(-70.9)
//   const [lat, setLat] = useState(42.35)
//   const [zoom, setZoom] = useState(9)

//   useEffect(() => {
//     if (map.current) return // initialize map only once
//     map.current = new mapboxgl.Map({
//       container: mapContainer.current!,
//       style: "mapbox://styles/mapbox/streets-v11",
//       center: [lng, lat],
//       zoom: zoom,
//     })

//     map.current.on("move", () => {
//       if (map.current) {
//         setLng(Number.parseFloat(map.current.getCenter().lng.toFixed(4)))
//         setLat(Number.parseFloat(map.current.getCenter().lat.toFixed(4)))
//         setZoom(Number.parseFloat(map.current.getZoom().toFixed(2)))
//       }
//     })

//     // Add markers for archaeological sites (example data)
//     const sites = [
//       { name: "Ancient Rome", coordinates: [12.4964, 41.9028] },
//       { name: "Machu Picchu", coordinates: [-72.545, -13.1631] },
//       { name: "Pyramids of Giza", coordinates: [31.1342, 29.9792] },
//     ]

//     sites.forEach((site) => {
//       new mapboxgl.Marker()
//         .setLngLat(site.coordinates)
//         .setPopup(new mapboxgl.Popup().setHTML(`<h3>${site.name}</h3>`))
//         .addTo(map.current!)
//     })
//   }, [])

//   return (
//     <div>
//       <div className="sidebar">
//         Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
//       </div>
//       <div ref={mapContainer} className="map-container" style={{ height: "600px" }} />
//     </div>
//   )
// }

// export default Map

