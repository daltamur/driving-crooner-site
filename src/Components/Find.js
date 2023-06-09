import './../styles/styles.css'
import marker from './../img/marker.png'
import GoogleMap from 'google-maps-react-markers'

function Find(){
  let markers=[
    {
      id:1,
      latitude: 35.143474,
      longitude: -120.763247,
      shelter:'marker 1'

    },
    {
      id: 2,
      latitude: 42.143474,
      longitude: -110.763247,
      shelter: 'marker 2'

    },
    {
      id: 3,
      latitude: 39.143474,
      longitude: -137.763247,
      shelter: 'marker 3'

    }
  ]

  const CroonerMarker = () => <div><img src={marker} alt={'marker'} className={"marker"}/></div>;

  const defaultProps = {
    center: {
      lat: 34.143474,
      lng: -118.763247
    },
    zoom: 80
  };

  return(
    <div className="Find">
      <h1>
        Find the Crooner
      </h1>
        <GoogleMap
        apiKey={process.env.REACT_APP_MAP_API_KEY}
        defaultCenter={{lat: defaultProps.center.lat, lng: defaultProps.center.lng}}
        defaultZoom={defaultProps.zoom}
        mapMinHeight="60vh"
        >
          {markers.map(marker => {
            return(
              <CroonerMarker
                key={marker.id}
                lat={marker.latitude}
                lng={marker.longitude}
                />
            )
          })}
        </GoogleMap>
    </div>
  )
}

export default Find;