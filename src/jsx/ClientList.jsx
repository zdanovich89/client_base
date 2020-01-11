import React from "react";
import { AddClientForm } from "./AddClientForm";

export class ClientList extends React.Component {
  state = {
    clientInformation: [
      {
        id: 1,
        name: "",
        phone: ""
      }
    ]
  };
  nextId = 2;

  render() {
    return (
      <>
        {/* <AddClientForm
          onSave={text => {
            const client = {
              id: this.nextId,
              text
            };
            this.setState({
              clients: addClient(this.state.clients, client)
            });
            this.nextId++;
          }}
        /> */}
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Lora</td>
              <td>+37533686999</td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }
}
