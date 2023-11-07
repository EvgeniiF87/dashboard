import type { FC } from "react";
import { CheckBox, DatePicker, FormCard, Input } from "../../../shared";

import styles from "./AddEventsDatePlaceCard.module.scss";

type AddEventsDatePlaceCardProps = {
  cardTitle: string;
  dateFromEvents: Date;
  dateToEvents: Date;
  defferedValue: boolean;
  timeFrom: string;
  timeTo: string;
  changeDateFrom: (value: Date) => void;
}

const AddEventsDatePlaceCard: FC<AddEventsDatePlaceCardProps> = (props) => {
  const { cardTitle, dateFromEvents, dateToEvents, defferedValue, timeFrom, timeTo, changeDateFrom } = props;

  return (
    <FormCard title={cardTitle}>
      <div className={styles.contentContainder}>
      <div className={styles.side}>
      <Input
        error={false}
        value={''}
        label="Место проведения"
        placeholder="Введите место проведения"
        onChange={() => {}}
        />
      <DatePicker
        changeDate={changeDateFrom}
        label="Дата начала события"
        value={dateFromEvents}
        // onChange={() => {}}
        language="ru"
        placeholder={'Введите дату начала события'}
        />
      <DatePicker
        changeDate={changeDateFrom}
        label="Дата окончания события"
        value={dateToEvents}
        // onChange={() => {}}
        // onChange={setdateFromEvents}
        language="ru"
        placeholder={'Введите дату окончания события'}
        />
         <CheckBox
         label="Отложенное событие"
         active={defferedValue}
         onClick={() => {}}
         // onClick={() => setRecommendedValue((prev) => !prev)}
         />
         </div>
         <div className={styles.side}>
        <Input
        error={false}
        value={''}
        label="Станция метро"
        placeholder="Введите станцию метро"
        onChange={() => {}}
        />
         <Input
        error={false}
        value={timeFrom}
        label="Время начала события"
        placeholder="Введите время начала события"
        onChange={() => {}}
        />
         <Input
        error={false}
        value={timeTo}
        label="Время окончания события"
        placeholder="Введите время окончания события"
        onChange={() => {}}
        />
         </div>
         </div>
    </FormCard>
  );
};

export { AddEventsDatePlaceCard };