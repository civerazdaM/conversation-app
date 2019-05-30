import React from 'react';
import styles from './Conversation.module.css'

function Conversation({ conversation }) {
  return (
    <a className={styles.container} href={`${conversation.id}`}>
      <img alt={`${conversation.participants[1].first_name} ${conversation.participants[1].last_name}`} src={conversation.participants[1].avatar_url} className={styles.avatar} />
      <span className={styles.name}>{`${conversation.participants[1].first_name} ${conversation.participants[1].last_name}`}</span>
    </a>
  );
}

export default Conversation;
