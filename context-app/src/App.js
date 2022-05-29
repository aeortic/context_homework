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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
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
      <div className="App-header">
        <Title>
          Client List
        </Title>
      </div>
      <ClientList clientList={clientList} />
    </div>
  );
}
