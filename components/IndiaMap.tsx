// "use client"

// import { useEffect, useRef, useState } from "react"
// import mapboxgl from "mapbox-gl"
// import "mapbox-gl/dist/mapbox-gl.css"
// import { indiaStatesData } from "@/lib/india-states-data"

// mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN || ""

// const IndiaMap = () => {
//   const mapContainer = useRef<HTMLDivElement>(null)
//   const map = useRef<mapboxgl.Map | null>(null)
//   const [lng] = useState(77.0)
//   const [lat] = useState(22.0)
//   const [zoom] = useState(4)
//   const [selectedState, setSelectedState] = useState<{ name: string; sites: any[] } | null>(null)

//   useEffect(() => {
//     if (map.current || !mapContainer.current) return

//     map.current = new mapboxgl.Map({
//       container: mapContainer.current,
//       style: "mapbox://styles/mapbox/light-v11",
//       center: [lng, lat],
//       zoom: zoom,
//     })

//     map.current.on("load", () => {
//       map.current?.addSource("states", {
//         type: "geojson",
//         data: indiaStatesData,
//       })

//       map.current?.addLayer({
//         id: "state-fills",
//         type: "fill",
//         source: "states",
//         layout: {},
//         paint: {
//           "fill-color": "#627BC1",
//           "fill-opacity": 0.5,
//         },
//       })

//       map.current?.addLayer({
//         id: "state-borders",
//         type: "line",
//         source: "states",
//         layout: {},
//         paint: {
//           "line-color": "#627BC1",
//           "line-width": 2,
//         },
//       })

//       map.current.on("click", "state-fills", (e) => {
//         if (!map.current || !e.features || e.features.length === 0) return

//         const feature = e.features[0]
//         const stateName = feature.properties?.name
//         const sites = feature.properties?.sites || []

//         setSelectedState({
//           name: stateName,
//           sites: sites,
//         })

//         // Update the fill color based on the selected state
//         map.current.setPaintProperty("state-fills", "fill-color", [
//           "case",
//           ["boolean", ["==", ["get", "name"], stateName], false],
//           "#3182CE", // Selected state color (blue)
//           "#627BC1", // Default state color
//         ])

//         map.current.setPaintProperty("state-fills", "fill-opacity", [
//           "case",
//           ["boolean", ["==", ["get", "name"], stateName], false],
//           0.8,
//           0.5,
//         ])
//       })

//       // Change the cursor to a pointer when the mouse is over the states layer.
//       map.current.on("mouseenter", "state-fills", () => {
//         if (map.current) map.current.getCanvas().style.cursor = "pointer"
//       })

//       // Change it back to default when it leaves.
//       map.current.on("mouseleave", "state-fills", () => {
//         if (map.current) map.current.getCanvas().style.cursor = ""
//       })
//     })

//     // Cleanup on unmount
//     return () => {
//       map.current?.remove()
//       map.current = null
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [])

//   return (
//     <div className="relative">
//       <div ref={mapContainer} className="map-container" style={{ height: "600px", width: "100%" }} />
//       {selectedState && (
//         <div className="absolute bottom-4 left-4 bg-white p-4 rounded-md shadow-md max-w-md">
//           <h3 className="text-lg font-semibold">Selected State: {selectedState.name}</h3>
//           <div className="mt-2">
//             <h4 className="font-medium">Archaeological Sites:</h4>
//             {selectedState.sites && selectedState.sites.length > 0 ? (
//               <ul className="mt-1 space-y-2">
//                 {selectedState.sites.map((site, index) => (
//                   <li key={index} className="border-l-2 border-primary pl-2">
//                     <span className="font-medium">{site.name}</span>
//                     <p className="text-sm text-gray-600">{site.description}</p>
//                   </li>
//                 ))}
//               </ul>
//             ) : (
//               <p className="text-sm text-gray-600">No archaeological sites available for this state.</p>
//             )}
//           </div>
//           <button className="mt-4 px-4 py-2 bg-primary text-white rounded-md" onClick={() => setSelectedState(null)}>
//             Clear Selection
//           </button>
//         </div>
//       )}
//       <style jsx global>{`
//         .state-popup {
//           background: rgba(0, 0, 0, 0.7);
//           color: white;
//           padding: 5px 10px;
//           border-radius: 4px;
//           font-weight: bold;
//           animation: fadeIn 0.3s ease-in-out;
//         }
//         @keyframes fadeIn {
//           from { opacity: 0; transform: translateY(10px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         .mapboxgl-popup {
//           z-index: 1;
//         }
//       `}</style>
//     </div>
//   )
// }

// export default IndiaMap

