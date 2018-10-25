import React, { Component } from "react";
import { currencyFormatter, toNumber } from "../../util";
import CurrencyInput from "../CurrencyInput/CurrencyInput";
import "./Calculator.css";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offer: 176000,
      serviceChargePercent: 1.5,
      serviceCharge: 2640,
      sellerAgentCommissionPercent: 0,
      sellerAgentCommission: 0,
      buyerAgentCommission: 0,
      repairCost: 0,
      mortgagePayoff: 0,
      closingCostsPercent: 0.9,
      closingCosts: 1591,
      netProceeds: 171769
    };
    this.handleChange = this.handleChange.bind(this);
  }

  calcTotals() {
    const {
      offer,
      serviceChargePercent,
      serviceCharge,
      sellerAgentCommissionPercent,
      sellerAgentCommission,
      buyerAgentCommission,
      repairCost,
      mortgagePayoff,
      closingCostsPercent,
      closingCosts
    } = this.state;

    const updatedService = (toNumber(offer) * serviceChargePercent) / 100;
    const updatedClosingCost = (toNumber(offer) * closingCostsPercent) / 100;
    const updatedNetProceeds =
      toNumber(offer) -
      updatedService -
      toNumber(sellerAgentCommission) -
      toNumber(buyerAgentCommission) -
      toNumber(repairCost) -
      toNumber(mortgagePayoff) -
      updatedClosingCost;

    this.setState({
      serviceCharge: updatedService,
      closingCosts: updatedClosingCost,
      netProceeds: updatedNetProceeds
    });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
    this.calcTotals();
  }

  render() {
    const {
      offer,
      serviceChargePercent,
      serviceCharge,
      sellerAgentCommissionPercent,
      sellerAgentCommission,
      buyerAgentCommission,
      repairCost,
      mortgagePayoff,
      closingCostsPercent,
      closingCosts,
      netProceeds
    } = this.state;

    return (
      <div className="Calculator">
        <header className="Calculator__header">
          <p>Sell Directly</p>
          <p>{currencyFormatter(offer)}</p>
        </header>
        <section>
          <CurrencyInput
            label="Offer / Contract price"
            name="offer"
            handleChange={this.handleChange}
            value={currencyFormatter(this.state.offer)}
          />
          <div>
            Service charge {serviceChargePercent}%{" "}
            {currencyFormatter(serviceCharge)}
          </div>
          <CurrencyInput
            label="Seller agent commission percent"
            name="sellerAgentCommissionPercent"
            handleChange={this.handleChange}
            value={toNumber(this.state.sellerAgentCommissionPercent)}
          />
          <CurrencyInput
            label="Seller agent commission"
            name="sellerAgentCommission"
            handleChange={this.handleChange}
            value={currencyFormatter(this.state.sellerAgentCommission)}
          />
          <div>Buyer agent commission {buyerAgentCommission}</div>
          <CurrencyInput
            label="Estimated repair costs"
            name="repairCost"
            handleChange={this.handleChange}
            value={currencyFormatter(this.state.repairCost)}
          />
          <CurrencyInput
            label="Mortgage payoff"
            name="mortgagePayoff"
            handleChange={this.handleChange}
            value={currencyFormatter(this.state.mortgagePayoff)}
          />
          <div>
            Other closing costs {closingCostsPercent}%{" "}
            {currencyFormatter(closingCosts)}
          </div>
        </section>
        <section>
          Estimated net proceeds {currencyFormatter(netProceeds)}
        </section>
      </div>
    );
  }
}

export default Calculator;
