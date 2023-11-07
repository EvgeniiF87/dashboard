export interface IInputsProfile {
  value: string
  label: string
  placeholder: string 
  requierd?: boolean
  type?: string
}

export const breadcrumbProfileDataPage = [
  { name: "Главная", href: "/" },
  { name: "Личный кабинет", href: "profile/:id" },
];

export const optionsProfileData = [
  { id: '0', value: 'SelectCategory', label: 'Выберите должность' },
  { id: '1', value: "administrator", label: "Администратор" },
  { id: '2', value: "manager", label: "Менеджер" },
  { id: '3', value: "client", label: "Клиент" },
];

export const inputsLeft: IInputsProfile[] = [
  { value: "name", label: "Имя", placeholder: "Введите имя", requierd: true },
  { value: "lastName", label: "Фамилия", placeholder: "Введите фамилию", requierd: true },
  { value: "patronymic", label: "Отчество", placeholder: "Введите отчество" },
  { type: "password", value: "password", label: "Пароль", placeholder: "Введите пароль", requierd: true },
  { type: "password", value: "confirmPassword", label: "Подтверждение пароля", placeholder: "Подтвердите пароль", requierd: true },
];

export const inputsRight: IInputsProfile[] = [
  { type: 'email', value: "email", label: "E-mail", placeholder: "Введите e-mail", requierd: true },
  { type: 'tel', value: "phone", label: "Телефон", placeholder: "Введите номер", requierd: true },
  { value: "netowrk", label: "Соцсеть", placeholder: "Введите соцсеть" },
]