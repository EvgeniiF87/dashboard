import { useAppDispatch } from "../../../shared";
import { usePaginationSelect, paginationAction} from "../model";
import { fetchCountEvents, fetchCountPlaces, fetchCountUsers } from '../model/thunk';


export function useChangeEventsPage() {
  const dispatch = useAppDispatch();

  async function changePage({ page }: { page: number }) {
    dispatch(paginationAction.eventsChangePage({ page }))
  }

  return { changePage };
}

export function useChangePlacePage() {
  const dispatch = useAppDispatch();

  function changePage({ page }: { page: number }) {
    dispatch(paginationAction.placeChangePage({ page }))
  }

   function changePerPage({ perPage }: { perPage: number }) {
    dispatch(paginationAction.placeChangePerPage({ perPage }))
  }

  return { changePage, changePerPage };
}


export function useFetchEventsTotalCount() {
  const dispatch = useAppDispatch();

  const fetchCount = () => {
    dispatch(fetchCountEvents())
  }

  return { fetchCount };
}

export function useFetchPlacesTotalCount() {
  const dispatch = useAppDispatch();

  const fetchCount = () => {
    dispatch(fetchCountPlaces())
  }

  return { fetchCount };
}

export function useFetchUsersTotalCount() {
  const dispatch = useAppDispatch();

  const fetchCount = () => {
    dispatch(fetchCountUsers())
  }

  return { fetchCount };
}

export function useGetEventsPaginationPage() {
  const { eventsCurrentPage, eventsPerPage } = usePaginationSelect()

  return { eventsCurrentPage, eventsPerPage };
}


