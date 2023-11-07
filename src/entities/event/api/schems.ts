export const GET_ALL_EVENTS = `
query events($params: RequestEvent) {
  events(params: $params) {
      id
      title
      desc
      direction
      existTimeEnd
      existTimeStart
      preview
      publish
      recommendation
      views
      whenStartToShow
      categry
  }
}
`;

export const GET_ONE_EVENT = `
  query($id: Int!) {
    event(id: $id) {
      id
      title
      desc
      direction
      existTimeEnd
      existTimeStart
      preview
      publish
      recommendation
      views
      whenStartToShow
      categry
    }
  }
  `;

export const CREATED_NEW_EVENT = `
  mutation (
  $desc: String!
  $direction: EventDirections!
  $existTimeEnd: DateTime
  $existTimeStart: DateTime
  $preview: String!
  $publish: Boolean = true
  $recommendation: Boolean = false
  $title: String!
  $whenStartToShow: DateTime
  $userId: Int!
) {
  createEvent(
    createEventInput: {
      desc: $desc
      direction: $direction
      existTimeEnd: $existTimeEnd
      existTimeStart: $existTimeStart
      preview: $preview
      publish: $publish
      recommendation: $recommendation
      title: $title
      whenStartToShow: $whenStartToShow
      userId: $userId
    }
  ) {
    id
      title
      desc
      direction
      existTimeEnd
      existTimeStart
      preview
      publish
      recommendation
      views
      whenStartToShow
      categry
  }
}
`;
export const REMOVE_EVENT = `
  mutation (
  $id: Int!
) {
  removeEvent(
    id: $id
  ) {
    id
  }
}
`;

export const UPDATE_EVENT = `
  mutation (
    $id: ID!, 
    $desc: String, 
    $direction: EventDirections, 
    $existTimeEnd: DateTime,
    $existTimeStart: DateTime,
    $whenStartToShow: DateTime,
    $preview: String, 
    $publish: Boolean, 
    $recommendation: Boolean, 
    $title: String
    ){
  updateEvent(
    updateEventInput: { 
      id: $id, 
      desc: $desc, 
      direction: $direction,
      existTimeEnd: $existTimeEnd
      existTimeStart: $existTimeStart
      whenStartToShow: $whenStartToShow
      preview: $preview, 
      publish: $publish, 
      recommendation: $recommendation, 
      title: $title
    }) {
    id
  }
}
`;

/** Нужна проверка  */
export const UPDATE_EVENT_VIEWS = `
  mutation ( $id: ID!) {
    updateEventViews(id: $id) {
    id
  }
}
`;
