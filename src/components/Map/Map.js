import React from 'react'
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line,
  ZoomableGroup
} from 'react-simple-maps'

const geoUrl =
  'https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json'

export default function Map() {
  return (
    <ComposableMap>
      <ZoomableGroup>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              let highLight = false
              if (geo.id === 'VEN' || geo.id === 'PRT') highLight = true
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={highLight ? '#00daf7' : '#caced2'}
                />
              )
            })
          }
        </Geographies>
        <Marker coordinates={[-66.0, 8.0]}>
          <circle r={5} fill="#fffff" />
        </Marker>
        <Marker coordinates={[-8.224454, 39.399872]}>
          <circle r={5} fill="#fffff" />
        </Marker>
        <Line
          from={[-66.0, 8.0]}
          to={[-8.224454, 39.399872]}
          stroke="#00daf7"
          strokeWidth={4}
          strokeLinecap="round"
        />
      </ZoomableGroup>
    </ComposableMap>
  )
}
