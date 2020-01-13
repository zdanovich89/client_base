import React from "react";

export class AddClientForm extends React.Component {
  state = {
    name: "",
    phone: "",
    isBuy: undefined
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
              this.state.phone &&
              this.state.phone.trim()
            ) {
              this.setState({ name: "", phone: "", isBuy: undefined });
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
