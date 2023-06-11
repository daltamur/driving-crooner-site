import './../styles/styles.css'
import marker from './../img/marker.png'
import GoogleMap from 'google-maps-react-markers'
import { Col, Container, Row } from 'react-bootstrap'

function Find(){
  //US bounding box
  const top = 49.3457868
  const bottom =  30.7433195
  const left = -118.7844079
  const right = -80.9513812
  let markers=[]
  const upperBound = Math.floor(Math.random() * (150 - 50 + 1) + 50)
  for(let i = 0; i<upperBound; i++){
    markers.push({id: i, longitude: Math.floor(Math.random() * (right - left + 1) + left), latitude: Math.floor(Math.random() * (top - bottom + 1) + bottom)})
  }

  markers.push({id: markers.length, longitude: -75.2152, latitude: 39.9976})


  const CroonerMarker = () => <div><img src={marker} alt={'marker'} className={"marker"}/></div>;

  const defaultProps = {
    center: {
      lat: 38.345963978136844,
      lng: -97.32106861712919
    },
    zoom: 3
  };

  return(
    <div className="Find">
      <Container fluid>
        <Row>
          <h1>
            Find the Crooner
          </h1>
        </Row>
        <Row>
          <Col sm={6}>
            <div className={'google-map'}>
              <GoogleMap
              apiKey={process.env.REACT_APP_MAP_API_KEY}
              defaultCenter={{lat: defaultProps.center.lat, lng: defaultProps.center.lng}}
              defaultZoom={defaultProps.zoom}
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
          </Col>
          <Col sm={6}>
            <p>
              We're driving and crooning across America! At any second, there's {markers.length} Crooners strolling through town with their decals on. I'm getting a <i>lotta</i> people who want in on this, it's simply too good.
              I got a guy from Baghdad who keeps calling me asking for decals, Driving Crooner could go global at anytime guy like me wants. I haven't given him the decals yet because he keeps calling my house and
              my wife made friends with him. I'm really uneasy about this Baghdad guy being friends with my wife. I hear them having fun and talking in the closet. They talk about football and cars and it isn't fair
              because I love football and cars but not the ones my wife likes. My life is nothing I thought it would be and everything I feared it would become. The life of a driving crooner is awesome.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Find;