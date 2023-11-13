import { useEffect } from "react";
import { useChangePlacePage, useFetchPlacesTotalCount, usePaginationSelect, usePlaceSelect } from "../../../entities";
import { Pagination, TotalCountList } from "../../../shared";

import styles from './PlaceTablePagination.module.scss';


const PlaceTablePagination = () => {
  const { placePagination: { currentPage, perPage, totalCount } } = usePaginationSelect()
  const { changePage, changePerPage } = useChangePlacePage()
  const { places } = usePlaceSelect()
  const { fetchCount } = useFetchPlacesTotalCount()

  useEffect(() => {
    fetchCount()
  }, [places])


  const handleChangeLimit = ({ limit }: { limit: number }) => {
    changePerPage({ perPage: limit })
  }


  return (
    <>
        <div className={styles.paginationContainer}> 
        <div  className={styles.pagination}>
       {totalCount && totalCount > perPage && ( 
         <Pagination
         color="violet"
         clickNumber={(value) => changePage({ page: value })}
         countPerPage={perPage}
         currentPage={currentPage}
         nextPage={() => changePage({ page: currentPage + 1 })}
         prevPage={() => changePage({ page: currentPage - 1 })}
         totalCount={totalCount}
         />
         )}
         </div>
        <TotalCountList totalLength={totalCount ?? 0} onClick={handleChangeLimit} currentValue={perPage} />
          </div>
    </>
  );
};

export { PlaceTablePagination };