import { connect } from 'react-redux';

import * as actions from '../../actions/filter-actions';

import style from './filter.module.scss';

function Filter({ checkboxList, filterAll, filterTransfer }) {
  const toggleCheckbox = (checked, value) => {
    const all = { ...checkboxList[0] };
    const points = checkboxList.slice(1);

    if (value === 'all') {
      filterAll(checked);
    } else {
      if (all.checked && !checked) {
        filterTransfer('all');
      } else if (points.filter((item) => item.checked).length === 3 && !all.checked && checked) {
        filterTransfer('all');
      }
      filterTransfer(value);
    }
  };

  return (
    <div className={style.filter}>
      <legend className={style['filter__title']}>Количество пересадок</legend>
      <>
        {checkboxList.map(({ label, value, checked }, id) => {
          return (
            <div key={id} className={style['filter__wrapper']} onChange={() => toggleCheckbox(!checked, value)}>
              <input className={style.checkbox} type="checkbox" id={value} name={value} checked={checked} readOnly />
              <label className={style.label} htmlFor={value}>
                {label}
              </label>
            </div>
          );
        })}
      </>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    checkboxList: state.filterReducer,
  };
};

export default connect(mapStateToProps, actions)(Filter);
