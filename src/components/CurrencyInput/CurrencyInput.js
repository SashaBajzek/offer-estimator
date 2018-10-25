import React, { Component } from "react";
import "./CurrencyInput.css";

class CurrencyInput extends Component {
  render() {
    const { handleChange, label, name, value } = this.props;
    return (
      <div>
        <label htmlFor={name}>{label}</label>
        <input
          className="CurrencyInput"
          type="text"
          placeholder="TBD"
          name={name}
          onChange={handleChange}
          value={value}
          pattern="[0-9]*"
        />
      </div>
    );
  }
}

export default CurrencyInput;
