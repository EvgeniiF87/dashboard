import { PlaceItem } from "../place-table-item/PlaceItem";
import { useFetchAllPlace } from "../../../entities";
import { PlaceService } from "../../../entities/place/domain/service";
import { Loader } from "../../../shared";

import styles from "./PlaceTableList.module.scss";

const PlaceTableList = () => {
  const { error, loading, places } = useFetchAllPlace()


  if (error) {
    return <div>Error: {error}</div>; 
  }

  if (loading) {
    return <Loader/>; 
  }

  const categoryTranslate = PlaceService.directionsPlaceTranslate()


  return (
    <ul className={styles.root}>
    {places.map(place =>
      <PlaceItem
      place={place} 
      key={place.id} 
      direction={categoryTranslate[place.direction]} 
      />
    )}
  </ul>
  );
};

export  { PlaceTableList };