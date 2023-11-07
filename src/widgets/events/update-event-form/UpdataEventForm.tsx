import {  useState } from 'react';
import { useParams } from 'react-router-dom';
import { Input, WindowNotification } from '../../../shared';


import styles from './UpdataEventForm.module.scss';

const UpdataEventForm = () => {
  const {  } = useParams();
  const [titleValue, setTitleValue] = useState<string>('');

  const [value, ] = useState<{ title: '', dest: '' }>({ dest: '', title: '' });
  const [error, ] = useState<{ title: string | null, dest: string | null }>({
    title: null,
    dest: null,
  });
  const [valid, ] = useState(false);



  const handleSubmit:React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log('Submit');
  }

  // const changeValue = () => {
    // setValue({ ...value, [evt.target.name]: evt.target.value });
    // setError({ ...error, [evt.target.name]: evt.target.validationMessage });
    // setValid(evt.target.closest('form').checkValidity());
  // };

  return (
    <>
      <form className={styles.form} onSubmit={(evt) => handleSubmit(evt)}>
        <label>Title:</label>
            <Input
              errorText={'Error'}
              required
              minLength={3}
              error={false}
              value={titleValue}
              label="Title"
              placeholder="Введите наименование события"
              onChange={(e) => setTitleValue(e.target.value)}
             />
        <span>{error.title}</span>
        <label>Dest:</label>
        <input
          required
          minLength={3}
          value={value.dest}
          name="dest"
          onChange={() => {}}
          type="text"
        />
        {error.dest &&
        <span>{error.dest}</span>
        }
        <label>Начало: </label>
        <input type="date" />
        <label>До:</label>
        <input type="date" />
        <label>Публичное</label>
        <input type="checkbox" />
        <label> Рекомендуемое</label>
        <input type="checkbox" />
        <label>Когда начнется шоу: </label>
        <input type="date" />
        <button disabled={valid && false} type="submit">
          Редактировать
        </button>
      </form>
      {/*  WindowNotification для демонстрации */}
      <WindowNotification text={"какое то уведомление"} /> 
    </>
  );
};

export { UpdataEventForm };
