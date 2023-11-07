import type { FC } from "react";
import { ButtonRG } from "../../../../ui";
import {  CreateEventInput, useCreateEvent, useEventsSelect } from "../../../entities/event";


interface CreateEventProps extends CreateEventInput {
  buttonText?: string;
}

const CreateEvent: FC<CreateEventProps> = (props) => {
  const { createEvent } = useCreateEvent()
  const { loading } = useEventsSelect()

  const handleCreate = () => {
    createEvent(props)
  }


  return (
    <ButtonRG
    disabled={loading}
    handleClick={handleCreate}
    >
    {props.buttonText ? props.buttonText : 'Создать Event'}
    </ButtonRG>
  );
};

export { CreateEvent };