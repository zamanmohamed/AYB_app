import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button, Form as BootstrapForm } from 'react-bootstrap';

// Define the types for form values
interface TransactionFormValues {
  category: string;
  type: string;
  amount: number;
  description?: string;
}

// Validation schema using Yup
const TransactionSchema = Yup.object().shape({
  category: Yup.string().required('Category is required'),
  type: Yup.string().required('Transaction type is required'),
  amount: Yup.number()
    .required('Amount is required')
    .positive('Amount must be positive'),
  description: Yup.string(),
});

const AddTransaction: React.FC = () => {
  const initialValues: TransactionFormValues = {
    category: '',
    type: '',
    amount: 0,
    description: '',
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Add Transaction</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={TransactionSchema}
        onSubmit={(values, { resetForm }) => {
          console.log('Transaction Submitted', values);
          resetForm();
        }}
      >
        {({ errors, touched }) => (
          <Form>
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

            <BootstrapForm.Group controlId="type" className="mt-3">
              <BootstrapForm.Label>Transaction Type</BootstrapForm.Label>
              <Field as="select" name="type" className="form-control">
                <option value="">Select Type</option>
                <option value="debit">Debit</option>
                <option value="credit">Credit</option>
              </Field>
              <ErrorMessage name="type" component="div" className="text-danger" />
            </BootstrapForm.Group>

            <BootstrapForm.Group controlId="amount" className="mt-3">
              <BootstrapForm.Label>Amount</BootstrapForm.Label>
              <Field name="amount" type="number" className="form-control" />
              <ErrorMessage name="amount" component="div" className="text-danger" />
            </BootstrapForm.Group>

            <BootstrapForm.Group controlId="description" className="mt-3">
              <BootstrapForm.Label>Description (Optional)</BootstrapForm.Label>
              <Field name="description" type="text" className="form-control" />
            </BootstrapForm.Group>

            <Button type="submit" className="mt-4" variant="primary">Submit</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddTransaction;
