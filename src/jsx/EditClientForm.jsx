import React from "react";
import { isValidNumber } from "../validationPhone";

const getStyle = (isTouched, isValid) => {
  if (isTouched && !isValid) {
    return { border: "solid 1px red" };
  }

  return null;
};

export class EditClientForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.clientInformation.name,
      phone: this.props.clientInformation.phone,
      isBuy: this.props.clientInformation.isBuy,
      isTouched: this.props.clientInformation.isTouched
    };
  }

  onBlur = evt => {
    this.setState({
      isTouched: true
    });
  };

  render() {
    return (
      <form onSubmit={e => e.preventDefault()}>
        <input
          type="text"
          value={this.state.name}
          onChange={e =>
            this.setState({
              name: e.target.value
            })
          }
        />
        <input
          type="text"
          value={this.state.phone}
          maxLength="13"
          style={getStyle(
            this.state.isTouched,
            isValidNumber(this.state.phone)
          )}
          onBlur={this.onBlur}
          onChange={e =>
            this.setState({
              phone: e.target.value
            })
          }
        />
        <select
          type="text"
          value={this.state.isBuy}
          onChange={e =>
            this.setState({
              isBuy: e.target.value
            })
          }
        >
          <option value="no purchases">no purchases</option>
          <option value="one purchases">one purchases</option>
          <option value="more purchases">more purchases</option>
        </select>
        <button
          onClick={() => {
            if (
              this.state.name &&
              this.state.name.trim() &&
              isValidNumber(this.state.phone)
            ) {
              this.setState({ name: "", phone: "", isBuy: "" });
              this.props.onSave(
                this.state.name,
                this.state.phone,
                this.state.isBuy
              );
            }
          }}
        >
          Save
        </button>
        <button onClick={() => this.props.onCancel()}>Cancel</button>
      </form>
    );
  }
}
