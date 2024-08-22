import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Spin, Alert } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import { getTicketsApi } from '../../actions/api-actions';
import Ticket from '../ticket';
import ShowMoreButton from '../showMore-button';

import style from './ticket-list.module.scss';

const TicketList = ({ tickets, loading, error, sorting, filter, getTicketsApi }) => {
  const [count, setCount] = useState(5);

  useEffect(() => {
    getTicketsApi();
  }, []);

  useEffect(() => {
    if (loading) {
      getTicketsApi();
      if (!loading) {
        return () => console.log('unmount');
      }
    }
  }, [loading, tickets]);

  const showMoreTickets = () => {
    setCount((count) => {
      return count + 5;
    });
  };

  const totalDuration = (ticket) => {
    return ticket.segments.reduce((acc, segment) => {
      return (acc += segment.duration);
    }, 0);
  };

  const filterTickets = (tickets, filterValue) => {
    let filterList = [];
    for (let item of filterValue) {
      if (item.value === 'zero-transfer' && item.checked) {
        filterList.push(
          ...tickets.filter((el) => el.segments[0].stops.length === 0 || el.segments[1].stops.length === 0)
        );
      } else if (item.value === 'one-transfer' && item.checked) {
        filterList.push(
          ...tickets.filter((el) => el.segments[0].stops.length === 1 || el.segments[1].stops.length === 1)
        );
      } else if (item.value === 'two-transfer' && item.checked) {
        filterList.push(
          ...tickets.filter((el) => el.segments[0].stops.length === 2 || el.segments[1].stops.length === 2)
        );
      } else if (item.value === 'three-transfer' && item.checked) {
        filterList.push(
          ...tickets.filter((el) => el.segments[0].stops.length === 3 || el.segments[1].stops.length === 3)
        );
      }
    }
    return filterList;
  };

  const sortingValue = sorting.filter((el) => el.checked)[0].value;
  const sortingTicketList = (tickets, sortingValue) => {
    if (sortingValue === 'cheapest') {
      return [...tickets].sort((prevPrice, nextPrice) => prevPrice.price - nextPrice.price);
    } else if (sortingValue === 'fastest') {
      return [...tickets].sort(
        (prevDuration, nextDuration) => totalDuration(prevDuration) - totalDuration(nextDuration)
      );
    } else if (sortingValue === 'optimal') {
      return [...tickets].sort((prev, next) => totalDuration(prev) + prev.price - (totalDuration(next) + next.price));
    }
  };

  const spinner = loading && <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />;
  const errorMessage =
    error && !loading ? (
      <Alert message="Упс, возникла ошибка!" description="К сожалению, указанная страница не найдена" type="error" />
    ) : null;

  const ticketsSlice = sortingTicketList(filterTickets(tickets, filter), sortingValue).slice(0, count);

  const noTickets =
    ticketsSlice.length === 0 && !error && !loading ? (
      <div className={style.noTickets}>Рейсов, подходящих под заданные фильтры, не найдено</div>
    ) : null;

  const ticketsList =
    ticketsSlice.length > 0 && !error ? (
      <>
        <ul className={style.list}>
          {ticketsSlice.map((ticket, id) => {
            return (
              <li key={id}>
                <Ticket ticket={ticket} />
              </li>
            );
          })}
        </ul>
        <ShowMoreButton tickets={filterTickets(tickets, filter)} onClick={showMoreTickets} count={count} />
      </>
    ) : null;

  return (
    <div className={style.ticketList}>
      {spinner}
      {errorMessage}
      {ticketsList}
      {noTickets}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    tickets: state.apiReducer.tickets,
    loading: state.apiReducer.loading,
    error: state.apiReducer.error,
    sorting: state.sortingReducer,
    filter: state.filterReducer,
  };
};

export default connect(mapStateToProps, { getTicketsApi })(TicketList);
