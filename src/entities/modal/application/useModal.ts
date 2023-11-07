import { useAppDispatch } from "../../../shared"
import { modalAction } from "../model"

export function useToggleEventModal() {
  const dispatch = useAppDispatch()

const toggleEventModal = (value: boolean) => {
  dispatch(modalAction.setModalAction(value))
}

return { toggleEventModal }
}

export function useEventCurrentMenegment() {
  const dispatch = useAppDispatch()

const changeEventCurrentMenegment = (value: number) => {
  dispatch(modalAction.setEventCurrentMenegment(value))
}

return { changeEventCurrentMenegment }
}

export function useActivateModalEventMenegment() {
  const dispatch = useAppDispatch()

const activateEventMenegment = ({ eventId }: { eventId: number }) => {
  dispatch(modalAction.activateEventModal({ id: eventId }))
}

return { activateEventMenegment }
}