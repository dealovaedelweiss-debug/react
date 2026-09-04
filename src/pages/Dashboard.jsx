import { Container, Button, Card } from "react-bootstrap";
import AppNavbar from "../componen/AppNavbar";
const Dashboard = () => {
  return (
    <>
    <AppNavbar />
    <Container className="Py-5">
      <Card className="p-4 shadow-sm">
        <h2>Welcome to Dashboard</h2>
        <p className="text-muted">Login Successfully</p>
      </Card>
    </Container>
    </>
  );
};
export default Dashboard;
