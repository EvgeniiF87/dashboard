import { useState } from 'react'
import { ButtonRG, Dropdown, Input, OptionsSelectType, useAppDispatch } from '../../../shared'
import { EventService } from '../../../entities/event/domain/services';
import styles from "./FilterBlock.module.scss"
import { eventsAction, useEventsSelect } from '../../../entities';

const FilterBlock = () => {

  const {filtersParams} = useEventsSelect()
  const {desc, direction, tag} = filtersParams
  const selectionList = EventService.getDropdownDirections();
  const [selecDirection, setSelecDirection] = useState<
    OptionsSelectType | undefined
  >(selectionList.find((item) => item.value === direction));
  const [tagValue, setTagValue] = useState<string | null>(tag)
  const [descValue, setDescValue] = useState<string | null>(desc)

  const dispatch = useAppDispatch()


  return (
    <div className={styles.wrapper}>
      <Dropdown
        error={false}
        errorText="Не выбрана категория"
        label="Направление"
        onSelect={(value) => setSelecDirection(value)}
        options={selectionList}
        width={480}
        selected={selecDirection ? selecDirection : selectionList[0]}
      />
      <Input
        error={false}
        value={descValue ? descValue : ''}
        label="Описание"
        placeholder="Введите описание"
        onChange={(e) => setDescValue(e.target.value)}
      />
      <Input
        error={false}
        value={tagValue ? tagValue : ''}
        label="Теги"
        placeholder="Введите теги"
        onChange={(e) => setTagValue(e.target.value)}
      />
      <ButtonRG
        handleClick={() => {
          setDescValue("");
          setTagValue("");
          setSelecDirection(selectionList[0]);
          dispatch(
            eventsAction.changeFilter({
              ...filtersParams,
              desc: null,
              title: null,
              direction: null,
              tag: null,
            })
          );
        }}
      >
        Сбросить
      </ButtonRG>
      <ButtonRG
        handleClick={() =>
        
          dispatch(
            eventsAction.changeFilter({
              ...filtersParams,
              desc: descValue,
              //@ts-ignore
              direction:
                selecDirection?.value === "SelectCategory"
                  ? null
                  : selecDirection?.value,
              tag: tagValue,
            })
          )
        }
      >
        Применить
      </ButtonRG>
    </div>
  );
}

export {FilterBlock }