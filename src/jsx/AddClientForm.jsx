import React from "react";

export class AddClientForm extends React.Component {
  state = {
    name: "",
    phone: ""
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
          Add
        </button>
      </form>
    );
  }
}
