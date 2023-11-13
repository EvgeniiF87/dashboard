import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetOnePlace, useResetManagmentInputs } from "../../entities";
import { ContentHeader, PLACES } from "../../shared";
import { ManagmentPlaceForm, PlaceRemoveForm } from '../../widgets/places';

const PlaceUpdatePage = () => {
  const { id } = useParams()
  const { getOnePlace } = useGetOnePlace()
  const { resetManagmentInputs } = useResetManagmentInputs()


  useEffect(() => {
    getOnePlace({ id: Number(id) })

    return () => {
      resetManagmentInputs()
    }
  },[])

  return (
    <>
     <ContentHeader
      title="Редактировать место" 
      breadcrumbs={PLACES.breadcrumbPlaceEditPage}
      />
      <ManagmentPlaceForm  id={id} />
      <PlaceRemoveForm id={id} /> 
    </>
  );
};

export default PlaceUpdatePage;