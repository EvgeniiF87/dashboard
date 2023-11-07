import { useFetchAllEvents } from '../../../entities';
import { EventItem } from '../event-item/EventItem';
import { SkeletonTable } from '../../skeleton/skeleton-table/SkeletonTable';
import { EventService } from '../../../entities/event/domain/services';

import styles from './EventsTableList.module.scss';

const EventsTableList = () => {
  const { loading, error, events } = useFetchAllEvents();
  
  if (error) {
    return <div>Error: {error}</div>; // TODO create Error components
  }

  if (loading) {
    return <SkeletonTable/>; 
  }

  const categoryTranslate = EventService.directionsTranslate()

  return (
    <ul className={styles.root}>
      {events.map(event =>
        <EventItem 
        event={event} 
        key={event.id} 
        direction={categoryTranslate[event.direction]} 
        />
      )}
    </ul>
  );
};

export { EventsTableList };