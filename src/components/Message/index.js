import React from 'react';
import styles from './Message.module.css';
import { currentUserId } from '../../util';

function Message({ message }) {
  const isCurrentUser = currentUserId === message.participant.id;
  return (
    <div className={styles.container}>
      {!isCurrentUser && <span>{message.participant.first_name}</span>}
      <div className={isCurrentUser ? styles.userMessage : styles.participantMessage}>
        <p className={styles.messageContent}>{message.content}</p>
        <div className={isCurrentUser ? styles.messageTimestampRight : styles.messageTimestampLeft}>{ new Date(message.created_at).toLocaleString()}</div>
      </div>
    </div>
  );
}

export default Message;
