import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PlaceModel } from "../../../entities";
import { CheckBox, EmptyPhoto, OptionsSvg } from "../../../shared";


import styles from "./PlaceItem.module.scss";

type PlaceItemProps = {
  place: PlaceModel;
  direction: string;
};

const PlaceItem = ({ direction, place }: PlaceItemProps) => {
  const [active, setActive] = useState(false)
  const [activePublic, setActivePublic] = useState(place.publish)
  const navigate = useNavigate()


  return (
    <li className={styles.event}>
      <span className={styles.eventOptions}>
        <div 
        className={styles.optionButton} 
        onClick={() => navigate(`/places/edit/${place.id}`)}
        >
          <OptionsSvg />
        </div>
      </span>
      <span className={styles.checkbox}>
        <CheckBox active={active} onClick={() => setActive(!active)}/>
      </span>
      <span>{place.id}</span>
      <span>{place.title}</span> 
      <span>{place.desc}</span>
      <span>{direction}</span>
      <span className={styles.imageContainer}>
        {place.preview
        ? <img className={styles.eventImage} src={place.preview} alt="Place preview images" />
        : <div className={styles.emptyPhotoBox}>
            <EmptyPhoto/>
          </div>
      }
      </span>
      <span className={styles.checkbox}>
        <CheckBox active={activePublic} onClick={() => setActivePublic(!activePublic)}/> 
      </span>
    </li>
  );
};

export { PlaceItem };