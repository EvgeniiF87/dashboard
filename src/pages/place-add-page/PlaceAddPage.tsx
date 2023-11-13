import { useEffect } from "react";
import { useResetManagmentInputs } from "../../entities";
import { ContentHeader } from "../../shared";
import { PLACES } from "../../shared/constants/places";
import { ManagmentPlaceForm } from "../../widgets/places";

import styles from "../event-add-page/EventAddPage.module.scss"


const PlaceAddPage = () => {
  const { resetManagmentInputs } = useResetManagmentInputs()

  useEffect(() => {
    resetManagmentInputs()

    return () => {
      resetManagmentInputs()
    }
  },[])

  return (
    <div className={styles.eventsWrapper}>
      <ContentHeader
      title="Добавить место" 
      breadcrumbs={PLACES.breadcrumbPlaceAddPage}
      />
    <ManagmentPlaceForm />
    </div>
  );
};

export default PlaceAddPage;