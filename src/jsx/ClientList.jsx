import React from "react";
import { AddClientForm } from "./AddClientForm";
import { EditClientForm } from "./EditClientForm";

function addClient(clients, client) {
  return [...clients, client];
}

function deleteClient(clients, id) {
  const clientIndex = clients.findIndex(client => client.id === id);
  return [...clients.slice(0, clientIndex), ...clients.slice(clientIndex + 1)];
}

function updateClients(clients, id, fieldToUpdate) {
  const clientIndex = clients.findIndex(client => client.id === id);
  const clientToUpdate = clients[clientIndex];
  const clientCopy = { ...clientToUpdate, ...fieldToUpdate }; //
  return [
    ...clients.slice(0, clientIndex),
    clientCopy,
    ...clients.slice(clientIndex + 1)
  ];
}

export class ClientList extends React.Component {
  state = {
    clients: []
  };
  nextId = 1;

  render() {
    if (this.state.clientToEdit) {
      return (
        <EditClientForm
          clientInformation={this.state.clients.find(
            client => client.id === this.state.clientToEdit
          )}
          onSave={(name, phone) => {
            const copy = updateClients(
              this.state.clients,
              this.state.clientToEdit,
              {
                name,
                phone
              }
            );

            this.setState({
              clients: copy,
              clientToEdit: null
            });
          }}
          onCancel={() =>
            this.setState({
              clientToEdit: null
            })
          }
        />
      );
    }
    return (
      <>
        <AddClientForm
          onSave={(name, phone) => {
            const client = {
              id: this.nextId,
              name,
              phone
            };
            this.setState({
              clients: addClient(this.state.clients, client)
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
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.clients.map(client => (
              <tr key={client.id}>
                <td>{client.id}</td>
                <td>{client.name}</td>
                <td>{client.phone}</td>
                <td>
                  <button
                    onClick={evt =>
                      this.setState({
                        clients: deleteClient(this.state.clients, client.id)
                      })
                    }
                  >
                    delete
                  </button>
                </td>
                <td>
                  <button
                    onClick={() =>
                      this.setState({
                        clientToEdit: client.id
                      })
                    }
                  >
                    Edit
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
