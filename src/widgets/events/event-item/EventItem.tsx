import { useState } from "react";
import { EventModel } from "../../../entities";
import { CheckBox, EmptyPhoto } from "../../../shared";
import { EnentsItemManagement } from "../enents-item-management/EnentsItemManagement";

import styles from "./EventItem.module.scss";

type EventItemProps = {
  event: EventModel;
  direction: string;
};

const EventItem = ({ event, direction }: EventItemProps) => {

  const [active, setActive] = useState(false)
  const [activePublic, setActivePublic] = useState(true)
  const [activeRec, setActiveRec] = useState(false) // на время

  return (
    <li className={styles.event}>
      <span className={styles.eventOptions}>
        <EnentsItemManagement  eventId={event.id} />
      </span>
      <span className={styles.checkbox}>
        <CheckBox active={active} onClick={() => setActive(!active)}/>
      </span>
      <span>{event.id}</span>
      <span>{event.title}</span>
      <span>{event.desc}</span>
      <span>{direction}</span>
      <span className={styles.imageContainer}>
        {event.preview?.includes('cloudinary') 
        ? <img className={styles.eventImage} src={event.preview} alt="Event preview" />
        : <div className={styles.emptyPhotoBox}>
            <EmptyPhoto/>
          </div>
      }
      </span>
      <span className={styles.center}>{event.views ? event.views : 0}</span>
      <span className={styles.checkbox}>
        <CheckBox active={activePublic} onClick={() => setActivePublic(!activePublic)}/> 
      </span>
      <span className={styles.checkbox}>
        <CheckBox active={activeRec} onClick={() => setActiveRec(!activeRec)}/> 
      </span>
    </li>
  );
};

export { EventItem };
