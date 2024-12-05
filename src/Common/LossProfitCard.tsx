"use client";
import React, { useEffect, useState } from "react";
import { Button, Form as BootstrapForm, Row, Col, Card } from "react-bootstrap";
import { AppDispatch, RootState } from "src/toolkit";
import { useDispatch, useSelector } from "react-redux";
import {
  getProfitOrLoss,
} from "src/toolkit/Transaction/reducer";

interface CommanTableProps {
  transactions: boolean;
}

const LossProfitCard = (props: CommanTableProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const [profitOrLoss, setProfitOrLoss] = useState(0);
  const { profitOrLossValue } = useSelector(
    (state: RootState) => state.Transaction
  );

  useEffect(() => {
    dispatch(getProfitOrLoss());
    setProfitOrLoss(profitOrLossValue);
  }, [dispatch, props.transactions, profitOrLossValue, profitOrLoss]);

  return (
    <footer className="bg-light p-3">
      <Card className="text-center">
        <Card.Body>
          <Card.Title className="display-4">{profitOrLoss}</Card.Title>
          <Card.Text className="lead">Total Balance</Card.Text>
        </Card.Body>
      </Card>
    </footer>
  );
};

export default LossProfitCard;
