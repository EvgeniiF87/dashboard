import type { FC } from "react";
import { useCreateImagePlaceOrEvent } from "../../../entities/image/application/useImage";
import { ButtonRG } from "../../../shared";

type ImagesCreatePlaceEventProps = {
  path: string;
  eventId?: number;
  placeId?: number;
}

/** Создание изображения для place or events */
const ImagesCreatePlaceEvent: FC<ImagesCreatePlaceEventProps> = ({ eventId, path, placeId }) => {
  const { createImage } = useCreateImagePlaceOrEvent()

  const handleCreateImage = () => {
    createImage({
      path,
      eventId,
      placeId,
    })
  }

  return (
    <ButtonRG 
     disabled={false}
     handleClick={handleCreateImage}
    >
      Создать изображение 
    </ButtonRG>
  );
};

export  {ImagesCreatePlaceEvent};