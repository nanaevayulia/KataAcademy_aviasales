import { getTickets } from '../api/api';

const getTicketList = (payload) => ({ type: 'getTickets', payload });
const getLoading = (payload) => ({ type: 'loading', payload });
const getError = (payload) => ({ type: 'error', payload });

export const getTicketsApi = () => (dispatch) => {
  return getTickets()
    .then((resp) => {
      dispatch(getTicketList(resp.tickets));
      dispatch(getLoading(false));
      dispatch(getError(false));
    })
    .catch(() => {
      dispatch(getError(true));
      dispatch(getLoading(false));
    });
};
