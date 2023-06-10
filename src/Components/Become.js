import { Container, Form } from 'react-bootstrap'

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
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Example textarea</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
              </div>
            </Form>
          </div>
        </row>
      </Container>
    </div>
  )
}

export default Become;