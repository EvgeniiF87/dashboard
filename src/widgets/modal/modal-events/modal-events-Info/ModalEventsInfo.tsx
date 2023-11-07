import { useModalSelect } from "../../../../entities";
import { InfoForm } from "../../../info";

import styles from "./ModalEventsInfo.module.scss";


const ModalEventsInfo = () => {
  const { eventCurrentId } = useModalSelect();

  return (
  <div className={styles.root}>

    <InfoForm
    variant='create'
    // variant='update'
    eventId={eventCurrentId ? eventCurrentId : 0} 
    />

  {/* example create info place */}
    {/* <InfoForm
    variant='create'
    placeId={1} //need get placeId
    /> */}

  </div>
  );
};

export { ModalEventsInfo };
