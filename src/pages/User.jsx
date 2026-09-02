import { Table, Container, Badge, Card, Row, Col, Button, Tab } from "react-bootstrap";
import UserModal from "../componen/UserModal";
import { useState } from "react";


const User=()=>{
    const [show, setShow]= useState(false);
    const handleCreate=()=>{
        setShow(true);
    }
    const handleCloseModal=()=>{
        setShow(false);
    }
    console.log(show); //false

    return(
        <Container className="py-4">
            <Card className="shadow-sm border-0">
                <Card.Body>
                    <Row className="mb-4 align-items-center">
                        <Col>
                        <h3>User Management</h3>
                        <p className="text-muted mb-0">Data User Management</p>
                        </Col>
                        <Col xs="auto">
                            <Button variant="primary" onClick={handleCreate}>+ Create New User</Button>
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
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
            <UserModal show={show} handleClose={handleCloseModal} />
        </Container>
    )
};
export default User;