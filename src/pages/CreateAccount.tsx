import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button, Form as BootstrapForm, Row, Col, Table, Card } from 'react-bootstrap';
import CreatableSelect from 'react-select/creatable'; // Import CreatableSelect

// Define the types for form values
interface TransactionFormValues {
  category: string;
  debit: number;
  credit: number;
  link: string;
}

// Validation schema using Yup
const TransactionSchema = Yup.object().shape({
  category: Yup.string().required('Category is required'),
  debit: Yup.number().required('Debit is required').min(0, 'Must be positive or zero'),
  credit: Yup.number().required('Credit is required').min(0, 'Must be positive or zero'),
  link: Yup.string().required('Link is required'),
});

// Utility function to format numbers without currency symbol
const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value);
};

// Fix for the selectedLink state type
const CreateAccount: React.FC = () => {
  const [transactions, setTransactions] = useState<TransactionFormValues[]>([]);
  const [linkOptions, setLinkOptions] = useState([
    { label: 'Link 1', value: 'Link 1' },
    { label: 'Link 2', value: 'Link 2' }
  ]); // Initial link options
  
  // Fix: Explicitly define the type for selectedLink
  const [selectedLink, setSelectedLink] = useState<{ label: string; value: string } | null>(null); 
  const [editingIndex, setEditingIndex] = useState<number | null>(null); // Track if editing a specific transaction

  // Calculate the total balance (Debit - Credit)
  const totalDebit = transactions.reduce((acc, transaction) => acc + transaction.debit, 0);
  const totalCredit = transactions.reduce((acc, transaction) => acc + transaction.credit, 0);
  const balance = totalDebit - totalCredit;

  // Determine the color and icon for the balance display
  const balanceColor = balance >= 0 ? 'text-success' : 'text-danger';
  const balanceIcon = balance >= 0 ? '⬆' : '⬇';

  // Function to handle selecting a transaction for editing
  const handleTransactionSelect = (index: number) => {
    const transaction = transactions[index];
    setEditingIndex(index); // Set the index to update instead of adding a new one
    setSelectedLink({ label: transaction.link, value: transaction.link });
  };

  // Function to handle updating or adding a transaction
  const handleFormSubmit = (values: TransactionFormValues, resetForm: () => void) => {
    if (editingIndex !== null) {
      // If we're editing a transaction, update it
      const updatedTransactions = [...transactions];
      updatedTransactions[editingIndex] = values;
      setTransactions(updatedTransactions);
      setEditingIndex(null); // Reset the editing state
    } else {
      // Otherwise, add a new transaction
      setTransactions([...transactions, values]);
    }
    resetForm();
    setSelectedLink(null); // Reset the selected link after submission
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Add Transaction (v1.0)</h2>
      <Formik
        enableReinitialize
        initialValues={{
          category: editingIndex !== null ? transactions[editingIndex].category : '',
          debit: editingIndex !== null ? transactions[editingIndex].debit : 0,
          credit: editingIndex !== null ? transactions[editingIndex].credit : 0,
          link: editingIndex !== null ? transactions[editingIndex].link : '',
        }}
        validationSchema={TransactionSchema}
        onSubmit={(values, { resetForm }) => handleFormSubmit(values, resetForm)}
      >
        {({ errors, touched, setFieldValue }) => (
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

            <Row>
              <Col md={12}>
                <BootstrapForm.Group controlId="link">
                  <BootstrapForm.Label>Link</BootstrapForm.Label>
                  <CreatableSelect
                    isClearable
                    options={linkOptions}
                    value={selectedLink} // Set the selected link
                    onChange={(option: any) => {
                      setSelectedLink(option); // Update the selected link
                      setFieldValue('link', option ? option.value : '');
                    }}
                    onCreateOption={(inputValue: string) => {
                      const newOption = { label: inputValue, value: inputValue };
                      const updatedOptions = [...linkOptions, newOption];
                      setLinkOptions(updatedOptions);

                      // Set newly created option as selected
                      const createdOption = { label: inputValue, value: inputValue };
                      setSelectedLink(createdOption);
                      setFieldValue('link', inputValue); // Automatically select the newly created link
                    }}
                  />
                  {errors.link && touched.link ? <div className="text-danger">{errors.link}</div> : null}
                </BootstrapForm.Group>
              </Col>
            </Row>

            <Button type="submit" className="mt-4" variant="primary">
              {editingIndex !== null ? 'Update Transaction' : 'Add Transaction'}
            </Button>
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
              <th>Link</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index}>
                <td>{transaction.category}</td>
                <td>{formatCurrency(transaction.debit)}</td>
                <td>{formatCurrency(transaction.credit)}</td>
                <td>{transaction.link}</td>
                <td>
                  <Button variant="info" onClick={() => handleTransactionSelect(index)}>
                    Edit
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      {/* Sticky footer for balance */}
      {/* <footer className="fixed-bottom bg-light p-3">
        <Card className="text-center">
          <Card.Body>
            <Card.Title className={`${balanceColor} display-4`}>
              {balanceIcon} {formatCurrency(balance)}
            </Card.Title>
            <Card.Text className="lead">Total Balance</Card.Text>
          </Card.Body>
        </Card>
      </footer> */}
    </div>
  );
};

export default CreateAccount;
