import { useEffect } from "react";
import { getSearchParams, useAppDispatch } from "../../../shared";
import { placeAction, usePlaceSelect } from "../model";
import * as thunk from "../model/thunk";
import { CreatePlaceFields, UpdatePlaceInput } from "../DTO/place-dto";
import { useAuthSelect } from "../../auth";
import { placeAdapter } from "../service/placeAdapter";
import { fetchUploadPreview } from "../../uploads/model/thunk";
import { usePaginationSelect } from "../../pagination";
import { cacheAdapter } from "../../../shared/cache";
import { useActiveNotification } from "../../notification";
import { useNavigate } from "react-router-dom";


/** Создать  место */
export function useCreatePlace() {
  const dispatch = useAppDispatch();
  const { userId } = useAuthSelect();
  const { activeNotification } = useActiveNotification()


  const createPlace = async (payload: CreatePlaceFields, callback: () => void) => {
    if (!userId) {
      activeNotification({
        message: 'Пользователь не найден',
        status: 'error',
      })
      return "Failet to user id";
    }

    dispatch(placeAction.clearError())

    const createFields = placeAdapter.getFieldsCreatePlace(payload);

    if ("message" in createFields) {
      dispatch(placeAction.setInputsError({ field: createFields.field, message: createFields.message }))

      activeNotification({
        message: createFields.message,
        status: 'error',
      })
      return;
    }
    const { fields, preview } = createFields;

    const previewResponse = await dispatch(fetchUploadPreview(preview));

    if (!previewResponse.payload) {
      activeNotification({
        message: 'Ошибка при создании превью',
        status: 'error',
      })
      return "Failed to create preview";
    }

    const inputs = {
      ...fields,
      preview: previewResponse.payload,
      userId,
    };

    const responseCreate = await dispatch(thunk.fetchCreatePlace(inputs));

    if (responseCreate.meta.requestStatus === "fulfilled") {
      callback()
      cacheAdapter.resetKeysInCach()
      activeNotification({
        message: 'Место успешно создано',
        status: 'success',
      })
    }
  };

  return { createPlace };
}

/** Удалить  место */
export function useRemovePlace() {
  const dispatch = useAppDispatch();
  const { activeNotification } = useActiveNotification()
  const { error } = usePlaceSelect()
  const navigate = useNavigate()

  const removePlace = async(payload: { id: number }) => {
   const remove = await dispatch(thunk.fetchRemovePlace(payload));

   if (remove.meta.requestStatus === 'fulfilled') {
    activeNotification({ status: 'success', message: 'Место успешно удалилось' })
    cacheAdapter.resetKeysInCach()
    navigate('/places')
    } else {
     activeNotification({ status: 'error', message: error || 'Произошла ошибка' })
   }
  };

  return { removePlace };
}

/** Редактировать  место */
export function useUpdatePlace() {
  const dispatch = useAppDispatch();
  const { activeNotification } = useActiveNotification();

  const updatePlace = async(payload: UpdatePlaceInput) => {

  const responseUpdate = await dispatch(thunk.fetchUpdatePlace(payload));

  if (responseUpdate.meta.requestStatus === "fulfilled") {
    cacheAdapter.resetKeysInCach()
    activeNotification({
      message: 'Место успешно отредактировано',
      status: 'success',
    })
  } 

  };

  return { updatePlace };
}

/** Получить  место */
export function useGetOnePlace() {
  const dispatch = useAppDispatch();

  const getOnePlace = (payload: { id: number }) => {
    dispatch(thunk.fetchGetOnePlace(payload));
  };

  return { getOnePlace };
}

/** Сбросить инпуты места */
export function useResetManagmentInputs() {
  const dispatch = useAppDispatch();

  const resetManagmentInputs = () => {
    dispatch(placeAction.clearInputs()); 
  };

  return { resetManagmentInputs };
}

/** Получить все места */
export function useFetchAllPlace() {
  const { loading, error, places, paramsSearch } = usePlaceSelect();
  const { placePagination: { currentPage, perPage } } = usePaginationSelect()
  const dispatch = useAppDispatch();

  useEffect(() => {
    const params = getSearchParams(paramsSearch)

    dispatch(thunk.fetchAllPlaces({
      skip: (currentPage - 1) * perPage,
      take: perPage,
      ...params,
    }));
  }, [currentPage, perPage, paramsSearch, places])

  return { loading, error, places };
}

/** Меняем инпуты  места */
export function usePlaceChangeInputs() {
  const dispatch = useAppDispatch();

  const handleChangeInputs = (fields: {
    field: string;
    value: string | number | boolean | null | { result: string | null, file: File | null };
  }) => {
    dispatch(placeAction.changeInputs(fields));
  };

  return { handleChangeInputs };
}

/** Очищаем ошибки */
export function usePlaceClearError() {
  const dispatch = useAppDispatch();

  const handleClearErrors = () => {
    dispatch(placeAction.clearError());
  };

  return { handleClearErrors };
}
