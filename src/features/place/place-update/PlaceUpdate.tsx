import type { FC } from "react";
import {  useActiveNotification, usePlaceSelect, useUpdatePlace } from "../../../entities";
import { PlaceService } from "../../../entities/place/domain/service";
import { fetchUploadPreview } from "../../../entities/uploads/model/thunk";
import { ButtonRG, useAppDispatch } from "../../../shared";

type PlaceUpdateProps = {
  id: number;
  fileList: any;
};

const PlaceUpdate: FC<PlaceUpdateProps> = (props) => {
  const { id, fileList } = props;
  const { loading, inputsPlace, currentPlace } = usePlaceSelect()
  const { updatePlace } = useUpdatePlace();
  const { activeNotification } = useActiveNotification()
  const dispatch = useAppDispatch();

  const handleUpdate = async() => {
    const dropDownDirectionList = PlaceService.getDropdownDirections();
    const findDirectionValue = dropDownDirectionList.find(item => item.id === String(inputsPlace.directionSelect))

    if (!currentPlace || !findDirectionValue) return;

    if (fileList.length === 0) {
      activeNotification({
      message: 'Выберите превью места',
      status: 'error',
    })
    return;
    }

    if (!id) {
      activeNotification({
      message: 'Не найден Id места',
      status: 'error',
    })
    return;
    }

    const payloadInput: {[key: string]: string | null | boolean } = {} 

    if (currentPlace.existTimeEnd !== inputsPlace.existTimeEnd) {
      payloadInput['existTimeEnd'] = inputsPlace.existTimeEnd
    }
    if (currentPlace.existTimeStart !== inputsPlace.existTimeStart) {
      payloadInput['existTimeStart'] = inputsPlace.existTimeStart
    }
    if (currentPlace.desc !== inputsPlace.desc) {
      payloadInput['desc'] = inputsPlace.desc
    }
    if (currentPlace.title !== inputsPlace.title) {
      payloadInput['title'] = inputsPlace.title
    }
    if (currentPlace.publish !== inputsPlace.public) {
      payloadInput['publish'] = inputsPlace.public
    }
    if (currentPlace.direction !== findDirectionValue.value) {
      payloadInput['direction'] = findDirectionValue.value
    }

    if (fileList[0].result && currentPlace.preview !== fileList[0].result && fileList[0].file) {

      const previewResponse = await dispatch(fetchUploadPreview(fileList[0].file)); 

      if (!previewResponse.payload) {
        activeNotification({
          message: 'Ошибка при создании превью',
          status: 'error',
        })
        return "Failed to create preview";
      }

      payloadInput['preview'] = previewResponse.payload
    }

    if (Object.keys(payloadInput).length === 0) {
      activeNotification({
        message: 'Нет изменений',
        status: 'error',
      })
      return;
    }

    updatePlace({
      ...payloadInput,
      id,
    });
  };

  return (
    <ButtonRG
    disabled={loading}
    handleClick={handleUpdate}
    >
    Редактировать
    </ButtonRG>
  );
};

export { PlaceUpdate };
