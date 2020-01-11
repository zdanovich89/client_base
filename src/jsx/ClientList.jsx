import React from "react";
import { AddClientForm } from "./AddClientForm";

function addClient(
  clients,
  newClient
) {
  return [...clients, newClient];
}


export class ClientList extends React.Component {
  state = {
    clients: [
      {
        id: "",
        name: "",
        phone: ""
      }
    ]
  };
  nextId = 1;

  render() {
    return (
      <>
        <AddClientForm
          onSave={ (name, phone) => {
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
            </tr>
          </thead>
          <tbody>
            {this.state.clients.map(newClient=> (
              <tr key={newClient.id}>
                <td >{newClient.id}</td>    
                <td >{newClient.name}</td> 
                <td >{newClient.phone}</td>         
              </tr>
            ))}
          
          </tbody>
        </table>
      </>
    );
  }
}
