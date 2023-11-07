import { ContentHeader, PLACES } from "../../shared";
import { PlaceTable,  } from "../../widgets/places";


const PlacesPage = () => {

  return (
    <>
      <ContentHeader
      title="Список мест" 
      breadcrumbs={PLACES.breadcrumbPlacesPage}
      />
      <PlaceTable/>
    </>
  );
};

export default PlacesPage;