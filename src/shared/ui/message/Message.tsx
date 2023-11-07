import styles from './Message.module.scss'

export interface IMessage {
  username: string
  position: 'left' | 'right'
  message: string
  avatar?: string
}

const Message = ({username, position, message, avatar='А'}: IMessage) => {
  return (
    <li className={styles[position]}>
      <div className={styles.avatar}>{avatar}</div>
      <div className={styles.message}>
        <span>{username}</span>
        <p>{message}</p>
      </div>
    </li>
  );
}

export { Message }