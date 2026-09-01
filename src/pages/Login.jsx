import { Form, Button, Card, Container, Row, Col, Alert  } from "react-bootstrap";

const Login = () => {
    return(
        <Container className="d-flex justify-content-center align-items-center">
            <Row className="w-100 justify-content-center">
                <Col md={6} lg={4}>
                <Card className="shadow-sm border-0">
                    <Card.Body className="p-4">
                        <h3 className="text-center mb-4 font-weight-bold">Login Form</h3>

                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="email@gmail.com"></Form.Control>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter Your Password"></Form.Control>
                            </Form.Group>
                            <Button variant="primary" type="submit" className="w-100 py-2 mt-2">
                                Login
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
    )
}
export default Login;