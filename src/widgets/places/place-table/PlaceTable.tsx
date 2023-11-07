import { PLACES, TableHeader } from "../../../shared";
import { EventsOptions } from "../../events";
import { PlaceTableList } from "../place-table-list/PlaceTableList";
import { PlaceTablePagination } from "../place-table-pagination/PlaceTablePagination";

import styles from "./PlaceTable.module.scss";

const PlaceTable = () => {
  

  return (
    <div className={styles.tableWrapper}>
    {/** TODO EventsOptions сделать или общим для events и places 
     * или сделать отдельно для PlaceTable, пока фильтрация по направлению
     * тоесть можно сделать DropDown со списком направлений
     */}
    <EventsOptions /> 
    <div className={styles.tableHeaderWrapper}>
      <TableHeader tableList={PLACES.tableHeadList} />
    </div>
    <PlaceTableList /> 
    <PlaceTablePagination />
  </div>
  );
};

export { PlaceTable };