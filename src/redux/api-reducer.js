/* eslint-disable indent */
const initialState = {
  tickets: [],
  loading: true,
  error: false,
};

const apiReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'getTickets':
      return { ...state, tickets: [...state.tickets, ...action.payload] };

    case 'loading':
      return { ...state, loading: action.payload };

    case 'error':
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

export default apiReducer;
