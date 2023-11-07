import { InterestingCollectionSelectionModel } from "../../../../../entities/collection";
import { EventPlaceCostOptionModel } from "../../../../../entities/cost";
import { ImageModel } from "../../../../../entities/image";
import { InfoModel } from "../../../../../entities/info";
import { EventPlaceTagModel } from "../../../../../entities/tag";
import type { CreateEventInput } from "../application/port";

export enum EventDirections {
  Education = "Education",
  Exhibitions = "Exhibitions",
  Festivals = "Festivals",
  Holidays = "Holidays",
  Kids = "Kids",
  Leisure = "Leisure",
  Movie = "Movie",
  Music = "Music",
  Show = "Show",
}

export interface EventModel {
  categry: string;
  costOption: EventPlaceCostOptionModel[];
  dateEnd?: string | null;
  dateStart?: string | null;
  desc: string;
  direction: EventDirections;
  existTimeEnd?: string | null;
  existTimeStart?: string | null;
  id: string;
  images: ImageModel[];
  info: InfoModel;
  interesting: InterestingCollectionSelectionModel[];
  preview?: string | null;
  publish: boolean;
  recommendation: boolean;
  tags: EventPlaceTagModel[];
  title: string;
  views?: number | null;
  whenStartToShow?: string | null;
}


export class EventEntity {
  desc: string
  direction: EventDirections
  existTimeEnd?: string
  existTimeStart?: string
  preview?: string
  publish?: boolean
  recommendation?: boolean
  title: string
  whenStartToShow?: string

  constructor(args: CreateEventInput) {
      this.desc = args.desc
      this.direction = args.direction
      this.existTimeEnd = args.existTimeEnd
      this.existTimeStart = args.existTimeStart
      this.preview = args.preview ?? ''
      this.publish = args.publish;
      this.recommendation = args.recommendation
      this.title = args.title
      this.whenStartToShow = args.whenStartToShow
  }
  get eventFields(): CreateEventInput {
    return {
      desc: this.desc,
      direction: this.direction,
      title: this.title,
      existTimeEnd: this.existTimeEnd,
      existTimeStart: this.existTimeStart,
      preview: this.preview,
      publish: this.publish,
      recommendation: this.recommendation,
      whenStartToShow: this.whenStartToShow
    };
  }
}



