import React from 'react';
import styles from './Conversation.module.css'
import { Link } from "react-router-dom";
import { currentUserId } from '../../util';

function Conversation({ conversation }) {
  const participant = conversation.participants.filter((p) => p.id !== currentUserId)[0];
  const participantFullName = `${participant.first_name} ${participant.last_name}`;
  return (
    <Link className={styles.container} to={`${conversation.id}`}>
      <img alt={participantFullName} src={participant.avatar_url} className={styles.avatar} />
      <span className={styles.name}>{participantFullName}</span>
    </Link>
  );
}

export default Conversation;
