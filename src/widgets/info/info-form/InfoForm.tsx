import { useState } from "react";
import type { FC } from "react";
import { ButtonRG, CheckBox, Input, TimeHours } from "../../../shared";
import { InfoCreate, InfoUpdate } from "../../../features";

import styles from "./InfoForm.module.scss";

type InfoFormProps = {
  eventId?: number;
  placeId?: number;
  variant: 'update' | 'create';
}


const InfoForm: FC<InfoFormProps> = ({ eventId, placeId, variant }) => {
  const [addresValue, setAddresValue] = useState<string>("ул.Пятницкая дом 42");
  const [metroValue, setMetroValue] = useState<string>("ул. Большая Ордынка 72");
  const [phoneValue, setPhoneValue] = useState<string>("79494197155");
  const [socialValue, setSocialValue] = useState<string>("");
  const [siteValue, setSiteValue] = useState<string>("http://localhost:5173/events");
  const [callBackValue, setCallBackValue] = useState<boolean>(false);
  
  const [latitudeValue, ] = useState<string>("55.7151");
  const [longitudeValue, ] = useState<string>("ул.Пятницкая дом 42");


  const [timeFrom, setTimeFrom] = useState<string>('0000');
  const [timeTo, setTimeTo] = useState<string>('0000');

  return (
    <div className={styles.root}>


<div className={styles.infoContainer}>

  <div className={styles.leftSideContainer}>
    <Input
      error={false}
      value={addresValue}
      label="Место проведения"
      placeholder="Введите адрес"
      onChange={(e) => setAddresValue(e.target.value)}
      />
    <Input
      error={false}
      value={metroValue}
      label="Станция метро"
      placeholder="Введите метро"
      onChange={(e) => setMetroValue(e.target.value)}
      />

        {/* <span>режим работы</span> */}
      <div className={styles.timeContainer}>
      <TimeHours 
      onChange={setTimeFrom}
      time={timeFrom}
      label="C"
      />
      <TimeHours 
      onChange={setTimeTo}
      time={timeTo}
      label="До"
      />
      </div> 
      
       
      <Input
        error={false}
        value={phoneValue}
        label="Телефон"
        placeholder="Введите телефон"
        onChange={(e) => setPhoneValue(e.target.value)}
        />

          </div>

    <div className={styles.rightSideContainer}>

  <div className={styles.mapContainer}>
    <span className={styles.mapLabel}>Укажите мето на карте</span>
    <img className={styles.infoMap} src="https://res.cloudinary.com/ds289tkqj/image/upload/v1697004331/startap/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2023-10-11_090511_dce7ww.jpg" alt="map image" />
  </div>
  
    <Input
      error={false}
      value={siteValue}
      label="Сайт"
      placeholder="Введите сайт"
      onChange={(e) => setSiteValue(e.target.value)}
      />

       <Input
        error={false}
        value={socialValue}
        label="Соцсети"
        placeholder="Введите ссылку на социальные сети"
        onChange={(e) => setSocialValue(e.target.value)}
        />

      </div>
      </div>

    <div className={styles.footer}>

    <div className={styles.checBoxContainer}>
    <ButtonRG
    className={styles.checkedButton}
    handleClick={() => setCallBackValue((prev) => !prev)}
    disabled={false}
    color="light"
    >
    <CheckBox
            label="Обратный вызов"
            active={callBackValue}
            // onClick={() => setCallBackValue((prev) => !prev)}
            />
  
    </ButtonRG>
  </div>

    <div className={styles.buttonsContainer}>
    <ButtonRG
    disabled={false}
    color="light"
    >
     Удалить
    </ButtonRG>
    <ButtonRG
    disabled={false}
    color="light"
    >
      В черновик
    </ButtonRG>

    {variant === 'create' ?
<InfoCreate
      fields={{
        adress: addresValue,
        dateFrom: new Date(timeFrom),
        dateTo: new Date(timeTo),
        eventId: eventId ? eventId : undefined,
        latitude: latitudeValue, // Map component берем координаты
        longitude: longitudeValue,// Map component берем координаты
        metro: metroValue, 
        phone: phoneValue, 
        site: siteValue,
        placeId: placeId ? placeId : undefined, // TODO Create place
        social: undefined, //TODO ['vk', 'instagram',] 
        call_back: callBackValue,
      }}
      />
      :
      <InfoUpdate
      fields={{
        time_from: undefined,
        time_to: undefined,
        id: eventId ? eventId : Number(placeId),
        eventId: eventId ? eventId : undefined,
        latitude: latitudeValue, // Map component берем координаты
        longitude: longitudeValue, // Map component берем координаты
        metro: metroValue, 
        phone: phoneValue, 
        site: siteValue,
        placeId: placeId ? placeId : undefined, // TODO Create place
        social: undefined,  //TODO ['vk', 'instagram',] 
        call_back: callBackValue, 
      }}
      />
    }
    </div>
      </div>


  </div>
  );
};

export  { InfoForm };