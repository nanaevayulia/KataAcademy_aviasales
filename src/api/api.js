/* eslint-disable indent */
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

export const getTickets = async (repeatCount = 1) => {
  try {
    const searchId = await setSearchId();
    const url = `${_baseURL}tickets?searchId=${searchId}`;
    const response = await fetch(url);

    if (!response.ok) {
      return repeatCount > 0
        ? getTickets(repeatCount - 1)
        : (function () {
            throw new Error(`Could not fetch ${url}, received ${response.status}`);
          })();
    }

    const obj = await response.json();
    const { stop, tickets } = await obj;

    if (stop) {
      sessionStorage.removeItem('searchId');
    }

    return { stop, tickets };
  } catch (err) {
    console.error('Возникла проблема с fetch запросом: ', err.message);
    return err.message;
  }
};
