import React from 'react';
import styles from './Message.module.css';
import { currentUserId } from '../../util';

function Message({ message }) {
  const isCurrentUser = currentUserId === message.participant.id;
  return (
  <li className={isCurrentUser ? styles.me : styles.participant}>
    {message.content}
  </li>
  );
}

export default Message;
