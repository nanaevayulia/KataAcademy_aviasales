import { getTickets } from '../api/api';

const getTicketList = (payload) => ({ type: 'getTickets', payload });
const getLoading = (payload) => ({ type: 'loading', payload });
const getError = (payload) => ({ type: 'error', payload });

export const getTicketsApi = () => (dispatch) => {
  return getTickets()
    .then(({ stop, tickets }) => {
      dispatch(getTicketList(tickets));
      dispatch(getLoading(!stop));
      dispatch(getError(false));
    })
    .catch(() => {
      dispatch(getTicketList([]));
      dispatch(getLoading(false));
      dispatch(getError(true));
    });
};
