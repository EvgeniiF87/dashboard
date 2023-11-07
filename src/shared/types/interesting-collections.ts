export interface IinterestingCollections {
  id: number;
  title: string;
  img: string;
  views: number;
  priorities: number;
  existTimeStart: Date;
  existTimeEnd: Date;
  whenStartToShow: Date;
}

export interface IInterestingCollectionsAndCount {
  collections: IinterestingCollections[];
  count: number;
}

export type IInterestingCollections = {
  interestingCollections: IInterestingCollectionsAndCount;
};
