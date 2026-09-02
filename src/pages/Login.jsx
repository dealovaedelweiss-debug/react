import {
  Form,
  Button,
  Card,
  Container,
  Row,
  Col,
  Alert,
} from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const response = await fetch("http://localhost:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (response.status === 422 && data.error) {
          const firstKey = Object.keys(data.error)[0];
          setError(data.error[firstKey][0]);
        } else {
          setError(data.message || "Email dan password salah!");
        }

        return;
      }

      localStorage.setItem("token", data.token);

      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      setError("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center">
      <Row className="w-100 justify-content-center">
        <Col md={6} lg={4}>
          <Card className="shadow-sm border-0">
            <Card.Body className="p-4">
              <h3 className="text-center mb-4 font-weight-bold">Login Form</h3>

              {error && <Alert variant="danger">{error}</Alert>}

              <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="email@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter Your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  className="w-100 py-2 mt-2"
                  disabled={loading}
                >
                  {loading ? "Loading..." : "Login"}
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
