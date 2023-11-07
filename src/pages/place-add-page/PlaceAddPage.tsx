import { ContentHeader } from "../../shared";
import { PLACES } from "../../shared/constants/places";
import { CreatePlaceForm } from "../../widgets/places";

import styles from "../event-add-page/EventAddPage.module.scss"


const PlaceAddPage = () => {

  return (
    <div className={styles.eventsWrapper}>
      <ContentHeader
      title="Добавить место" 
      breadcrumbs={PLACES.breadcrumbPlaceAddPage}
      />
    <CreatePlaceForm />
    </div>
  );
};

export default PlaceAddPage;