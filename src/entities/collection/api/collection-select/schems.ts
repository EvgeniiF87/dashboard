export const CREATE_INTERESTING_COLLECTION_SELECT = `
mutation(
  $eventId: Int
  $interestingId: Int
  $placeId: Int
) {
  createInterestingCollectionSelection(createInterestingCollectionSelectionInput: {
   eventId: $eventId
   nterestingId: $interestingId
   placeId:  $placeId
    }
  ) {
    eventId
    id
    interestingId
    placeId
  }
}
`;
export const REMOVE_INTERESTING_COLLECTION_SELECT = `
mutation($id: Int!) {
  removeInterestingCollectionSelection(id: $id) {
    id
  }
}
`;
export const UPDATE_INTERESTING_COLLECTION_SELECT = `
mutation(
  $eventId: Int
  $id: Int!
  $interestingId: Int
  $placeId: Int
){
  updateInterestingCollectionSelection(updateInterestingCollectionSelectionInput: { 
   eventId: $eventId
   id: $id
   interestingId: $interestingId
   placeId: $placeId
  }
  ) {
      id
  }
}
`;

export const GET_INTERESTING_COLLECTION_SELECTION = `
query ($id: Int!) {
  interestingCollectionSelection(id: $id) {
    id
  }
}
`;

export const GET_ALL_INTERESTING_COLLECTION_SELECTIONS = `
query {
  interestingCollectionSelections {
    id
  }
}
`;