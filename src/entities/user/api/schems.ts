export const GET_ALL_USERS = `
  query {
    users {
      id
      email
      name
    }
  }
`;

export const GET_USER_ID = `
  query($id: Int!) {
    user(id: $id) {
      id
      email
      name
  }
}
`;


export const USER_REMOVE = `
  mutation(
    $id: Int!
  ) {
    removeUser(
      id: $id
  ) {
      name
      id
      email
    }
  }
`;

export const USER_UPDATE = `
  mutation(
    $id: ID! 
    $email: String! 
    $name: String!
  ) {
  updateUser(updateUserInput: { 
    id: $id 
    email: $email 
    name: $name}
  ) {
  	  name
      email
      id
  }
}
`;
