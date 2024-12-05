import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage, useFormikContext } from "formik";
import * as Yup from "yup";
import { Button, Form as BootstrapForm, Row, Col, Card } from "react-bootstrap";
import Select from "react-select";
import CommanTableCapital from "@common/CommanTableCapital";
import { AppDispatch } from "src/toolkit";
import { useDispatch } from "react-redux";
import { createcapital } from "src/toolkit/Capital/reducer";

interface CapitalFormValues {
  amount: number;
  cashType: string;
}

const CapitalSchema = Yup.object().shape({
  amount: Yup.number()
    .required("Debit is required")
    .min(1, "Must be positive "),
  cashType: Yup.string().required("Transaction Type is required"),
});

const AddCapital: React.FC = () => {
  const [Capitals, setCapitals] = useState(false);

  const dispatch: AppDispatch = useDispatch();

  const handleFormSubmit = (
    values: CapitalFormValues,
    resetForm: () => void
  ) => {
    dispatch(createcapital({ ...values, type: values.cashType }));
    resetForm();
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Add Capital (v1.0)</h2>
      <Formik
        enableReinitialize
        initialValues={{
          amount: 0,
          cashType: "",
        }}
        validationSchema={CapitalSchema}
        onSubmit={(values, { resetForm }) =>
          handleFormSubmit(values, resetForm)
        }
      >
        {({ errors, touched, setFieldValue }) => (
          <Form>
            <Row>
              <Col md={6}>
                <BootstrapForm.Group controlId="amount">
                  <BootstrapForm.Label>Amount</BootstrapForm.Label>
                  <Field name="amount" type="number" className="form-control" />
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
                    <option value="">Select Category</option>
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

            <Button type="submit" className="mt-4" variant="primary">
              {"Add Capital"}
            </Button>
          </Form>
        )}
      </Formik>

      <div className="mt-5">
        <CommanTableCapital capitalsPrpop={Capitals} />
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

export default AddCapital;
