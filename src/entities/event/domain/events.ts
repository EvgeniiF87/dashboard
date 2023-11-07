import { InterestingCollectionSelectionModel } from "../../collection";
import { EventPlaceCostOptionModel } from "../../cost";
import { ImageModel } from "../../image";
import { InfoModel } from "../../info";
import { EventPlaceTagModel } from "../../tag";
import { CreateEventInput } from "../DTO/event-dto";

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
  dateEnd?: string;
  dateStart?: string;
  desc: string;
  direction: EventDirections;
  existTimeEnd?: string;
  existTimeStart?: string;
  id: number;
  images: ImageModel[];
  info: InfoModel;
  interesting: InterestingCollectionSelectionModel[];
  preview?: string;
  publish: boolean;
  recommendation: boolean;
  tags: EventPlaceTagModel[];
  title: string;
  views?: number;
  whenStartToShow?: string;
  userId: number;
  // нехватает place_id
}

export class EventEntity {
  desc: string
  direction: EventDirections
  existTimeEnd?: string | undefined
  existTimeStart?: string | undefined
  whenStartToShow?: string | undefined
  preview: string
  publish?: boolean
  recommendation?: boolean
  title: string
  userId: number;

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
      this.userId = args.userId
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
      whenStartToShow: this.whenStartToShow,
      userId: this.userId,
    };
  }
}



