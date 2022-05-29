import React, {useState} from 'react'
import parse from 'html-react-parser'
import ClientDetailDialog from './ClientDetailDialog'
import './ClientSummary.css';

export default function ClientSummary({client}) {

  const {name, avatar, title} = client
  const [clientDetailOpen, setClientDetailOpen] = useState(false)

  const summaryClickHandler = () => {
    setClientDetailOpen(true)
  }

  return (
    <>
      <div 
        className="ClientSummary"
        onClick={() => summaryClickHandler()}
      >
        <div className="ClientSummary-avatar">
          <img src={avatar} />
        </div>
        <div className="ClientSummary-name">
          {parse(name)}
        </div>
        <div className="ClientSummary-title">
          {title}
        </div>
      </div>
      {clientDetailOpen && (
        <>
          <ClientDetailDialog
            client={client} 
            onClose={() => setClientDetailOpen(false)}
          />
        </>
      )}
    </>
  );
}
