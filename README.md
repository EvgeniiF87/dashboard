# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

// TODO remove "date-fns": "^2.30.0", in package.json

### User

Создание пользователя
<UserCreate 
   name={"new user name"}
   email={"new user email"}
   buttonText={"Опционально"}
   hrefAfterCreate={'Опционально'}
/>

Выход пользователя (после выхода пользователя перекидывает в указанный href)
<UserLogout 
   hrefAfterOut={"/"} 
   buttonText={"Опционально"} 
/>

Обновление пользователя, если передать id то обновляется пользователь по id 
  иначе пользователь меняет свои поля
<UserUpdate 
      email={'email update'}
      name={"name update"}
      buttonText={'Опционально'}
/>

Удаляем пользователя, если передать id то удаляется пользователь по id 
  иначе пользователь удаляет себя
<UserRemove 
      buttonText={"Удаляем пользователя"}
      navigateAfter="/"
      id={'Опционально'} //Number!
/>

Получить список всех пользователей хуком
 const { error, loading, usersList } = useAllUsers()


Забрасываем в стейт user.userInfo пользователя данные
<UserInfo
   id={Number(user.id)}
/>

Получить информацию о пользователе  хуком
 const { userInfo, error, loading } = useGetUserInfo()
 
примеры в page login
