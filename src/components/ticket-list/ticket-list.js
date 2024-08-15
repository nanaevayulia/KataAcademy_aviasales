import Ticket from '../ticket';

import style from './ticket-list.module.scss';

export default function TicketList() {
  return (
    <div className={style.ticketList}>
      <Ticket />
      <Ticket />
      <Ticket />
      <button className={style.button}>Показать еще 5 билетов!</button>
    </div>
  );
}
