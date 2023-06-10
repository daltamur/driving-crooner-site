import { Button, Col, Container, Form, Row } from 'react-bootstrap'

function Become(){
  return(
    <div className="Become">
      <Container fluid>
        <row>
          <h1>
            Become a Crooner
          </h1>
          <h3>Apply to become a driving crooner by filling out this form.</h3>
        </row>

        <row>
          <div className={'form'}>
            <Form>
              <div className={'form-body'}>
                <div className={'form-group'}>
                  <Form.Group>
                    <Row>
                      <Col lg={6} md={6} sm={12} xs={12}>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control style={{marginBottom: '3%'}} type="email" placeholder="name@example.com" />
                      </Col>
                      <Col lg={6} md={6} sm={12} xs={12}>
                        <Form.Label>Car type</Form.Label>
                        <Form.Control type="text" style={{marginBottom: '3%'}} placeholder="Cadillac (Please GOD let it be a Cadillac)" />
                      </Col>
                    </Row>
                  </Form.Group>
                </div>
                <div className={'form-group'}>
                  <Form.Group>
                    <Row>
                      <Col lg={6} md={6} sm={12} xs={12}>
                        <Form.Select aria-label="Fratboy Select" style={{marginBottom: '3%'}}>
                          <option>Are you a fratboy?</option>
                          <option value="1">Yes</option>
                          <option value="2">No</option>
                          <option value="3">I am but I hate what I am</option>
                        </Form.Select>
                      </Col>
                      <Col lg={6} md={6} sm={12} xs={12}>
                        <Form.Select aria-label="Are you just trying to steal my decals select" style={{marginBottom: '3%'}}>
                          <option>Are you just trying to steal my decals?</option>
                          <option value="1">Yes, they're so cool</option>
                          <option value="2">No</option>
                          <option value="3">Yes, but it's because I'm afraid something bad is gonna happen to them</option>
                        </Form.Select>
                      </Col>
                    </Row>
                  </Form.Group>
                </div>
                <div className={'form-group'}>
                  <Form.Group className="sm-6" controlId="Text Area">
                    <Form.Label>What do you bring to the driving crooner brand? Will you try and call my wife about Football and cars and
                    other fun things? I cannot have another guy from Baghdad situation. She won't stop talking to them. She says it
                    is because he is an awesome conversationalist but I know it's because he has some rare Jordans and she resents me for not
                    having any.</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                  <Form.Group style={{marginTop: '2%'}}>
                    <Row>
                      <Col lg={12} md={6} sm={12} xs={12}>
                        <div className="text-center">
                          <Button variant="primary" size={"lg"} href={'https://www.gofundme.com/f/biff-wiff'}>Submit</Button>
                        </div>
                      </Col>
                    </Row>
                  </Form.Group>
                </div>
              </div>
            </Form>
          </div>
        </row>
      </Container>
    </div>
  )
}

export default Become;