const _baseURL = 'https://aviasales-test-api.kata.academy/';

const setSearchId = async () => {
  if (sessionStorage.getItem('searchId')) {
    return sessionStorage.getItem('searchId');
  }

  const resp = await fetch(`${_baseURL}search`);
  const obj = await resp.json();

  sessionStorage.setItem('searchId', obj.searchId);
  return obj.searchId;
};

export const getTickets = async () => {
  try {
    const searchId = await setSearchId();
    const response = await fetch(`${_baseURL}tickets?searchId=${searchId}`);
    const obj = await response.json();
    const { stop, tickets } = await obj;

    if (stop) {
      sessionStorage.removeItem('searchId');
    }

    return { stop, tickets };
  } catch (err) {
    if (err.status === 500) {
      getTickets();
    }
    console.error('Возникла проблема с fetch запросом: ', err.message);
    return err.message;
  }
};
