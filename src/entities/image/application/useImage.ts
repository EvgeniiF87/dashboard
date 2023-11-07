import { useAppDispatch } from "../../../shared"
import { CreateImageInput, UpdateImageInput } from "../DTO/image-dto"
import { fetchCreateImages, fetchGetImage, fetchGetImages, fetchRemoveImages, fetchUpdateImages } from "../model/thunk"

/** Создание изображение события или места */
export const useCreateImagePlaceOrEvent = () => {
  const dispatch = useAppDispatch()

  const createImage = (payload: CreateImageInput) => {
    dispatch(fetchCreateImages(payload))
  }

  return { createImage }
}

/** Редактировать изображение события или места */
export const useUpdateImagePlaceOrEvent = () => {
  const dispatch = useAppDispatch()

  const updateImage = (payload: UpdateImageInput) => {
    dispatch(fetchUpdateImages(payload))
  }

  return { updateImage }
}

/** Удалить изображение события или места */
export const useRemoveImagePlaceOrEvent = () => {
  const dispatch = useAppDispatch()

  const removeImage = (payload: { id: number }) => {
    dispatch(fetchRemoveImages(payload))
  }

  return { removeImage }
}

/** Получить изображение по id */
export const useGetOneImage = () => {
  const dispatch = useAppDispatch()

  const getImage = (payload: { id: number }) => {
    dispatch(fetchGetImage(payload))
  }

  return { getImage }
}

/** Получить все изображения */
export const useGetAllImages = () => {
  const dispatch = useAppDispatch()

  const getAllImages = () => {
    dispatch(fetchGetImages())
  }

  return { getAllImages }
}