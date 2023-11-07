export const CREATE_INTERESTING_COLLECTION = `
mutation(
  $existTimeEnd: DateTime
  $existTimeStart: DateTime
  $img: String
  $priorities: Float = 0
  $title: String!
  $views: Float
  $whenStartToShow: DateTime
) {
  createInterestingCollection(createInterestingCollectionInput: {
  existTimeEnd: $existTimeEnd
    existTimeStart: $existTimeStart
    img: $img
    priorities: $priorities
    title: $title
    views: $views
    whenStartToShow: $whenStartToShow
    }
  ) {
    existTimeEnd
    existTimeStart
    id
    img
    title
    views
    whenStartToShow
  }
}
`;

export const REMOVE_INTERESTING_COLLECTION = `
mutation($id: Int!) {
  removeInterestingCollection(id: $id) {
    id
  }
}
`;

export const UPDATE_INTERESTING_COLLECTION = `
mutation(
  $existTimeEnd: DateTime
  $existTimeStart: DateTime
  $id: Int!
  $img: String
  $priorities: Float
  $title: String
  $views: Float 
  $whenStartToShow: DateTime
 ){
   updateInterestingCollection(updateInterestingCollectionInput: { 
   existTimeEnd: $existTimeEnd
   existTimeStart: $existTimeStart
   id: $id
   img: $img
   priorities: $priorities
   title: $title
   views: $views 
   whenStartToShow: $whenStartToShow
   }
   ) {
       id
   }
 }
`;

export const GET_ALL_INTERESTING_COLLECTIONS = `
query {
  interestingCollectionSelections {
    id
    eventId
    interestingId
    placeId
  }
}
`;

export const GET_INTERESTING_COLLECTION = `
query ($id: Int!) {
  interestingCollectionSelection(id: $id) {
    id
    name
  }
}
`;