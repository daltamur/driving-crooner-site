import { Carousel, Col, Container, Row } from 'react-bootstrap'
import './../styles/styles.css'
import fratBoy from './../img/frat-boy.jpg'
import jailCell from './../img/jailcell.jpg'
import civic from './../img/civic.jpeg'

function About(){
  let images =[
    {
      id:1,
      image:fratBoy,
      captionHeader:'Frat Fiends',
      captionBody:'These men want me dead, I got nowhere to go and they keep putting salt in my gas tank. All I ever wanted to do was find out how to make money on this.'
    },
    {
      id:2,
      image: jailCell,
      captionHeader: 'Imprisonment',
      captionBody: 'A couple of nights ago some guy and his kid were trying to steal my decals. When I sped up I hit his kid and they pressed charges' +
        '. People hate this. I\'m so sick of it.'
    },
    {
      id:3,
      image: civic,
      captionHeader: 'Crooner Car',
      captionBody: 'This is the car I operate the Driving Crooner out of. I have a giant target on my back from fratboys and fiends alike. People want me dead, this is a thankless service to the public.'
    }
  ]

  return(
    <div className="About">
      <Container fluid>
        <h1>
          About the Crooner
        </h1>
        <Row>
          <Col lg={6} md={6} sm={12} xs={12}>
            <p>Hi</p>
          </Col>

          <Col lg={6} md={6} sm={12} xs={12}>
            <Carousel slide={false}>
              {images.map(image => {
                return(
                    <Carousel.Item>
                      <div className={'carouselItem'}>
                        <img
                          className="d-block w-100"
                          src={image.image}
                          alt="Slide"
                        />
                        <div className={'carouselCaption'}>
                          <Carousel.Caption style={{backgroundColor: 'dimgrey'}}>
                            <h6>{image.captionHeader}</h6>
                            <p style={{fontSize: '13px'}}>{image.captionBody}</p>
                          </Carousel.Caption>
                        </div>
                      </div>
                    </Carousel.Item>
                )
              })}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About;