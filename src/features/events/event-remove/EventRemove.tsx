import type { FC } from "react";
import {  useModalSelect, useRemoveEvent } from "../../../entities";
import { ButtonRG } from "../../../shared";


const EventRemove: FC = () => {
  const { eventCurrentId } = useModalSelect()
  const { removeEvent } = useRemoveEvent()
  // const { loading } = useEventsSelect()

  const handleClick = () => {
    if (!eventCurrentId) return;
    removeEvent({ id: eventCurrentId })
  }

  return (
    <ButtonRG
    size="sm"
    disabled={true} //loading
    handleClick={handleClick}
    >
    Удалить
    </ButtonRG>
  );
};

export { EventRemove };