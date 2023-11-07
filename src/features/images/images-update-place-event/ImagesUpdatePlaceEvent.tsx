import type { FC } from "react";
import { useUpdateImagePlaceOrEvent } from "../../../entities/image/application/useImage";
import { ButtonRG } from "../../../shared";

type ImagesUpdatePlaceEventProps = {
  id: number
  eventId?: number;
  path: string;
  placeId?: number; 
}

/** Создание изменения для place or events */
const ImagesUpdatePlaceEvent: FC<ImagesUpdatePlaceEventProps> = ({ id, path, eventId, placeId }) => {
  const { updateImage } = useUpdateImagePlaceOrEvent()

  const handleCreateImage = () => {
    updateImage({
      id,
      eventId,
      path,
      placeId,
    })
  }

  return (
    <ButtonRG 
     disabled={false}
     handleClick={handleCreateImage}
    >
      Изменить изображение
    </ButtonRG>
  );
};

export  {ImagesUpdatePlaceEvent};