import React, { Component } from 'react';
import { Button, Card, CardBody, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import FormFeedback from 'reactstrap/lib/FormFeedback';

class Register extends Component {
  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <Form>
                    <h1>Register</h1>
                    <p className="text-muted">Create your account</p>
                    
                    {/*Students name*/}
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Name" autoComplete="username" required />
                      <FormFeedback>Oh noes! that name is already taken</FormFeedback>
                    </InputGroup>

                    {/*Students Mat No */}
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>ID</InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Matric No" autoComplete="matricno" required />
                      <FormFeedback>Oh noes! that matric no is already taken</FormFeedback>
                    </InputGroup>

                    {/*Students Password */}
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Hall No" autoComplete="hall_no" required/>
                    </InputGroup>

                    <Button color="success" block>Create Account</Button>
                  </Form>
                </CardBody>

              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Register;
