import { connect } from 'react-redux';

import { sortingTickets } from '../../actions/sorting-actions';

import style from './sorting-tab.module.scss';

const SortingTab = ({ sortTabs, sortingTickets }) => {
  return (
    <ul className={style['tabs']}>
      {sortTabs.map((el, id) => {
        return (
          <li
            key={id}
            className={`${style['tabs__item']} ${el.checked ? style['checked'] : ''}`}
            onClick={() => sortingTickets(el.value)}
          >
            <span>{el.text}</span>
          </li>
        );
      })}
    </ul>
  );
};

const mapStateToProps = (state) => ({ sortTabs: state.sortingReducer });

export default connect(mapStateToProps, { sortingTickets })(SortingTab);
