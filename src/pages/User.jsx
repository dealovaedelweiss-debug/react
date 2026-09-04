import {
  Table,
  Container,
  Badge,
  Card,
  Row,
  Col,
  Button,
  Tab,
} from "react-bootstrap";
import UserModal from "../componen/UserModal";
import { useEffect, useState } from "react";
import api from "../services/api";
import AppModal from "../componen/AppModal";
import UserForm from "../componen/UserForm";

const User = () => {
  const [show, setShow] = useState(false);
  const [users, setUsers] = useState([]);

  const [loading, setLoading] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  //useEffect?
  //react akan merender data 1x kalau menggunakan useEffect

  const [isEdit, setIdEdit] = useState(false);
    const [validationError, setValidationError]=useState({});
  const initialForm = {
    id: null,
    name: "",
    email: "",
    password: "",
    status: true,
  };
  const [formData, setFormData] = useState(initialForm);

  const fetchUsers = async () => {
    setLoading(true);

    try {
      const response = await api.get("/user");
      const result = response.data;
      setUsers(result);
      console.log("hasil fetch", result);
    } catch (error) {
      console.log("Error fetching user", error);
    } finally {
      setLoading(false);
    }
  };
  // FetchUser();
  const handleCreate = () => {
    setFormData(initialForm);
    setIdEdit(false);
    setShow(true);
  };
  const handleCloseModal = () => {
    setShow(false);
  };
  // console.log(show); //false
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitLoading(true);
    try {
      const payload = { ...formData };
      const response = await api.post("/user", payload);
      setShow(false);
      fetchUsers();
    } catch (error) {
      console.log("error", error);
      if (error.response) {
        if (error.response.status === 422 && error.response.data.errors) {
          const rawErrors = error.response.data.errors;
          const formatError = {};
          Object.keys(rawErrors).forEach((key) => {
            formatError[key] = rawErrors[key][0];
          });
          setValidationError(formatError);
        } else {
          //500
          const errMsg = error.response?.data?.message || "Internal server error";
        //   setValidationError("Server Error");
        }
      }
    }finally{
        setSubmitLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <Container className="py-4">
      <Card className="shadow-sm border-0">
        <Card.Body>
          <Row className="mb-4 align-items-center">
            <Col>
              <h3>User Management</h3>
              <p className="text-muted mb-0">Data User Management</p>
            </Col>
            <Col xs="auto">
              <Button variant="primary" onClick={handleCreate}>
                + Create New User
              </Button>
            </Col>
          </Row>
          <Table responsive hover bordered className="align-middle">
            <thead className="table-alight">
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.status}</td>
                  <td>
                    <Button variant="primary" size="sm" className="me-2">
                      Edit
                    </Button>
                    <Button variant="warning" size="sm">
                      Hapus
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
      <AppModal
        show={show}
        handleClose={handleCloseModal}
        title={isEdit ? "Edit User" : "Create New User"}
        submitText={isEdit ? "Save Change" : "Save"}
        variant={isEdit ? "warning" : "primary"}
        isLoading={submitLoading}
        formId="user-form"
      >
        <UserForm
            errors={validationError}
          formId="user-form"
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleSubmit}
        />
      </AppModal>
    </Container>
  );
};
export default User;
