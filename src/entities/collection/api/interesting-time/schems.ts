export const INTERESTION_COLLECTION_CURRENT_DAY = `
query ($id: Int!) {
  interestingCollectionsCurrentDay(id: $id) {
    id
  }
}
`;

export const INTERESTION_COLLECTION_MOUTH = `
query ($id: Int!) {
  interestingCollectionsMonth(id: $id) {
    id
  }
}
`;

export const INTERESTION_COLLECTION_WEEK = `
query ($id: Int!) {
  interestingCollectionsWeek(id: $id) {
    id
  }
}
`;

export const INTERESTION_COLLECTION_WEEKEND = `
query ($id: Int!) {
  interestingCollectionsWeekend(id: $id) {
    id
  }
}
`;