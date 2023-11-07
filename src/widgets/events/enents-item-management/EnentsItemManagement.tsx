import { useActivateModalEventMenegment } from "../../../entities";
import { evetManagementList } from "../../../shared";

import styles from "./EnentsItemManagement.module.scss";


const EnentsItemManagement = ({ eventId }: { eventId: number }) => {
  const { activateEventMenegment } = useActivateModalEventMenegment()

  const handleClickIcon = () => {
      activateEventMenegment({ eventId })
  }
  
  return (
    <>
    <ul className={styles.managementList}>
      {evetManagementList.map(managment => (
        <li
        onClick={handleClickIcon}
        key={managment.title}
        className={styles.icon}
        data-tooltip={managment.title}
        >
          <managment.svg/>
        </li>
      ))}
    </ul>
        

      </>
  );
};

export { EnentsItemManagement };
