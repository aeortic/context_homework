import React, {useState, useEffect} from 'react'
import ClientSummary from './ClientSummary'
import Filter from './Filter'
import './ClientList.css';

export default function ClientList({clientList = []}) {

  const [filteredClientList, setFilteredClientList] = useState([])

  useEffect(() => {
    if (clientList) {
      setFilteredClientList(clientList)
    }
  }, [clientList])

  return (
    <div className="ClientList">
      <Filter
        label="Filter"
        unfilteredList={clientList}
        onChange={(list) => setFilteredClientList(list)}
      />
      <ul>{filteredClientList.map(client => (
          <li key={`client-${client.name}`}>
            <ClientSummary client={client} />
          </li>
        ))}
      </ul> 
    </div>
  );
}
