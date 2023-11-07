import { PlaceItem } from "../place-table-item/PlaceItem";
import { useFetchAllPlace } from "../../../entities";
import { SkeletonTable } from "../../skeleton/skeleton-table/SkeletonTable";
import { PlaceService } from "../../../entities/place/domain/service";

import styles from "./PlaceTableList.module.scss";

const PlaceTableList = () => {
  const { error, loading, places } = useFetchAllPlace()


  if (error) {
    return <div>Error: {error}</div>; 
  }

  if (loading) {
    return <SkeletonTable/>; 
  }

  const categoryTranslate = PlaceService.directionsTranslate()


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