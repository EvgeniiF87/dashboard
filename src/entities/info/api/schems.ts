export const CREATE_INFO = `
mutation(
  $adress: String
  $call_back: Boolean = false
  $eventId: Int
  $latitude: String
  $longitude: String
  $metro: String
  $phone: String
  $placeId: Int
  $site: String
  $social: String
  $time_from: String
  $time_to: String
) {
  createInfo(createInfoInput: {
    adress: $adress,
    call_back: $call_back,
    eventId: $eventId,
    latitude: $latitude,
    longitude: $longitude,
    metro: $metro,
    phone: $phone,
    placeId: $placeId,
    site: $site,
    social: $social,
    time_from: $time_from,
    time_to: $time_to
  }) {
    id
    adress
    eventId
    latitude
    longitude
    metro
    phone
    placeId
    site
    time_from
    time_to
  }
}
`;

export const REMOVE_INFO = `
mutation($id: Int!) {
  removeInfo(id: $id) {
    id
  }
}
`;

export const UPDATE_INFO = `
mutation(
  $adress: String
  $call_back: Boolean
  $eventId: Int
  $id: Int!
  $latitude: String
  $longitude: String
  $metro: String
  $phone: String
  $placeId: Int
  $site: String
  $social: String
  $time_from: String
  $time_to: String
){
  updateInfo(updateInfoInput: { 
  id: $id
  adress: $adress
  call_back: $call_back
  eventId: $eventId
  latitude: $latitude
  longitude: $longitude
  metro: $metro
  phone: $phone
  placeId: $placeId
  site: $site
  social: $social
  time_from: $time_from
  time_to: $time_to
  }
  ) {
    id
  }
}
`;

export const GET_INFO = `
query ($id: Int!) {
  info(id: $id) {
    adress
    call_back
    eventId
    latitude
    longitude
    metro
    phone
    placeId
    site
    social
    time_from
    time_to
  }
}
`;
export const GET_ALL_INFO = `
query {
  allInfo {
    id
    adress
    call_back
    eventId
    latitude
    longitude
    metro
    phone
    placeId
    site
    social
    time_from
    time_to
  }
}
`;


