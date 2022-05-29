import React from 'react'
import ClientSummary from './ClientSummary'
import './ClientList.css';

export default function ClientList({clientList}) {

  return (
    <div className="ClientList">
      <ul>{clientList.map(client => (
          <li key={`client-${client.name}`}>
            <ClientSummary client={client} />
          </li>
        ))}
      </ul> 
    </div>
  );
}
