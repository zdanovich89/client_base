import React from "react";

export class EditClientForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.clientInformation.name,
      phone: this.props.clientInformation.phone
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
        <button
          onClick={() => {
            if (
              this.state.name &&
              this.state.name.trim() &&
              this.state.phone && this.state.phone.trim()
            ) {
              this.setState({ name: "", phone: "" });
              this.props.onSave(this.state.name, this.state.phone);
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
