"use client";
import React, { useEffect, useState } from "react";
import {
  Button,
  Table,
  Form,
  Row,
  Col,
  Pagination,
  Card,
  Navbar,
  Container,
  Nav,
} from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "src/toolkit";
import { useParams } from "next/navigation";
import {
  getTransections,
  getTransectionsByCustomer,
} from "src/toolkit/Transaction/reducer";

const CommanTableTransactions = () => {
  const dispatch: AppDispatch = useDispatch();
  const { transections, totalPages, profitOrLossValue } = useSelector(
    (state: RootState) => state.Transaction
  );
  const params: any = useParams();

  console.log(params);

  const [searchTerm, setSearchTerm] = useState("");
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (params?.id) {
      dispatch(
        getTransectionsByCustomer({
          searchText: searchTerm,
          page: currentPage,
          startDate,
          endDate,
          id: params?.id,
        })
      );
    }
  }, [dispatch, searchTerm, currentPage, startDate, endDate, params?.id]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
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
                <Nav.Link href="/addTransaction">Add Transaction</Nav.Link>
                <Nav.Link href="/addCustomer">Add Customer</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h4>Recent Transactions</h4>
        <Row className="mb-3">
          <Col md={4}>
            <Form.Control
              type="text"
              placeholder="Search by Customer Name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Col>
          <Col md={3}>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              placeholderText="Start Date"
              className="form-control"
            />
          </Col>
          <Col md={3}>
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              placeholderText="End Date"
              className="form-control"
            />
          </Col>
        </Row>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Transaction Type</th>
              <th>Customer Name</th>
              <th>Credit</th>
              <th>Debit</th>
              <th>Cash Type</th>
              {/* <th>Actions</th> */}
            </tr>
          </thead>
          <tbody>
            {transections.map((transaction: any, index: any) => (
              <tr key={index}>
                <td>{transaction.transactionType}</td>
                <td>{transaction?.customer_Id?.name}</td>
                <td>
                  {transaction.cashType === "credit" &&
                    formatCurrency(transaction.amount)}
                </td>
                <td>
                  {transaction.cashType === "debit" &&
                    formatCurrency(transaction.amount)}
                </td>
                <td>{transaction.cashType}</td>
                {/* <td>
                <Button variant="info" onClick={() => onEdit && onEdit(index)}>
                  Edit
                </Button>
              </td> */}
              </tr>
            ))}
          </tbody>
        </Table>

        {/* Pagination Controls */}
        <Pagination className="justify-content-center mt-4">
          <Pagination.First
            onClick={() => handlePageChange(1)}
            disabled={currentPage === 1}
          />
          <Pagination.Prev
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          />
          {[...Array(totalPages)].map((_, pageIndex) => (
            <Pagination.Item
              key={pageIndex}
              active={pageIndex + 1 === currentPage}
              onClick={() => handlePageChange(pageIndex + 1)}
            >
              {pageIndex + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          />
          <Pagination.Last
            onClick={() => handlePageChange(totalPages)}
            disabled={currentPage === totalPages}
          />
        </Pagination>

        <footer className="bg-light p-3">
          <Card className="text-center">
            <Card.Body>
              <Card.Title className="display-4">{profitOrLossValue}</Card.Title>
              <Card.Text className="lead">Total Balance</Card.Text>
            </Card.Body>
          </Card>
        </footer>
      </div>
    </>
  );
};

export default CommanTableTransactions;
