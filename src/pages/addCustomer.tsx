import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage, useFormikContext } from "formik";
import * as Yup from "yup";
import {
  Button,
  Form as BootstrapForm,
  Row,
  Col,
  Card,
  Navbar,
  Container,
  Nav,
} from "react-bootstrap";
import CommanTableCustomers from "@common/CommanTableCustomers";
import { useDispatch, UseDispatch } from "react-redux";
import { AppDispatch } from "src/toolkit";
import { createUser, getUsers } from "src/toolkit/User/reducer";

interface CustomerFormValues {
  name: string;
}

const customerSchema = Yup.object().shape({
  name: Yup.string().required("Customer is required"),
});

const AddCustomer: React.FC = () => {
  const [customers, setcustomers] = useState(false);
  const dispatch: AppDispatch = useDispatch();

  const handleFormSubmit = (
    values: CustomerFormValues,
    resetForm: () => void
  ) => {
    dispatch(createUser(values)).then((data) => {
      if (data.meta.requestStatus === "fulfilled") {
        setcustomers((val) => !val);
      }
    });

    resetForm();
  };

  return (
    <div className="container">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/AddTransaction">Add Transaction</Nav.Link>
              <Nav.Link href="/addCustomer">Add Customer</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h2 className="mb-4">Add Customer</h2>
      <Formik
        enableReinitialize
        initialValues={{
          name: "",
        }}
        validationSchema={customerSchema}
        onSubmit={(values, { resetForm }) =>
          handleFormSubmit(values, resetForm)
        }
      >
        {({ errors, touched, setFieldValue }) => (
          <Form>
            <Row>
              <Col md={12}>
                <BootstrapForm.Group controlId="name">
                  <BootstrapForm.Label>name</BootstrapForm.Label>
                  <Field name="name" type="text" className="form-control" />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-danger"
                  />
                </BootstrapForm.Group>
              </Col>
            </Row>

            <Button type="submit" className="mt-4" variant="primary">
              {"Add customer"}
            </Button>
          </Form>
        )}
      </Formik>

      <div className="mt-5">
        <CommanTableCustomers customers={customers} />
      </div>

      {/* Sticky footer for balance */}
      {/* <footer className="fixed-bottom bg-light p-3">
        <Card className="text-center">
          <Card.Body>
            <Card.Title className="display-4">500000</Card.Title>
            <Card.Text className="lead">Total Balance</Card.Text>
          </Card.Body>
        </Card>
      </footer> */}
    </div>
  );
};

export default AddCustomer;
