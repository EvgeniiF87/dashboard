import { useMemo, useState } from "react";
import { AddEventsAdditionalForms, AddEventsInfoForms, AddEventsMediaForms } from "../../widgets";
import {  ContentHeader, CreationProgress, EVENTS } from "../../shared";

import styles from "./EventAddPage.module.scss"


const addEventsFormsList = [
  <AddEventsInfoForms />,
  <AddEventsMediaForms />,
  <AddEventsAdditionalForms />,
]

const EventAddPage = () => {
  const [progress, ] = useState(0)
 

const showForm = useMemo(() => addEventsFormsList[progress], [progress])

  return (
    <div className={styles.eventsWrapper}>
    <ContentHeader
    title="Создание события" 
    breadcrumbs={EVENTS.breadcrumbAddEventPage}
    />
    <CreationProgress progressList={EVENTS.progressList} activeIndex={progress} />
    {showForm}
    </div>
  );
};

export default EventAddPage;







