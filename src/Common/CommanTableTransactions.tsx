"use client";
import moment from "moment";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button, Table, Form, Row, Col, Pagination } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "src/toolkit";
import { getTransections } from "src/toolkit/Transaction/reducer";

interface Transaction {
  transactionType: string;
  cashType: string;
  amount: number;
  customer: string;
  date?: string;
}

interface CommanTableProps {
  transactions: boolean;
  onEdit?: (index: number) => void;
}

const CommanTableTransactions = (props: CommanTableProps) => {
  const dispatch: AppDispatch = useDispatch();
  const { transections, totalPages } = useSelector(
    (state: RootState) => state.Transaction
  );

  const [searchTerm, setSearchTerm] = useState("");
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(
      getTransections({
        searchText: searchTerm,
        page: currentPage,
        startDate,
        endDate,
      })
    );
  }, [
    dispatch,
    searchTerm,
    currentPage,
    startDate,
    endDate,
    props.transactions,
  ]);

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
            <th>Date</th>
            {/* <th>Actions</th> */}
          </tr>
        </thead>
        <tbody>
          {transections.map((transaction: any, index: any) => (
            <tr key={index}>
              <td>{transaction.transactionType}</td>
              <td>
                <Link
                  href={`/getCustomerData/${transaction?.customer_Id?._id}`}
                >
                  {transaction?.customer_Id?.name}{" "}
                </Link>
              </td>
              <td>
                {transaction.cashType === "credit" &&
                  formatCurrency(transaction.amount)}
              </td>
              <td>
                {transaction.cashType === "debit" &&
                  formatCurrency(transaction.amount)}
              </td>
              <td>{moment(transaction.createdAt).format("YYYY-MM-DD")}</td>
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
    </>
  );
};

export default CommanTableTransactions;
