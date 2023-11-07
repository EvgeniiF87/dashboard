import type { EventService } from '../application/port'
import { EventsApi } from '../api'


export const userAdapter: EventService = {
    createEvent(args) {
        return EventsApi.createEvents(args)
    },
    removeEvent(id) {
      return EventsApi.removeEvent({ id })
    },
    updateEvent(args) {
        return EventsApi.updateEvent(args)
    },
    updateEventViews(id) {
        return EventsApi.updateEventViews({ id })
    },
    event(id) {
      return EventsApi.getEvent({ id })
    },
    events(args) {
      return EventsApi.getAllEvents(args)
    },  
}