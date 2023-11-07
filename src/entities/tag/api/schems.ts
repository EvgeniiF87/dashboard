export const CREATE_TAG = `
mutation(
  $name: String!
) {
  createTag(
    createTagInput: {
    name: $name
    }
  ) {
    id
    name
  }
}
`;

export const GET_TAG = `
query ($id: Int!) {
  tag(id: $id) {
    id
    name
  }
}
`;

export const UPDATE_TAG = `
mutation(
  $id: Int!
  $name: String!
){
  updateTag(updateTagInput: { 
  id: $id
  name: $name
  }
  ) {
    id
    name
  }
}
`;

export const REMOVE_TAG = `
mutation($id: Int!) {
  removeTag(id: $id) {
    id
  }
}
`;

export const CREATE_EVENT_PLACE_TAG = `
mutation(
  $eventId: Int,
  $placeId: Int,
  $tagsId: Int!
) {
  createEventPlaceTag(
    createEventPlaceTagInput: {
      eventId: $eventId
      placeId: $placeId
      tagsId: $tagsId
    }
  ) {
    id
    eventId
    placeId
    tagsId
  }
}
`;

export const GET_ALL_EVENT_PLACE_TAGS = `
query {
  eventPlaceTags {
    id
    eventId
    placeId
    tagsId
  }
}
`;

export const GET_EVENT_PLACE_TAG = `
query ($id: Int!) {
  eventPlaceTag(id: $id) {
    eventId
    placeId
  }
}
`;

export const UPDATE_EVENT_PLACE_TAG = `
mutation(
  $eventId: Int
  $id: Int! 
  $placeId: Int
  $tagsId: Int
  ){
    updateTag(updateTagInput: { 
    placeId: $placeId
    id: $id  
    eventId: $eventId
    tagsId: $tagsId
    }
    ) {
      id
    }
  }
`;

export const REMOVE_EVENT_PLACE_TAG = `
mutation($id: Int!) {
  removeEventPlaceTag(id: $id) {
    id
    eventId
    placeId
    tagsId
  }
}
`;

