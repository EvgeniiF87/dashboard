import { useState } from "react";
import { AddEventsAdditionslTagsCard } from "../add-events-additionsl-tags-card/AddEventsAdditionslTagsCard";
import { ButtonRG } from "../../../shared";

import styles from "./AddEventsAdditionalForms.module.scss";
import { AddEventsAdditionalPaimentCard } from "../add-events-additional-paiment-card/AddEventsAdditionalPaimentCard";


const AddEventsAdditionalForms = () => {
  const [tagValue, setTagValue] = useState<string>('')
  const [tagsList, ] = useState<{ category: string; tags: string[] }[]>([])

  const handleOnchangeInputTags = (value: string) => {
    setTagValue(value)
  }

  return (
    <div className={styles.root}>

      <AddEventsAdditionslTagsCard
      cardTitle="Теги события"
      tagValue={tagValue}
      tagsList={tagsList}
      onChange={handleOnchangeInputTags}
      />

      <AddEventsAdditionalPaimentCard
      cardTitle="Способы оплаты"
      />

    
    <div className={styles.submitContainer}>
      <ButtonRG handleClick={() => {}}>
      Сохранить
      </ButtonRG>
      </div>
    </div>
  );
};

export  { AddEventsAdditionalForms };