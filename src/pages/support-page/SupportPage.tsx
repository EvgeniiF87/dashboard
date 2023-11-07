import { useState } from 'react';
import { ArrowUpSvg, ChatList, ContentHeader, IMessage } from '../../shared';

import styles from './SupportPage.module.scss';

const SupportPage = () => {

  const breadcrumbSupportPage = [
    { name: "Главная", href: "/" },
    { name: "Чат поддержки", href: null },
  ];

  const defaultMessages: IMessage[] = [
    {
      username: "Администратор",
      position: "left",
      message: "Здравствуйте! Вас приветствует служба поддержки. Чем можем вам помочь?",
    },
    {
      username: "Пользователь",
      position: "right",
      message: "Здравствуйте, не могу добавить тег события",
      avatar: "П"
    }
  ];

  const [messages, setMessages] = useState<IMessage[]>(defaultMessages)
  const [message, setMessage] = useState('')

  const addMessage = () => {
    if (message) {
      setMessages([
        ...messages,
        {
          username: "Пользователь",
          position: "right",
          message,
          avatar: 'П'
        },
      ])
      setMessage('')
    }
  }

  return (
      <div className={styles.wrapper}>
        <ContentHeader
          title="Чат поддержки"
          breadcrumbs={breadcrumbSupportPage}
        />
        <ChatList messages={messages}/>
        <div className={styles.messageInput}>
          <textarea
            value={message}
            placeholder="Введите текст"
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button
            onClick={addMessage}
            className={styles.arrow}
          >
            <ArrowUpSvg />
          </button>
        </div>
      </div>
  );
};

export default SupportPage;