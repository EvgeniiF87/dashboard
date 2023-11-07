import { useEffect } from "react";
import { getSearchParams, OptionsSelectType, useAppDispatch } from "../../../shared";
import { placeAction, usePlaceSelect } from "../model";
import * as thunk from "../model/thunk";
import { CreatePlaceFields, UpdatePlaceInput } from "../DTO/place-dto";
import { useAuthSelect } from "../../auth";
import { placeAdapter } from "../service/placeAdapter";
import { fetchUploadPreview } from "../../uploads/model/thunk";
import { usePaginationSelect } from "../../pagination";
import { cacheAdapter } from "../../../shared/cache";
import { useActiveNotification } from "../../notification";


/** Создать  место */
export function useCreatePlace() {
  const dispatch = useAppDispatch();
  const { userId } = useAuthSelect();
  const { activeNotification } = useActiveNotification()


  const createPlace = async (payload: CreatePlaceFields, callback: () => void) => {
    if (!userId) {
      console.log("Failet to user id");
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
      cacheAdapter.resetKeysInCach('place')
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

  const removePlace = (payload: { id: number }) => {
    dispatch(thunk.fetchRemovePlace(payload));
  };

  return { removePlace };
}

/** Редактировать  место */
export function useUpdatePlace() {
  const dispatch = useAppDispatch();

  const updatePlace = (payload: UpdatePlaceInput) => {
    dispatch(thunk.fetchUpdatePlace(payload));
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
  }, [currentPage, perPage, paramsSearch])

  return { loading, error, places };
}

export function usePlaceChangeInputs() {
  const dispatch = useAppDispatch();

  const handleChangeInputs = (fields: {
    field: string;
    value: string | OptionsSelectType | boolean;
  }) => {
    dispatch(placeAction.changeInputs(fields));
  };

  return { handleChangeInputs };
}

export function usePlaceClearError() {
  const dispatch = useAppDispatch();

  const handleClearErrors = () => {
    dispatch(placeAction.clearError());
  };

  return { handleClearErrors };
}
