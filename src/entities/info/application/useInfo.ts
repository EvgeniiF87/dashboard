import type { CreateInfoInput, UpdateInfoFields } from "../DTO/info-dto"
import { EventService } from "../../event/domain/services"
import { useAppDispatch } from "../../../shared"
import { fetchCreateInfo, fetchGetAllInfo, fetchGetOneInfo, fetchRemoveInfo, fetchUpdateInfo } from '../model/thunk'


/** Создать info */
export const useCreateInfo = () => {
  const dispatch = useAppDispatch()
  
  const createInfo = (payload: CreateInfoInput) => {
    dispatch(fetchCreateInfo(payload))
  }

  return { createInfo }
}

/** Редактировать info */
export const useUpdateInfo = () => {
const dispatch = useAppDispatch()  

  const updateInfo = (payload: UpdateInfoFields) => {

    const argsUpdateDate =  Object.assign(payload, { 
      time_from: EventService.getInputDateFromParams(payload.time_from), // TODO надо вынести в shared utils функцию преобразование Date в строку
      time_to: EventService.getInputDateFromParams(payload.time_to) // TODO надо вынести в shared utils функцию преобразование Date в строку
    })
    dispatch(fetchUpdateInfo(argsUpdateDate))
  }

  return { updateInfo }
}

/** Удалить info */
export const useRemoveInfo = () => {
  const dispatch = useAppDispatch()

  const removeInfo = (payload: { id: number }) => {
    dispatch(fetchRemoveInfo(payload))
  }

  return { removeInfo }
}

/** Получить  info */
export const useGetInfo = () => {
  const dispatch = useAppDispatch()

  const getInfo = (payload: { id: number }) => {
    dispatch(fetchGetOneInfo(payload))
  }

  return { getInfo }
}

/** Получить все info */
export const useGetAllInfo = () => {
  const dispatch = useAppDispatch()

  const getAllInfo = () => {
    dispatch(fetchGetAllInfo)
  }

  return { getAllInfo }
}