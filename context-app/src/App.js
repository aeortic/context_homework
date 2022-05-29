import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Title from './components/DesignSystems/Text/Title'
import ClientList from './components/ClientList'
import './App.css';

import {loadClientList} from './actions/clientActions'
export default function App() {

  const clientList = useSelector(state => {
    return state.clients.clientList || []
  })

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadClientList())
  }, [])

  return (
    <div className="App">
      <div className="App-header">
        <Title>
          Client List
        </Title>
      </div>
      <ClientList clientList={clientList} />
    </div>
  );
}
