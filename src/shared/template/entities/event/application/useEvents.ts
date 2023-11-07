import { useEffect } from "react";
import { useAppDispatch } from "../../../../../shared";
import { useEventsSelect } from "../model";
import { fetchAllEvents, fetchCreateEvents, fetchRemoveEvent, fetchUpdateEvent } from "../model/thunk";
import { EventService } from "../domain/services";
import { CreateEventInput, UpdateEventInput } from "./port";

const eventService = new EventService();

export function useCreateEvent() {
  const dispatch = useAppDispatch();

  async function createEvent(args: CreateEventInput) {
    

    const newEvent = eventService.createEvent(args)

    dispatch(fetchCreateEvents(newEvent))
  }

  return { createEvent };
}

export function useRemoveEvent() {
  const dispatch = useAppDispatch();

  async function removeEvent({ id }: { id: number }) {
    dispatch(fetchRemoveEvent({ id }))
  }

  return { removeEvent };
}

export function useUpdateEvent() {
  const dispatch = useAppDispatch();

  async function updateEvent(args: UpdateEventInput) {
    dispatch(fetchUpdateEvent(args))
  }

  return { updateEvent };
}


export function useFetchAllEvents() {
  const { loading, error, events } = useEventsSelect()
  const dispatch = useAppDispatch()


useEffect(() => {
  dispatch(fetchAllEvents())
},[])


return { loading, error, events }
}

