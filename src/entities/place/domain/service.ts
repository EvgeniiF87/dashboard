import { OptionsSelectType } from "../../../shared";
import { CreatePlaceFields, CreatePlaceInput, ErrorListType } from "../DTO/place-dto"
import { PlaceDirections } from "./place"


export class PlaceService {
  constructor() {}

  static createPlace(payload: CreatePlaceFields): { fields: CreatePlaceInput, preview: File } | { field: string,  message: string} {

   //---------------- TODO вынести в отдельную функцию---------------------
    const errorList = this.getErrorFields()
    
    const validTitle = payload.title.length > 1
    const validDesc = payload.desc.length > 1
    const validDateTo = payload.existTimeStart && payload.existTimeEnd ? payload.existTimeEnd > payload.existTimeStart : true;
    const validFile = payload.preview ? payload.preview : false;
    const validDirection = payload.direction in PlaceDirections;
    const direction = PlaceDirections[payload.direction as keyof typeof PlaceDirections]
    const validDateStart = payload.existTimeStart
    const validDateEnd = payload.existTimeEnd

    if (!validTitle) {
      return { field: 'title', message: errorList.title}
    }
    if (!validDesc) {
      return { field: 'desc', message: errorList.desc}
    }
    if (payload.existTimeStart && !validDateTo) {
      return { field: 'timeStart', message: errorList.exceedingDate}
    }
    if (!validFile) {
      return { field: 'preview', message: errorList.preview}
    }
    if (!validDirection) {
      return { field: 'selection', message: errorList.direction}
    }
    if (!validDateStart) {
      return { field: 'timeStart', message: errorList.timeStart}
    }
    if (!validDateEnd) {
      return { field: 'timeEnd', message: errorList.timeEnd}
    }



   //---------------- TODO вынести в отдельную функцию---------------------

    const timeStart = payload.existTimeStart && typeof payload.existTimeStart !== 'string' ? this.getInputDateFromParams(payload.existTimeStart) : null
    const timeEnd = payload.existTimeEnd && typeof payload.existTimeEnd !== 'string' ? this.getInputDateFromParams(payload.existTimeEnd) : null

    const resultInputs: CreatePlaceInput = {
      desc: payload.desc,
      direction: direction,
      preview: '',
      title: payload.title,
      publish: payload.publish,
      userId: 0,
    }

    if (timeStart) {
      resultInputs.existTimeStart = timeStart
    }
    if (timeEnd) {
      resultInputs.existTimeEnd = timeEnd
    }
  
    return { fields: resultInputs, preview: payload.preview }
  }

  static resetDate(date: Date) {
    date.setHours(0)
    date.setMinutes(0)
    date.setSeconds(0)
    return date
  }

  static  getDropdownDirections(): OptionsSelectType[] {
    const dropdownPlaceDirectionsList = [];
    const translate = this.directionsPlaceTranslate()
    dropdownPlaceDirectionsList.push({ id: '0', value: 'SelectDirection', label: 'Выберите категорию' })   

    for (const value in PlaceDirections) {
      const randomId = crypto.randomUUID()
      dropdownPlaceDirectionsList.push({ id: randomId, value, label: translate[value] });
    }
   
    return dropdownPlaceDirectionsList;
  }
  
   static directionsPlaceTranslate(): { [key: string]: string } {
     return {
      Museums: "Музеи",
      Other: "Другое",
      Parks: "Парки",
      Restaurants: "Рестораны",
      Show: "Показы",
      Space: "Космос",
      Theaters: "Театры",
      Tourism: "Туризм",
      Walk: "Хотьба",
     };
   }

   static getInputDateFromParams(value?: Date): string { //TODO вынести в отдельный сервис по работе с датами
    if (!value) return "";

    const year = value.getFullYear();
    const month = (value.getMonth() + 1).toString().padStart(2, "0");
    const day = value.getDate().toString().padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

  private static  getErrorFields(): ErrorListType { 
    return {
      title: "Введите наименование",
      desc: "Введите описание",
      timeStart: "Укажите дату начала",
      timeEnd: "Укажите дату окончания",
      direction: "Выберите направление",
      preview: "Выберите изображение",
      selection: "Укажите категорию",
      exceedingDate: 'Дата окончания не должно быть меньше даты начала'
    };
  }

  static directionsTranslate(): { [key: string]: string } {
    return {
      Museums: "Музеи",
      Other: "Другое",
      Parks: "Парки",
      Restaurants: "Рестораны",
      Show: "Показы",
      Space: "Космос",
      Theaters: "Театры",
      Tourism: "Туризм",
      Walk: "Ходить",
    };
  }

}