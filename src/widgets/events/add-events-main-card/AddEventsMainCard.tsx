import type { FC } from "react";
import { CheckBox, Dropdown, FormCard, Input, OptionsSelectType, TextArea } from "../../../shared";

import styles from "./AddEventsMainCard.module.scss";

type AddEventsMainCardProps = {
  cardTitle: string;
  titleValue: string;
  description: string;
  recommended: boolean;
  publicValue: boolean;
  selectionList: OptionsSelectType[];
  directionValue: OptionsSelectType;
  changeInput: (value: string) => void;
};

const AddEventsMainCard: FC<AddEventsMainCardProps> = (props) => {
  const {
    cardTitle,
    description,
    publicValue,
    recommended,
    titleValue,
    selectionList,
    changeInput,
    directionValue,
  } = props;

  return (
    <FormCard title={cardTitle}>
      <div className={styles.inputTitleContainer}>
        <Input
          error={false}
          value={titleValue}
          label="Наименование"
          placeholder="Введите наименование"
          onChange={(e) => changeInput(e.target.value)}
          />
      </div>
      <TextArea
        placeholder="Введите описание"
        onChange={(e) => changeInput(e.target.value)}
        value={description}
        errorText="Введите описание"
        error={false}
        labelText="Описание"
        />
            <Dropdown
              error={false}
              errorText="Не выбрана категория"
              label="Направление"
              onSelect={() => {}}
              // onSelect={(value) => setSelecDirection(value)}
              options={selectionList}
              width={480}
              selected={directionValue}
              />


       <div className={styles.checkboxContainer}>
         <CheckBox
         label="Рекомендуемое"
         active={recommended}
         onClick={() => {}}
         // onClick={() => setRecommendedValue((prev) => !prev)}
         />

          <CheckBox
              label="Публичное"
              active={publicValue}
              onClick={() => {}}
              // onClick={() => setPublicValue((prev) => !prev)}
          />
              </div>
    </FormCard>
  );
};

export { AddEventsMainCard };
