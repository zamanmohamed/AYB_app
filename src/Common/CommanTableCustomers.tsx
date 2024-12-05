"use client";
import moment from "moment";
import React, { useEffect, useState } from "react";
import {
  Button,
  Table,
  Form,
  Row,
  Col,
  Pagination,
  Spinner,
} from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "src/toolkit";
import { getUsers } from "src/toolkit/User/reducer";

interface Customer {
  name: string;
  date?: string;
}

interface CommanTableProps {
  customers: boolean;
  onEdit?: (index: number) => void;
}

const CommanTableCustomers = (props: CommanTableProps) => {
  const dispatch: AppDispatch = useDispatch();
  const { users, totalPages, getAllUserStatus } = useSelector(
    (state: RootState) => state.User
  );

  const [searchTerm, setSearchTerm] = useState("");
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(
      getUsers({
        searchText: searchTerm,
        page: currentPage,
        startDate,
        endDate,
      })
    );
  }, [dispatch, searchTerm, currentPage, props.customers, startDate, endDate]);

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  if (getAllUserStatus === "loading") {
    return (
      <div className="text-center">
        <Spinner animation="border" />
      </div>
    );
  }

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
            <th>Name</th>
            <th>Added Date</th>
          </tr>
        </thead>
        <tbody>
          {users.map((transaction: any, index: any) => (
            <tr key={index}>
              <td>{transaction.name}</td>
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

export default CommanTableCustomers;
