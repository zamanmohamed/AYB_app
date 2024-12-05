"use client";
import React, { useState } from "react";
import { Button, Table, Form, Row, Col, Pagination } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "src/toolkit";

interface Capital {
  transactionType: string;
  cashType: string;
  amount: number;
  customer: string;
  date?: string;
}

interface CommanTableProps {
  capitalsPrpop: boolean;
  onEdit?: (index: number) => void;
}

const CommanTableCapital = ({ capitalsPrpop, onEdit }: CommanTableProps) => {
  const dispatch: AppDispatch = useDispatch();
  const { Capitals, totalPages, getAllUserStatus } = useSelector(
    (state: RootState) => state.Capital
  );

  const [searchTerm, setSearchTerm] = useState("");
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Customize the number of items per page

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
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Capitals.map((transaction: any, index: any) => (
            <tr key={index}>
              {/* <td>{transaction.transactionType}</td>
              <td>{transaction.customer}</td>
              <td>{formatCurrency(transaction.amount)}</td>
              <td>{formatCurrency(transaction.amount)}</td>
              <td>{transaction.cashType}</td> */}
              <td>
                <Button variant="info" onClick={() => onEdit && onEdit(index)}>
                  Edit
                </Button>
              </td>
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
    </>
  );
};

export default CommanTableCapital;
