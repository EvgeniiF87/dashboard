import { cloudinarySaveImage } from "../../../shared/service/cloudinary";
import { CreateEventInput, CreateEventInputService } from "../DTO/event-dto";
import { EventDirections, EventEntity } from "./events";

export class EventService {
  constructor() {}

  static async createEvent(args: CreateEventInputService): Promise<CreateEventInput | string> {

    const isValidFlieds = this.validationFieldsCrateEvent(args)

    if (isValidFlieds) {
      return isValidFlieds
    }

    const cloudinaryImg = await cloudinarySaveImage(args.preview)

    if (!cloudinaryImg) {
      return 'Error to response image patch'
    }

    const existTimeStart = this.getInputDateFromParams(args.dateFrom)
    const existTimeEnd = this.getInputDateFromParams(args.dateTo)
    const whenStartToShow = this.getInputDateFromParams(args.dateStart)
   
      return new EventEntity({
      existTimeStart: existTimeStart,
      existTimeEnd: existTimeEnd,
      whenStartToShow: whenStartToShow,
      desc: args.desc,
      direction: EventDirections[(args.direction as EventDirections)],
      preview: cloudinaryImg,
      title: args.title,
      userId: args.userId,
      publish: args.publish,
      recommendation: args.recommendation,
    });

  }

  static resetDate(date: Date) {
    date.setHours(0)
    date.setMinutes(0)
    date.setSeconds(0)
    return date
  }

  static  getDropdownDirections() {
    const dropdownDirectionList = [];
    const translate = this.directionsTranslate()
    dropdownDirectionList.push({ id: '0', value: 'SelectCategory', label: 'Выберите направление' })

    for (const value in EventDirections) {
      dropdownDirectionList.push({ id: String(dropdownDirectionList.length), value, label: translate[value] });
    }
   
    return dropdownDirectionList;
  }
  
   static directionsTranslate(): { [key: string]: string } {
     return {
       Education: "Образование",
       Exhibitions: "Выставки",
       Festivals: "Фестивали",
       Holidays: "Каникулы",
       Kids: "Дети",
       Leisure: "Досуг",
       Movie: "Кино",
       Music: "Музыка",
       Show: "Показы",
     };
   }

  static getInputDateFromParams(value?: Date): string {
    if (!value) return "";

    const year = value.getFullYear();
    const month = (value.getMonth() + 1).toString().padStart(2, "0");
    const day = value.getDate().toString().padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

  static validationFieldsCrateEvent(args: CreateEventInputService): string | null {

    if (args.title.length === 0) {
      return 'Введите наименование события';
    } else if (args.desc.length === 0) {
      return "Введите описание события";
    } else if ( // проверка на изменения дат
      args.dateFrom.getTime() === args.dateStart.getTime() ||
      args.dateStart.getTime() === args.dateTo.getTime()
    ) {
      return "Укажите дату";
    } else if (args.dateStart < args.dateFrom) {
      return "Событие не может начаться прежде чем появиться в ленте";
    } else if (args.dateTo < args.dateStart) {
      return "Событие не может закончиться прежде чем начнеться";
    } else if (args.direction === "SelectCategory") {
      return "Выберите категорию";
    } else if (args.preview.length === 0) {
      return 'Добавьте изображение';
    } else {
      return null;
    }

  }

}
