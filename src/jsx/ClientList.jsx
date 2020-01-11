import React from "react";
import { AddClientForm } from "./AddClientForm";

function addClient(clients, newClient) {
  return [...clients, newClient];
}

function deleteClient(clients, id) {
  const clientIndex = clients.findIndex(client => client.id === id);
  return [...clients.slice(0, clientIndex), ...clients.slice(clientIndex + 1)];
}

export class ClientList extends React.Component {
  state = {
    clients: []
  };
  nextId = 1;

  render() {
    return (
      <>
        <AddClientForm
          onSave={(name, phone) => {
            const newClient = {
              id: this.nextId,
              name,
              phone
            };
            this.setState({
              clients: addClient(this.state.clients, newClient)
            });
            this.nextId++;
          }}
        />
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Phone</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.clients.map(newClient => (
              <tr key={newClient.id}>
                <td>{newClient.id}</td>
                <td>{newClient.name}</td>
                <td>{newClient.phone}</td>
                <td>
                  <button
                    onClick={evt =>
                      this.setState({
                        clients: deleteClient(this.state.clients, newClient.id)
                      })
                    }
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}
