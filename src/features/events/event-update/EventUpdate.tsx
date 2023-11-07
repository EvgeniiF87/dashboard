import type { FC } from "react";
import { UpdateEventInput, useEventsSelect, useUpdateEvent } from "../../../entities";
import { ButtonRG } from "../../../shared";


const EventUpdate: FC<UpdateEventInput> = (props) => {
  const { updateEvent } = useUpdateEvent()
  const { loading } = useEventsSelect()

  const handleClick = () => {
    updateEvent(props)
  }

  return (
    <>
    <div onClick={handleClick}>
    </div>
    <ButtonRG
    color="warning"
    size="md"
    disabled={loading}
    handleClick={handleClick}
    >
    {'Применить изменения'}
    </ButtonRG>
      </>
  );
};

export { EventUpdate };