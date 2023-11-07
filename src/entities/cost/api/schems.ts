export const CREATE_COST_OPTION = `
mutation(
  $name: String!
) {
  createCostOption(
    createCostOptionInput: {
      name: $name
    }
  ) {
    id
    name
  }
}
`;

export const REMOVE_COST_OPTION = `
mutation($id: Int!) {
  removeCostOption(id: $id) {
    id
    name
  }
}
`;

export const CREATE_EVENT_PLACE_COST_OPTION = `
mutation(
  $costOptionId: Int!
  $eventId: Int!
  $placeId: Int!
  $price: String!
) {
  createEventPlaceCostOption(
    createEventPlaceCostOptionInput: {
    costOptionId: $costOptionId
    eventId: $eventId
    placeId: $placeId
    price: $price
    }
  ) {
    id
    costOptionId
    eventId
    placeId
  }
}
`;

export const GET_ALL_EVENT_PLACE_COST_OPTIONS = `
query {
  eventPlaceCostOptions {
    id
    costOptionId
    eventId
    placeId
    price
  }
}
`;

export const GET_EVENT_PLACE_COST_OPTION = `
query ($id: Int!) {
  eventPlaceCostOption(id: $id) {
    id
    price
    costOptionId
    placeId
    eventId
  }
}
`;

export const UPDATE_EVENT_PLACE_COST_OPTION = `
mutation(
  $costOptionId: Int,
  $eventId: Int,
  $id: Int!,
  $placeId: Int,
  $price: String
){
  updateEventPlaceCostOption(updateEventPlaceCostOptionInput: { 
   costOptionId: $costOptionId,
   eventId: $eventId,
   id: $id,
   placeId: $placeId,
   price: $price
  }
  ) {
    id
    costOptionId
    eventId
    placeId
    price
  }
}
`;

export const REMOVE_EVENT_PLACE_COST_OPTION = `
mutation($id: Int!) {
  removeEventPlaceCostOption(id: $id) {
    id
  }
}
`;
