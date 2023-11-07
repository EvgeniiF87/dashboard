import { ContentHeader, EVENTS, TableHeader } from "../../shared";
import { TablePagination, EventsOptions, ModalEventsManagement } from "../../widgets";
import { EventsTableList } from "../../widgets/events/events-table-list/EventsTableList";

import styles from "./EventsPage.module.scss";

const EventsPage = () => {

  return (
    <>
      <ModalEventsManagement />
      <ContentHeader
        title="Список событий"
        breadcrumbs={EVENTS.breadcrumbEventsPage}
      />
      <div className={styles.tableWrapper}>
        <EventsOptions /> {/** В этот компонент фильтрацию, поиск... */}
        <div className={styles.tableHeaderWrapper}>
          <TableHeader tableList={EVENTS.tableHeadList} />
        </div>
        <EventsTableList />
        <TablePagination />
      </div>
    </>
  );
};

export default EventsPage;
