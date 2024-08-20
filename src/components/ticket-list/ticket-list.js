import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Spin, Alert } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import { getTicketsApi } from '../../actions/api-actions';
import Ticket from '../ticket';

import style from './ticket-list.module.scss';

const TicketList = ({ tickets, loading, error, getTicketsApi }) => {
  const count = 5;
  useEffect(() => {
    getTicketsApi();
  }, []);

  const spinner = loading ? <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} /> : null;
  const errorMessage = error ? (
    <Alert message="Упс, возникла ошибка!" description="К сожалению, указанная страница не найдена" type="error" />
  ) : null;
  const ticketsSlice = tickets.slice(0, count);

  const ticketsList =
    ticketsSlice.length > 0 && !error && !loading ? (
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
      </>
    ) : null;

  return (
    <div className={style.ticketList}>
      {spinner}
      {errorMessage}
      {ticketsList}
      <button className={style.button}>Показать еще 5 билетов!</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    tickets: state.apiReducer.tickets,
    loading: state.apiReducer.loading,
    error: state.apiReducer.error,
  };
};

export default connect(mapStateToProps, { getTicketsApi })(TicketList);
