import { useState } from "react";
import { usePlaceSelect, useRemovePlace } from "../../../entities";
import { ButtonRG, FormCard } from "../../../shared";
import ModalConfirmation from "../../../shared/ui/modal-confirmation/ModalConfirmation";

import styles from "./PlaceRemoveForm.module.scss";

const PlaceRemoveForm = ({ id }: { id: string | undefined }) => {
  const { removePlace } = useRemovePlace()
  const [isOpen, setIsOpen] = useState(false);
  const { loading } = usePlaceSelect()

  const handleRemove = () => {
    removePlace({ id: Number(id) })
  }

  if (loading) {
    return null;
  }

  return (
    <FormCard title={"Удаление места"}>
      <ModalConfirmation 
      isOpen={isOpen}
      closeModal={() => setIsOpen(false)}
      onClick={handleRemove}
      status='error'
      titleText="Вы уверены, что хотите удалить место?"
      subTitleText="После подтверждения данное место удалится. Обратите внимание: Удаление места будет невозможно отменить!"
      buttonText={{ cancel: 'Выйти и не удалять', submit: 'Удалить' }}
      />
      <div className={styles.buttonContainer}>
        <ButtonRG color="danger" handleClick={() => setIsOpen(true)}>
          Удалить место
        </ButtonRG>
      </div>
    </FormCard>
  );
};

export { PlaceRemoveForm };
