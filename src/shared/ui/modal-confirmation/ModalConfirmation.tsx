import { useState } from 'react';
import style from './modalConfirmation.module.scss';
import { ErrorRad } from '../../svg/ErrorRad';

export default function ModalConfirmation() {
  const [toggle, isToggle] = useState(true);

  return (
    <>
      <div
        onClick={(evt) => {
          if (evt.target === evt.currentTarget) isToggle(false);
        }}
        className={
          toggle ? `${style.overflow} ${style.overflow_active}` : style.overflow
        }
      >
        <div className={style.container}>
          <ErrorRad />
          <h1 className={style.title}>Сохранить изменения?</h1>
          <p className={style.subtitle}>
            Несохраненные данные будут утеряны. Сохранить изменения перед тем,
            как выйти из режима редактирования?
          </p>
          <div className={style.button_container}>
            <button
              onClick={() => isToggle(false)}
              className={style.button_close}
            >
              Выйти без сохранения
            </button>
            <button
              onClick={() => isToggle(false)}
              className={style.button_save}
            >
              Сохранить
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
