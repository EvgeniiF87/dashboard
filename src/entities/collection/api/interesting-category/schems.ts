export const CREATE_INTERESTING_CATEGORY = `
mutation(
  $name: String!
) {
  createInterestingCategory(createInterestingCategoryInput: {
    name: $name
    }
  ) {
    id
    name
  }
}
`;

export const REMOVE_INTERESTING_CATEGORY = `
mutation($id: Int!) {
  removeInterestingCategory(id: $id) {
    id
  }
}
`;

export const UPDATE_INTERESTING_CATEGORY = `
mutation(
  $id: Int!
  $name: String
){
  updateInterestingCategory(updateInterestingCategoryInput: { 
    id: $id
    name: $name
  }
  ) {
      id
    name
  }
}
`;

export const GET_INTERESTING_CATEGORY = `
query ($id: Int!) {
  interestingCategory(id: $id) {
    id
    name
  }
`;

export const GET_ALL_INTERESTING_CATEGORYS = `
query {
  interestingCategories {
    id
    name
  }
}
`;