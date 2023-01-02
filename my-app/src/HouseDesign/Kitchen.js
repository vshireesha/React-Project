import React, { Component } from "react";

export class Kitchen extends Component {
  render() {
    return (
      <div className="container">
        <div className="flexBox">
          <h3> Iam Kitchen {this.props.kitchenColor}</h3>
          <div>Shelf</div>
          <div>Gas Stove</div>
          <div>Wash Besen</div>
        </div>
      </div>
    );
  }
}

export default Kitchen;
