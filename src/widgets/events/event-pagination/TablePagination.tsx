import { useState } from "react";
import { useChangeEventsPage, useEventsSelect, useGetEventsPaginationPage } from "../../../entities";
import { Pagination, TotalCountList } from "../../../shared";

import styles from './TablePagination.module.scss';


const TablePagination = () => {
  const { events } = useEventsSelect()
  const { changePage } = useChangeEventsPage()
  const { eventsCurrentPage, eventsPerPage } = useGetEventsPaginationPage()
  const [limit, setLimit] = useState(10)

  const handleChangeLimit = ({ limit }: { limit: number }) => {
    setLimit(limit)
  }

  return (
    <>
       {events.length > eventsPerPage && ( 
        <div className={styles.paginationContainer}>
        <Pagination
          color="violet"
          clickNumber={(value) => changePage({ page: value })}
          countPerPage={eventsPerPage}
          currentPage={eventsCurrentPage}
          nextPage={() => changePage({ page: eventsCurrentPage + 1 })}
          prevPage={() => changePage({ page: eventsCurrentPage - 1 })}
          totalCount={events.length - 1}
          />
        <TotalCountList onClick={handleChangeLimit} currentValue={limit} />
          </div>
      )}
    </>
  );
};

export { TablePagination };