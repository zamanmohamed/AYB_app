"use client";
import React, { useEffect, useState } from "react";
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
import Select from "react-select";
import CommanTableTransactions from "@common/CommanTableTransactions";
import { AppDispatch, RootState } from "src/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "src/toolkit/User/reducer";
import { createTransaction } from "src/toolkit/Transaction/reducer";
import LossProfitCard from "@common/LossProfitCard";

interface TransactionFormValues {
  transactionType: string;
  cashType: string;
  amount: number;
  customer: string;
}

const TransactionSchema = Yup.object().shape({
  transactionType: Yup.string().required("Transaction Type is required"),
  cashType: Yup.string().required("Transaction Type is required"),
  amount: Yup.number()
    .required("Debit is required")
    .min(1, "Must be positive "),
  customer: Yup.string().required("Customer is required"),
});

const AddTransaction: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { users, totalPages, getAllUserStatus } = useSelector(
    (state: RootState) => state.User
  );

  const [transactions, setTransactions] = useState(false);

  useEffect(() => {
    dispatch(getUsers({ page: 1, limit: 100 }));
  }, [dispatch]);

  const [selectedLink, setSelectedLink] = useState<{
    label: string;
    value: string;
  } | null>(null);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const handleFormSubmit = (
    values: TransactionFormValues,
    resetForm: () => void
  ) => {
    dispatch(createTransaction({ ...values, customer_Id: values.customer }));
    setTransactions((val) => !val);
    window.location.reload();
    resetForm();
    setSelectedLink(null);
  };

  return (
    <>
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

        <h2 className="mb-4">Add Transaction </h2>
        <Formik
          enableReinitialize
          initialValues={{
            transactionType: "",
            cashType: "",
            amount: 0,
            customer: "",
          }}
          validationSchema={TransactionSchema}
          onSubmit={(values, { resetForm }) =>
            handleFormSubmit(values, resetForm)
          }
        >
          {({ errors, touched, setFieldValue }) => (
            <Form>
              <Row>
                <Col md={6}>
                  <BootstrapForm.Group controlId="transactionType">
                    <BootstrapForm.Label>Transaction Type</BootstrapForm.Label>
                    <Field
                      as="select"
                      name="transactionType"
                      className="form-control"
                    >
                      <option value="">Select Category</option>
                      <option value="cash_in_hand">Cash in Hand</option>
                      <option value="cash_in_bank">Cash in Bank</option>
                    </Field>
                    <ErrorMessage
                      name="transactionType"
                      component="div"
                      className="text-danger"
                    />
                  </BootstrapForm.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <BootstrapForm.Group controlId="amount">
                    <BootstrapForm.Label>Amount</BootstrapForm.Label>
                    <Field
                      name="amount"
                      type="number"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="amount"
                      component="div"
                      className="text-danger"
                    />
                  </BootstrapForm.Group>
                </Col>

                <Col md={6}>
                  <BootstrapForm.Group controlId="cashType">
                    <BootstrapForm.Label>Cash Type</BootstrapForm.Label>
                    <Field as="select" name="cashType" className="form-control">
                      <option value="">Select Cash Type</option>
                      <option value="debit">Debit</option>
                      <option value="credit">Credit</option>
                    </Field>
                    <ErrorMessage
                      name="cashType"
                      component="div"
                      className="text-danger"
                    />
                  </BootstrapForm.Group>
                </Col>
              </Row>

              {users.length > 0 && (
                <Row>
                  <Col md={12}>
                    <BootstrapForm.Group controlId="customer">
                      <BootstrapForm.Label>Customer</BootstrapForm.Label>
                      <Select
                        options={[
                          ...users.map((r: any) => {
                            return { value: r._id, label: r.name };
                          }),
                        ]}
                        value={selectedLink}
                        onChange={(option: any) => {
                          setSelectedLink(option);
                          setFieldValue("customer", option ? option.value : "");
                        }}
                        placeholder="Select Customer"
                        isClearable
                      />
                      <ErrorMessage
                        name="customer"
                        component="div"
                        className="text-danger"
                      />
                    </BootstrapForm.Group>
                  </Col>
                </Row>
              )}

              <Button type="submit" className="mt-4" variant="primary">
                {editingIndex !== null
                  ? "Update Transaction"
                  : "Add Transaction"}
              </Button>
            </Form>
          )}
        </Formik>

        <LossProfitCard transactions={transactions} />

        <div className="mt-5">
          <CommanTableTransactions transactions={transactions} />
        </div>

        {/* Sticky footer for balance */}
        {/* <footer className="bg-light p-3">
        <Card className="text-center">
          <Card.Body>
            <Card.Title className="display-4">500000</Card.Title>
            <Card.Text className="lead">Total Balance</Card.Text>
          </Card.Body>
        </Card>
      </footer> */}
      </div>
    </>
  );
};

export default AddTransaction;
