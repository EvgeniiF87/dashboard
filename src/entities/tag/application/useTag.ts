import { useAppDispatch } from "../../../shared";
import { CreateEventPlaceTagInput, CreateTagInput, UpdateEventPlaceTagInput, UpdateTagInput } from "../DTO/tag-dto";
import { useTagSelect } from "../model";
import {
  fetchCreateTag,
  fetchCreateEventPlaceTag,
  fetchGetAllEventPlaceTags,
  fetchGetOneEventPlaceTag,
  fetchGetOneTag,
  fetchRemoveEventPlaceTag,
  fetchRemoveTag,
  fetchUpdateEventPlaceTag,
  fetchUpdateTag,
} from "../model/thunk";

/** Создание тега */
export const useCreateTag = () => {
  const dispatch = useAppDispatch();

  const createTag = (payload: CreateTagInput) => {
    dispatch(fetchCreateTag(payload));
  };

  return { createTag };
};

/** Редактирование тега */
export const useUpdateTag = () => {
  const dispatch = useAppDispatch();

  const updateTag = (payload: UpdateTagInput) => {
    dispatch(fetchUpdateTag(payload));
  };

  return { updateTag };
};

/** Удаление тега */
export const useRemoveTag = () => {
  const dispatch = useAppDispatch();

  const removeTag = (payload: { id: number }) => {
    dispatch(fetchRemoveTag(payload.id));
  };

  return { removeTag };
};

/** Получение тега */
export const useGetOneTag = () => {
  const { error, loading, currentTag } = useTagSelect()
  const dispatch = useAppDispatch();

  const getOnetag = (payload: { id: number }) => {
    dispatch(fetchGetOneTag(payload));
  };

  return { getOnetag, error, loading, currentTag };
};

/** Создание тега события или места */
export const useCreateEventPlaceTag = () => {
  const dispatch = useAppDispatch();

  const createEvetnPlaceTag = (payload: CreateEventPlaceTagInput) => {
    dispatch(fetchCreateEventPlaceTag(payload));
  };

  return { createEvetnPlaceTag };
};

/** Удаление тега события или места */
export const useRemoveEventPlaceTag = () => {
  const dispatch = useAppDispatch();

  const removeEvetnPlaceTag = (payload: { id: number }) => {
    dispatch(fetchRemoveEventPlaceTag(payload));
  };

  return { removeEvetnPlaceTag };
};

/** Редактирование тега события или места */
export const useUpdateEventPlaceTag = () => {
  const dispatch = useAppDispatch();

  const updateEvetnPlaceTag = (payload: UpdateEventPlaceTagInput) => {
    dispatch(fetchUpdateEventPlaceTag(payload));
  };

  return { updateEvetnPlaceTag };
};

/** Получение тега события или места */
export const useGetOneEventPlaceTag = () => {
  const { error, loading, currentEventPlaceTag } = useTagSelect()
  const dispatch = useAppDispatch();

  const getOneEvetnPlaceTag = (payload: { id: number }) => {
    dispatch(fetchGetOneEventPlaceTag(payload));
  };

  return { getOneEvetnPlaceTag, error, loading, currentEventPlaceTag };
};

/** Получение всех тегов события или места */
export const useGetAllEventPlaceTag = () => {
  const { error, loading } = useTagSelect()
  const dispatch = useAppDispatch();

  const getAllEvetnPlaceTag = () => {
    dispatch(fetchGetAllEventPlaceTags());
  };

  return { getAllEvetnPlaceTag, error, loading };
};
