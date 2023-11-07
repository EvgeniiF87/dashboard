import styles from './ProfileData.module.scss'
import { AvatarSvg, ContentHeader, Dropdown, breadcrumbProfileDataPage, optionsProfileData } from '../../shared'
import ProfileDataForm from '../../widgets/user/profile-data-form/ProfileDataForm';

const ProfileData = () => {

  return (
    <div>
      <ContentHeader
        title="Данные профиля"
        breadcrumbs={breadcrumbProfileDataPage}
      />
      <div className={styles.content}>
        <p className={styles.required}>
          <span>*</span>
          Поля, обязательные для заполнения
        </p>
        <Dropdown
          error={false}
          errorText="Не выбрана должность"
          label="Должность"
          onSelect={() => {}}
          // onSelect={(value) => setSelecDirection(value)}
          options={optionsProfileData}
          width={480}
          selected={optionsProfileData[0]}
        />
        <div className={styles.photoProfile}>
          <div className={styles.avatar}>
            <AvatarSvg/>
          </div>
          <div>
            <h2 className={styles.photoTitle}>Фотография</h2>
            <div className={styles.photoOptions}>
              <span>Добавить</span>
              <span>Изменить</span>
              <span>Удалить фото</span>
            </div>
          </div>
        </div>
        <ProfileDataForm/>
      </div>
    </div>
  );
}

export default ProfileData