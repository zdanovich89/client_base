import React from "react";

export class AddClientForm extends React.Component {
  state = {
    clientInformation: [
      {
        name: "",
        phone: ""
      }
    ]
  };

  render() {
    return (
      <form onSubmit={e => e.preventDefault()}>
        <input
          type="text"
          placeholder="Name"
          value={this.state.clientInformation.name}
          onChange={e =>
            this.setState({
              name: e.target.value
            })
          }
        />
        <input
          type="text"
          placeholder="Phone"
          value={this.state.clientInformation.phone}
          onChange={e =>
            this.setState({
              phone: e.target.value
            })
          }
        />
        <button
          onClick={() => {
            if (this.state.name && this.state.phone) {
              this.setState({ name: "", phone: "" });
              this.props.onSave(this.state.name);
            }
          }}
        >
          Add
        </button>
      </form>
    );
  }
}
