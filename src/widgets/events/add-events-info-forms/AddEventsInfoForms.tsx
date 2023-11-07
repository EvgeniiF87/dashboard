import { useState } from "react";
import type { FC } from "react";
import { CreateEvent } from "../../../features";
import { AddEventsMainCard } from "../add-events-main-card/AddEventsMainCard";
import { AddEventsDatePlaceCard } from "../add-events-form-date-place-form/AddEventsDatePlaceCard";
import { AddEventsContactsCard } from "../add-events-contacts-card/AddEventsContactsCard";
import { EventService } from "../../../entities/event/domain/services";

import styles from "./AddEventsInfoForms.module.scss";


const AddEventsInfoForms: FC = () => {

  //         TODO         перенести в inpustSlice 
  //------------------------------------------------------------------- 
  // main info
  const dropDownDirectionList = EventService.getDropdownDirections();
  const [selecDirection, setSelecDirection] = useState(dropDownDirectionList[0]);
  const [titleValue, setTitleValue] = useState<string>("");
  const [descValue, setDescValue] = useState<string>("");
  const [publicValue, setPublicValue] = useState<boolean>(false);
  const [recommendedValue, setRecommendedValue] = useState<boolean>(false);
  // main info

  //date place info
  const [dateFromEvents, setdateFromEvents] = useState<Date>(() => new Date());
  const [dateToEvents, setdateToEvents] = useState<Date>(() => new Date());
  const [defferedValue, ] = useState<boolean>(false);
  const [timeFromValue, ] = useState<string>("");
  const [timeToValue, ] = useState<string>("");
  //date place info

  //contact info
  const [phoneValue, ] = useState<string>("");
  const [saitValue, ] = useState<string>("");
  const [socialValue, ] = useState<string>("");
  const [socialList, ] = useState<string[]>([]);
  //contact info

//------------------------------------------------------------------- 


const handleChangeDate = (date: Date) => {
  setdateFromEvents(date)
}

  const resetInputs = () => {
    setTitleValue("");
    setDescValue("");
    setPublicValue(false);
    setRecommendedValue(false);
    setSelecDirection(dropDownDirectionList[0]);
    setdateFromEvents(() => new Date());
    setdateToEvents(() => new Date());
  };

  const handleChangeMainInputs = (value: string) => {
    console.log(value);
  };

  return (
      <div className={styles.root}>
        <AddEventsMainCard
          directionValue={selecDirection}
          cardTitle="Событие"
          changeInput={handleChangeMainInputs}
          description={descValue}
          titleValue={titleValue}
          publicValue={publicValue}
          recommended={recommendedValue}
          selectionList={dropDownDirectionList}
        />

        <AddEventsDatePlaceCard
          changeDateFrom={handleChangeDate}
          timeFrom={timeFromValue}
          timeTo={timeToValue}
          dateFromEvents={dateFromEvents}
          dateToEvents={dateToEvents}
          defferedValue={defferedValue}
          cardTitle="Дата, время и место проведения"
        />

        <AddEventsContactsCard
          socialList={socialList}
          phoneValue={phoneValue}
          saitValue={saitValue}
          socialValue={socialValue}
          cardTitle="Контакты"
        />
        
        <div className={styles.submitContainer}>
          <CreateEvent
            inputs={{
              title: titleValue,
              desc: descValue,
              direction: selecDirection.value,
              dateFrom: dateFromEvents,
              dateTo: dateToEvents,
              dateStart: new Date(),
              preview: "imag",
              publish: publicValue,
              recommendation: recommendedValue,
              userId: 1,
            }}
            resetInputs={resetInputs}
          />
        </div>
      </div>
  );
};

export { AddEventsInfoForms };
