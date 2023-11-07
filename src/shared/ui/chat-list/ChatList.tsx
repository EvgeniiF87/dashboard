import { FC, useEffect, useRef } from 'react'
import { Message, IMessage } from '../message/Message'
import styles from './ChatLIst.module.scss'

interface IChatList {
  messages: IMessage[]
}

const ChatList: FC<IChatList> = ({messages}) => {

  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    ref.current?.scrollIntoView({behavior: 'smooth'})
  }, [messages])

  return (
    <div className={styles.messages}>
    <ul>
      {messages.map((item, index) => (
        <Message
          username={item.username}
          position={item.position}
          message={item.message}
          avatar={item.avatar}
          key={index}
        />
      ))}
    </ul>
    <div ref={ref}></div>
  </div>
  )
}

export { ChatList }