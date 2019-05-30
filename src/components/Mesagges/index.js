import React, { useEffect, useState } from 'react';
import styles from './Messages.module.css';
import { withRouter } from 'react-router-dom';
import Message from '../Message';

function Messages({match: { params: { conversationId }}}) {
  const [messages, setMessages ] = useState([]);
  useEffect(() => {
    fetch(`https://conversation-echo-api.tamedia-origami.ch/conversations/${conversationId}/messages`)
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        setMessages(myJson);
      });
  }, [conversationId]);
  return (
    <div className={styles.container}>
      <ul>
      {messages.map(message => {
        return <Message message={message} key={message.id} />
      })}
      </ul>
    </div>
  );
}

export default withRouter(Messages);
