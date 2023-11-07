import type { FC } from "react";
import {
  CreateEventInputService,
  useCreateEvent,
  useEventsSelect,
} from "../../../entities/event";

import { ButtonRG } from "../../../shared";

interface CreateEventProps {
  inputs: CreateEventInputService;
  resetInputs: () => void;
}

const CreateEvent: FC<CreateEventProps> = (props) => {
  const { inputs, resetInputs } = props;
  const { createEvent } = useCreateEvent();
  const { loading } = useEventsSelect();

  const handleCreate = () => {
    createEvent(inputs, resetInputs);
  };

  return (
    <ButtonRG disabled={loading} handleClick={handleCreate}>
      Продолжить
    </ButtonRG>
  );
};

export { CreateEvent };
