import React, { useEffect, useState } from 'react';
import styles from './Conversations.module.css';
import Conversation from '../Conversation';

function Conversations() {
  const [conversations, setConversations ] = useState([]);
  useEffect(() => {
    fetch('https://conversation-echo-api.tamedia-origami.ch/conversations')
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        setConversations(myJson)
      });
  }, []);
  return (
    <div className={styles.container}>
      {conversations.map(conversation => {
        return <Conversation conversation={conversation} key={conversation.id} />
      })}
    </div>
  );
}

export default Conversations;
