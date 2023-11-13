import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AddCircle, ButtonRG, Calendar, DatePickerPopap, Filter, Search, useAppDispatch } from "../../../shared";

import styles from "./EventsOptions.module.scss"; 
import { FilterBlock } from "../events-filter-block/FilterBlock";
import { eventsAction, useEventsSelect } from "../../../entities";


const EventsOptions = () => { 
  const [currentDate, setCurrentDate] = useState<Date>(() => new Date())
  const [isCalendarOpen, setIsCalenderOpen] = useState<boolean>(false)
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false)
  const navigate = useNavigate();

  const dispatch = useAppDispatch()
  const {changeFilter} = eventsAction
  const {filtersParams} = useEventsSelect()

  const handleNavigateToAddEventPage = () => {
    navigate("/event/add");
  };

const handleChangeDate = (date: Date) => {
  setCurrentDate(date)
  setIsCalenderOpen(false)
}

  return (
    <div className={styles.root}>
      <div className={styles.options}>
        <div
          onClick={() => setIsFilterOpen((prev) => !prev)}
          className={styles.option}
        >
          <Filter />
          {isFilterOpen && (
            <div
              onClick={(e) => e.stopPropagation()}
              className={styles.calendar}
            >
              <FilterBlock />
            </div>
          )}
        </div>
        <div
          onClick={() => setIsCalenderOpen((prev) => !prev)}
          className={styles.option}
        >
          <Calendar />
          {isCalendarOpen && (
            <div
              onClick={(e) => e.stopPropagation()}
              className={styles.calendar}
            >
              <DatePickerPopap
                isOpenCalendar={isCalendarOpen}
                onChange={handleChangeDate}
                value={currentDate}
                language="ru"
              />
            </div>
          )}
        </div>
        <div className={styles.option}>
          <Search />
          <input
            onChange={(e) =>
              dispatch(
                changeFilter({ ...filtersParams, title: e.target.value })
              )
            }
            type="text"
            placeholder={"Поиск"}
          />
        </div>
      </div>
      <ButtonRG
        handleClick={handleNavigateToAddEventPage}
        className={styles.buttonLink}
      >
        <AddCircle />
        <span>Добавить событие</span>
      </ButtonRG>
    </div>
  );
};

export { EventsOptions };
