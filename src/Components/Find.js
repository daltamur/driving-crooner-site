import './../styles/styles.css'
import marker from './../img/marker.png'
import GoogleMap from 'google-maps-react-markers'
import { Col, Container, Row } from 'react-bootstrap'
import axios from 'axios'
import { useEffect, useState } from 'react'

function Find(){
  // axios
  //   .get('https://zenquotes.io/api/quotes')
  //   .then(response => console.log(response.data))

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('https://api.3geonames.org/LONDON-MULUA-PAULENI.json')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  let markers=[
    {
      id:1,
      latitude: 47.165249489365344,
      longitude: -118.8362426936143,
      shelter:'marker 1'

    },
    {
      id: 2,
      latitude: 33.10462267788664,
      longitude:-98.0737865932019,
      shelter: 'marker 2'

    },
    {
      id: 3,
      latitude: 42.95900794257399,
      longitude: -76.11952787675375,
      shelter: 'marker 3'

    },
    {
      id: 4,
      latitude: 38.39514221494474,
      longitude: -111.55997409044862,
      shelter: 'marker 4'

    },
    {
      id: 5,
      latitude: 36.19988158970616,
      longitude: -81.13764415479905,
      shelter: 'marker 5'

    },
    {
      id: 6,
      latitude: 33.52397003603787,
      longitude: -102.02555316216257,
      shelter: 'marker 6'
    },
    {
      id: 7,
      latitude: 36.75469370135209,
      longitude: -106.91821653325673,
      shelter: 'marker 7'
    },
    {
      id: 8,
      latitude: 41.37844504833887,
      longitude: -115.57446711288485,
      shelter: 'marker 8'
    },
    {
      id: 9,
      latitude: 46.001293782713454,
      longitude: -99.0146833953354,
      shelter: 'marker 9'
    },
    {
      id: 10,
      latitude: 38.05019271718004,
      longitude: -105.22460228941644,
      shelter: 'marker 10'
    },
  ]

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
              We're driving and crooning across America! At any second, there's ten Crooners strolling through town with their decals on. I'm getting a <i>lotta</i> people who want in on this, it's simply too good.
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