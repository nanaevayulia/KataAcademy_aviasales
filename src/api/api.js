const _baseURL = 'https://aviasales-test-api.kata.academy/';

const fetchAPI = async (url) => {
  try {
    const resp = await fetch(url);

    if (!resp.ok) {
      throw new Error(`Could not fetch ${_baseURL}, received ${resp.status}`);
    }
    return await resp.json();
  } catch (err) {
    console.error('Возникла проблема с fetch запросом: ', err.message);
    return err.message;
  }
};

export const setSearchId = () => {
  if (sessionStorage.getItem('searchId')) {
    return sessionStorage.getItem('searchId');
  }

  return fetchAPI(`${_baseURL}search`).then(({ searchId }) => {
    sessionStorage.setItem('searchId', searchId);
    return searchId;
  });
};

export const getTickets = async () => {
  const searchId = await setSearchId();

  const response = await fetchAPI(`${_baseURL}tickets?searchId=${searchId}`);
  if (response.stop) sessionStorage.removeItem('searchId');
  return response;
};
