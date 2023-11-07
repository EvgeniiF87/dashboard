export const CREATE_IMAGE = `
mutation(
  $eventId: Int
  $path: String!
  $placeId: Int
) {
  createImage(createImageInput: {
    eventId: $eventId
    path: $path
    placeId: $placeId
    }
  ) {
    id
    eventId
    path
    placeId
  }
}
`;

export const GET_ALL_IMAGES = `
query {
  images {
    id
    eventId
    path
    placeId
  }
}
`;

export const GET_IMAGE = `
query ($id: Int!) {
  image(id: $id) {
    id
    eventId
    path
    placeId
  }
}
`;

export const UPDATE_IMAGE = `
mutation(
  $eventId: Int
  $id: Int!
  $path: String
  $placeId: Int
){
  updateImage(updateImageInput: { 
   eventId: $eventId
   id: $id
   path: $path
   placeId: $placeId
  }
  ) {
    id
    path
    placeId
    eventId
  }
}
`;
export const REMOVE_IMAGE = `
mutation($id: Int!) {
  removeImage(id: $id) {
    id
  }
}
`;


