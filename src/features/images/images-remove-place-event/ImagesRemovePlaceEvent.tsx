import type { FC } from "react";
import {
  useRemoveImagePlaceOrEvent,
} from "../../../entities/image/application/useImage";
import { ButtonRG } from "../../../shared";

type ImagesRemovePlaceEventProps = {
  id: number;
};

/** Удаление изображения для place or events */
const ImagesRemovePlaceEvent: FC<ImagesRemovePlaceEventProps> = ({ id }) => {
  const { removeImage } = useRemoveImagePlaceOrEvent();

  const handleCreateImage = () => {
    removeImage({ id });
  };

  return (
    <ButtonRG 
    disabled={false} 
    handleClick={handleCreateImage}
    >
      Удалить изображение
    </ButtonRG>
  );
};

export { ImagesRemovePlaceEvent };
