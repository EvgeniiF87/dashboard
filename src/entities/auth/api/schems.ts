export const AUTH_REGISTRATION = `
mutation(
  $avatar: String,
  $email: String!, 
  $name: String!, 
  $password: String!, 
  $phone: String,
  $roleId: Int
  ) {
  registrationMeneger(registrationUserInput: {
    avatar: $avatar
    email: $email
    name: $name
		password: $password
		phone: $phone
    roleId: $roleId
  }) {
    role
    token
    userId
  }
}
  `;

export const AUTH_LOGIN = `
mutation (
  $email: String!
  $password: String! 
  ) {
  signIn(signinUserInput:{
    email: $email
		password: $password
  }) {
    role
    token
    userId
  }
}
  `;



