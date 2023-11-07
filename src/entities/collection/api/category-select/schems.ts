export const CREATE_INTERESTING_CATEGORY_SELECT = `
mutation(
  $categoryId: Int!
  $interestingId: Int!
) {
  createInterestingCategorySelect(createInterestingCategorySelectInput: {
  categoryId: $categoryId
  interestingId: $interestingId
    }
  ) {
    id
    categoryId
    interestingId
  }
}
`;

export const REMOVE_INTERESTING_CATEGORY_SELECT = `
mutation($id: Int!) {
  removeInterestingCategorySelect(id: $id) {
    id
  }
}
`;

export const UPDATE_INTERESTING_CATEGORY_SELECT = `
mutation(
  $categoryId: Int
  $id: Int!
  $interestingId: Int
){
  updateInterestingCategorySelect(updateInterestingCategorySelectInput: { 
    categoryId: $categoryId
    id: $id
    interestingId:$interestingId
  }
  ) {
      id
  }
}
`;

export const GET_INTERESTING_CATEGORY_SELECT = `
query ($id: Int!) {
  interestingCategorySelect(id: $id) {
    id
    name
  }
}
`;