import GoogleMapReact from 'google-map-react'
import './../styles/styles.css'
import marker from './../img/marker.png'

function Find(){
  const Marker = () => <div><img src={marker} alt={'marker'} className={"marker"}/></div>;

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 80
  };

  return(
    <div className="Find">
      <h1>
        Find the Crooner
      </h1>
      <div className={'google-map'}>
        <GoogleMapReact
        bootstrapURLKeys={{key: process.env.REACT_APP_MAP_API_KEY}}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}>
          <Marker
            lat={10.99835602}
            lng={77.01502627}
          />
        </GoogleMapReact>
      </div>
    </div>
  )
}

export default Find;