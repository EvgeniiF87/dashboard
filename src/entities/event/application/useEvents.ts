import { useEffect } from "react";
import { getSearchParams, useAppDispatch } from "../../../shared";
import { useEventsSelect } from "../model";
import { fetchAllEvents, fetchCreateEvents, fetchRemoveEvent, fetchUpdateEvent } from "../model/thunk";
import { EventService } from "../domain/services";
import { usePaginationSelect } from "../../pagination";
import {  CreateEventInputService, UpdateEventInput } from "../DTO/event-dto";



export function useCreateEvent() {
  const dispatch = useAppDispatch();

 async function createEvent(inputs: CreateEventInputService, resetInputCallback: () => void) {

    const newEvent = await EventService.createEvent(inputs)

    if (typeof newEvent === 'string') {
      console.log(newEvent)
      return
    }

    dispatch(fetchCreateEvents(newEvent))

    resetInputCallback()
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
  const { loading, error, events, filtersParams } = useEventsSelect()
  const { eventsCurrentPage, eventsPerPage } = usePaginationSelect()
  const dispatch = useAppDispatch()


useEffect(() => { 
  const skip = (eventsCurrentPage - 1) * eventsPerPage

  const filterEventsParams = getSearchParams(filtersParams)

  dispatch(fetchAllEvents({
    skip,
    take: eventsPerPage,
    ...filterEventsParams,
  }))
},[eventsCurrentPage, eventsPerPage, filtersParams])


return { loading, error, events }
}


