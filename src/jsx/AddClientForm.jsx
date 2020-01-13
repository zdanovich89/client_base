import React from "react";
import { isValidNumber } from "../validationPhone";

const getStyle = (isTouched, isValid) => {
  if (isTouched && !isValid) {
    return { border: "solid 1px red" };
  }

  return null;
};

export class AddClientForm extends React.Component {
  state = {
    name: "",
    phone: "",
    isBuy: undefined,
    isTouched: false
  };

  onChange = evt => {
    this.setState({
      phone: evt.target.value
    });
  };

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
          placeholder="Name"
          value={this.state.name}
          onChange={e =>
            this.setState({
              name: e.target.value
            })
          }
        />
        <input
          type="text"
          placeholder="Phone"
          value={this.state.phone}
          maxLength="13"
          style={getStyle(
            this.state.isTouched,
            isValidNumber(this.state.phone)
          )}
          onBlur={this.onBlur}
          maxLength="13"
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
              this.setState({
                name: "",
                phone: "",
                isBuy: undefined,
                isTouched: false
              });
              this.props.onSave(
                this.state.name,
                this.state.phone,
                this.state.isBuy
              );
            }
          }}
        >
          Add
        </button>
      </form>
    );
  }
}
