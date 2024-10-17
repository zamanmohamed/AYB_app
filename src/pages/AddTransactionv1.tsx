import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button, Form as BootstrapForm, Row, Col, Table, Card } from 'react-bootstrap';

// Define the types for form values
interface TransactionFormValues {
  category: string;
  debit: number;
  credit: number;
  description?: string;
}

// Validation schema using Yup
const TransactionSchema = Yup.object().shape({
  category: Yup.string().required('Category is required'),
  debit: Yup.number().required('Debit is required').min(0, 'Must be positive or zero'),
  credit: Yup.number().required('Credit is required').min(0, 'Must be positive or zero'),
  description: Yup.string(),
});

// Utility function to format numbers without currency symbol
const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value);
};

const AddTransactionv1: React.FC = () => {
  const [transactions, setTransactions] = useState<TransactionFormValues[]>([]);

  // Calculate the total balance (Debit - Credit)
  const totalDebit = transactions.reduce((acc, transaction) => acc + transaction.debit, 0);
  const totalCredit = transactions.reduce((acc, transaction) => acc + transaction.credit, 0);
  const balance = totalDebit - totalCredit;

  // Determine the color and icon for the balance display
  const balanceColor = balance >= 0 ? 'text-success' : 'text-danger';
  const balanceIcon = balance >= 0 ? '⬆' : '⬇';

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Add Transaction (v1.0)</h2>
      <Formik
        initialValues={{
          category: '',
          debit: 0,
          credit: 0,
          description: '',
        }}
        validationSchema={TransactionSchema}
        onSubmit={(values, { resetForm }) => {
          setTransactions([...transactions, values]);
          resetForm();
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Row>
              <Col md={6}>
                <BootstrapForm.Group controlId="category">
                  <BootstrapForm.Label>Category</BootstrapForm.Label>
                  <Field as="select" name="category" className="form-control">
                    <option value="">Select Category</option>
                    <option value="cash_in_hand">Cash in Hand</option>
                    <option value="cash_in_bank">Cash in Bank</option>
                    <option value="other_cash">Other Forms of Cash</option>
                    <option value="payables">Amount Owed to Others</option>
                    <option value="receivables">Amount Owed to Us</option>
                  </Field>
                  <ErrorMessage name="category" component="div" className="text-danger" />
                </BootstrapForm.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <BootstrapForm.Group controlId="debit">
                  <BootstrapForm.Label>Debit</BootstrapForm.Label>
                  <Field name="debit" type="number" className="form-control" />
                  <ErrorMessage name="debit" component="div" className="text-danger" />
                </BootstrapForm.Group>
              </Col>

              <Col md={6}>
                <BootstrapForm.Group controlId="credit">
                  <BootstrapForm.Label>Credit</BootstrapForm.Label>
                  <Field name="credit" type="number" className="form-control" />
                  <ErrorMessage name="credit" component="div" className="text-danger" />
                </BootstrapForm.Group>
              </Col>
            </Row>

            <BootstrapForm.Group controlId="description" className="mt-3">
              <BootstrapForm.Label>Description (Optional)</BootstrapForm.Label>
              <Field name="description" type="text" className="form-control" />
            </BootstrapForm.Group>

            <Button type="submit" className="mt-4" variant="primary">Submit</Button>
          </Form>
        )}
      </Formik>

      <div className="mt-5">
        <h4>Recent Transactions</h4>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Category</th>
              <th>Debit (Rs)</th>
              <th>Credit (Rs)</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index}>
                <td>{transaction.category}</td>
                <td>{formatCurrency(transaction.debit)}</td>
                <td>{formatCurrency(transaction.credit)}</td>
                <td>{transaction.description || 'N/A'}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      {/* Sticky footer for balance */}
      <footer className="fixed-bottom bg-light p-3">
        <Card className="text-center">
          <Card.Body>
            <Card.Title className={`${balanceColor} display-4`}>
              {balanceIcon} {formatCurrency(balance)}
            </Card.Title>
            <Card.Text className="lead">Total Balance</Card.Text>
          </Card.Body>
        </Card>
      </footer>
    </div>
  );
};

export default AddTransactionv1;
