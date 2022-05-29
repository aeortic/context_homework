import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import './App.css';

import {loadClientList} from './actions/clientActions'

function App() {

  const clientList = useSelector(state => {
    console.log(state)
    return state.clients.clientList || []
  })

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadClientList())
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        Client List
      </header>
      <ul>{clientList.map(client => (
        <li key={`client-${client.name}`}>
          {
            JSON.stringify(client, null, 2)
          }
        </li>
      ))}</ul>
    </div>
  );
}

export default App;
