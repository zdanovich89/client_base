import React from "react";

export class EditClientForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.clientInformation.name,
      phone: this.props.clientInformation.phone,
      isBuy: this.props.clientInformation.isBuy
    };
  }

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
              this.state.phone && this.state.phone.trim()
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
