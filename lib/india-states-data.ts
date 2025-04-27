// This is a simplified GeoJSON for Indian states
// In a real application, you would use a complete and accurate GeoJSON file

export const indiaStatesData = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        name: "Andhra Pradesh",
        sites: [
          { name: "Amaravati Stupa", description: "Ancient Buddhist monument dating back to 3rd century BCE" },
          { name: "Nagarjunakonda", description: "Buddhist archaeological site from 2nd century CE" },
        ],
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [78.0, 14.0],
            [80.0, 14.0],
            [80.0, 16.0],
            [78.0, 16.0],
            [78.0, 14.0],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Tamil Nadu",
        sites: [
          { name: "Mamallapuram", description: "UNESCO World Heritage site with 7th-8th century monuments" },
          { name: "Adichanallur", description: "Iron Age burial site dating back to 1800 BCE" },
        ],
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [77.0, 8.0],
            [80.0, 8.0],
            [80.0, 13.0],
            [77.0, 13.0],
            [77.0, 8.0],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Karnataka",
        sites: [
          { name: "Hampi", description: "UNESCO World Heritage site, capital of Vijayanagara Empire" },
          { name: "Aihole", description: "Early Western Chalukya monuments from 6th century CE" },
        ],
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [74.0, 12.0],
            [78.0, 12.0],
            [78.0, 18.0],
            [74.0, 18.0],
            [74.0, 12.0],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Maharashtra",
        sites: [
          { name: "Ajanta Caves", description: "UNESCO World Heritage site with Buddhist cave paintings" },
          { name: "Ellora Caves", description: "UNESCO World Heritage site with Hindu, Buddhist, and Jain monuments" },
        ],
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [72.0, 16.0],
            [80.0, 16.0],
            [80.0, 22.0],
            [72.0, 22.0],
            [72.0, 16.0],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Gujarat",
        sites: [
          { name: "Lothal", description: "One of the most prominent cities of the ancient Indus Valley Civilization" },
          { name: "Dholavira", description: "UNESCO World Heritage site, Harappan city dating back to 3000 BCE" },
        ],
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [68.0, 20.0],
            [74.0, 20.0],
            [74.0, 24.0],
            [68.0, 24.0],
            [68.0, 20.0],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Rajasthan",
        sites: [
          { name: "Kalibangan", description: "Pre-Harappan and Harappan settlement" },
          { name: "Bairat", description: "Ancient Buddhist temple from Mauryan period" },
        ],
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [69.0, 23.0],
            [78.0, 23.0],
            [78.0, 30.0],
            [69.0, 30.0],
            [69.0, 23.0],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Madhya Pradesh",
        sites: [
          { name: "Bhimbetka", description: "UNESCO World Heritage site with prehistoric rock shelters" },
          { name: "Sanchi", description: "UNESCO World Heritage site with Buddhist monuments" },
        ],
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [74.0, 21.0],
            [83.0, 21.0],
            [83.0, 27.0],
            [74.0, 27.0],
            [74.0, 21.0],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Uttar Pradesh",
        sites: [
          { name: "Sarnath", description: "Buddhist pilgrimage site where Buddha gave his first sermon" },
          { name: "Fatehpur Sikri", description: "UNESCO World Heritage site, Mughal imperial city" },
        ],
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [77.0, 24.0],
            [84.0, 24.0],
            [84.0, 30.0],
            [77.0, 30.0],
            [77.0, 24.0],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Bihar",
        sites: [
          { name: "Nalanda", description: "UNESCO World Heritage site, ancient Buddhist university" },
          { name: "Bodh Gaya", description: "UNESCO World Heritage site, place of Buddha's enlightenment" },
        ],
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [83.0, 24.0],
            [88.0, 24.0],
            [88.0, 28.0],
            [83.0, 28.0],
            [83.0, 24.0],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "West Bengal",
        sites: [
          { name: "Chandraketugarh", description: "Ancient city dating back to 3rd century BCE" },
          { name: "Tamralipta", description: "Ancient port city mentioned in Hindu and Buddhist texts" },
        ],
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [86.0, 21.0],
            [90.0, 21.0],
            [90.0, 27.0],
            [86.0, 27.0],
            [86.0, 21.0],
          ],
        ],
      },
    },
  ],
}

