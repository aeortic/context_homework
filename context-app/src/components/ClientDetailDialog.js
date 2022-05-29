import React from 'react'
import parse from 'html-react-parser'

import Title from '../components/DesignSystems/Text/Title'
import Dialog, {Header, Body, Footer} from '../components/DesignSystems/Dialog/Dialog';
import CloseButton from '../components/DesignSystems/Buttons/CloseButton'
import './ClientDetailDialog.css'

export default function ClientDetailDialog({
  onClose,
  client: {
    name,
    title,
    avatar,
    quote,
    nationality,
  }
}) {

  return (
    <Dialog onClose={onClose}>
      <Header>
        <Title>{parse(name)}</Title>
        <CloseButton onClick={onClose} />
      </Header>
      <Body>
        <h3>{title}</h3>
        <div className="ClientDetailDialog-detailContainer">
          <img src={avatar} />
          <div className="ClientDetailDialog-details">
            <i>{quote}</i>
            <div>
              {nationality}
            </div>
          </div>
        </div>
      </Body>
    </Dialog>
  )
}
