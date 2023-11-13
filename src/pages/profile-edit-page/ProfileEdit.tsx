import { useState } from 'react'
import { AddCircle, AvatarOption, AvatarSvg, ButtonRG, ContentHeader, EmptyPhoto, Input, TrashSvg, breadcrumbProfileEditPage, editProfileInputs, useMediaFiles } from '../../shared';

import styles from './ProfileEdit.module.scss'

const ProfileEdit = () => {

  const [values, setValues] = useState({
    name: '',
    lastName: '',
    patronymic: '',
    password: '',
    confirmPassword: '',
    email: '',
    phone: '',
  })

  const mediaImages = useMediaFiles()

  return (
    <div className={styles.wrapper}>
      <ContentHeader
        title="Редактирование профиля"
        breadcrumbs={breadcrumbProfileEditPage}
      />
      <div className={styles.content}>
        {/* <Dropdown
          error={false}
          errorText="Не выбрана должность"
          label="Должность"
          onSelect={() => {}}
          // onSelect={(value) => setSelecDirection(value)}
          options={optionsProfileData}
          width={480}
          selected={optionsProfileData[0]}
        /> */}
        <div className={styles.photoProfile}>
          {mediaImages.fileList.length ? (
            <img
              className={styles.avatar}
              onClick={() =>
                mediaImages.handleEditFile(mediaImages.fileList[0].id)
              }
              src={String(mediaImages.fileList[0].result)}
              alt=""
            />
          ) : (
            <div className={styles.avatar}>
              <AvatarSvg color="#D7D7D7" />
            </div>
          )}
          <div>
            {mediaImages.fileList.length ? (
              <div className={styles.options}>
                <AvatarOption
                  onClick={() =>
                    mediaImages.handleEditFile(mediaImages.fileList[0].id)
                  }
                  text="Изменить фото"
                  Svg={EmptyPhoto}
                />
                <AvatarOption
                  onClick={() =>
                    mediaImages.removeFile(mediaImages.fileList[0].id)
                  }
                  text="Удалить фото"
                  Svg={TrashSvg}
                />
              </div>
            ) : (
              <>
                <input
                  onChange={mediaImages.changeFile}
                  ref={mediaImages.fileRef}
                  id={styles.photo}
                  type="file"
                />
                <label className={styles.changePhoto} htmlFor={styles.photo}>
                  <div className={styles.icon}>
                    <AddCircle color="#000" />
                  </div>
                  <span>Добавить фото</span>
                </label>
              </>
            )}
          </div>
        </div>
        <div className={styles.inputs}>
          {editProfileInputs.map((input) => (
            <Input
            key={input.label}
              errorText={"Error"}
              value={values[input.value as keyof typeof values]}
              onChange={(e) =>
                setValues({ ...values, [input.value]: e.target.value })
              }
              label={input.label}
              placeholder={input.placeholder}
              required={input.requierd}
              type={input?.type}
            />
          ))}
        </div>
        <div>
          <p className={styles.required}>
            <span>*</span>
            Поля, обязательные для заполнения
          </p>
          <p>
            Пароль должен содержать 8-12 символов, а также, строчные буквы и
            символы @*%$#!
          </p>
        </div>
      </div>
      <div className={styles.button}>
        <ButtonRG>Сохранить</ButtonRG>
      </div>
    </div>
  );
}

export default ProfileEdit