export const CREATE_PLACE = `
mutation($createPlaceInput: CreatePlaceInput!) {
  createPlace(createPlaceInput: $createPlaceInput) {
    id
    desc
    existTimeEnd
    existTimeStart
    publish
    title
    direction
    preview
  }
}
`;

export const REMOVE_PLACE = `
mutation($id: Int!) {
  removePlace(id: $id) {
    id
  }
}
`;

export const UPDATE_PLACE = `
mutation(
  $desc: String, 
  $id: Int!, 
  $direction: PlaceDirections, 
  $preview: String,
  $publish: Boolean, 
  $title: String,
  $existTimeStart: DateTime,
  $existTimeEnd: DateTime
){
  updatePlace(updatePlaceInput: { 
  desc: $desc, 
  id: $id, 
  direction: $direction, 
  preview: $preview,
  publish: $publish, 
  title: $title,
  existTimeStart: $existTimeStart,
  existTimeEnd: $existTimeEnd
  }
  ) {
    id
  }
}
`;

export const GET_PLACE = `
query($id: Int!) {
  place(id: $id) {
    id
    desc
    existTimeEnd
    existTimeStart
    publish
    title
    direction
    preview
  }
} 
`;

export const GET_ALL_PLACES = `
query($params: RequestPlace) {
  places(params: $params) {
    id
    desc
    existTimeEnd
    existTimeStart
    publish
    title
    direction
    preview
  }
} 
`;
