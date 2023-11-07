import {  useEventCurrentMenegment, useModalSelect, useToggleEventModal } from "../../../../entities";
import {  Modal, modalManagementHeaderList, CloseIcon, InfoModalSvg, PaySvg, CostSvg, TagModalSvg, ModalImageSvg } from "../../../../shared";
import { ModalEventsCost } from "../modal-events-cost/ModalEventsCost";
import { ModalEventsDelete } from "../modal-events-delete/ModalEventsDelete";
import { ModalEventsImages } from "../modal-events-images/ModalEventsImages";
import { ModalEventsInfo } from "../modal-events-Info/ModalEventsInfo";
import { ModalEventsPayments } from "../modal-events-payments/ModalEventsPayments";
import { ModalEventsTags } from "../modal-events-tags/ModalEventsTags";

import styles from "./ModalEventsManagement.module.scss";

const eventsModalContent = {
  0: <ModalEventsInfo />,
  1: <ModalEventsImages />,
  2: <ModalEventsTags />,
  3: <ModalEventsCost />,
  4: <ModalEventsPayments />,
  5: <ModalEventsDelete />,
}

const eventsModalSvg = {
  0: <InfoModalSvg />,
  1: <ModalImageSvg />,
  2: <TagModalSvg />,
  3: <CostSvg />,
  4: <PaySvg />,
}



const ModalEventsManagement = () => {
  const { eventCurrentMenegment, isEventModalActive } = useModalSelect()
  const { toggleEventModal } = useToggleEventModal()
  const { changeEventCurrentMenegment } = useEventCurrentMenegment()


  const handleClickMenegment = (value: number) => {
    changeEventCurrentMenegment(value)
  }

  return (
    <>
      <Modal
      active={isEventModalActive} 
      handleClose={() => toggleEventModal(false)}
      >
        <ul className={styles.modalEventHeader}>
          {modalManagementHeaderList.map((managment, index) => (
            <li 
            onClick={() => handleClickMenegment(index)}
            key={managment} 
            className={eventCurrentMenegment === index ? `${styles.modalEventHeaderItem} ${styles.modalEventHeaderItemActive}` : styles.modalEventHeaderItem}
            > 
             {/* @ts-ignore  TODO под вопросом такого рендеринга компанентов */}
            {eventsModalSvg[index]}
              <span>
              {managment}
              </span>
            </li>
          ))}
          <div className={styles.modalCloseButton}>
          <CloseIcon
          onClick={() => toggleEventModal(false)}
          />
          </div>
        </ul>
        <div className={styles.modalContent}>
        {/* @ts-ignore  TODO под вопросом такого рендеринга компанентов */}
            {eventsModalContent[eventCurrentMenegment]} 
        </div>
      </Modal>
    </>
  );
};

export { ModalEventsManagement };
