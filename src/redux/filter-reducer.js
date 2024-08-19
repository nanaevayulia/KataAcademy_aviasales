/* eslint-disable indent */
const initialState = [
  { label: 'Все', value: 'all', checked: true },
  { label: 'Без пересадок', value: 'zero-transfer', checked: true },
  { label: '1 пересадка', value: 'one-transfer', checked: true },
  { label: '2 пересадки', value: 'two-transfer', checked: true },
  { label: '3 пересадки', value: 'three-transfer', checked: true },
];

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'all':
      return state.map((el) => (el.checked !== action.checked ? { ...el, checked: !el.checked } : { ...el }));

    case 'filter':
      return state.map((el) => (el.value === action.value ? { ...el, checked: !el.checked } : { ...el }));

    default:
      return state;
  }
};

export default filterReducer;
