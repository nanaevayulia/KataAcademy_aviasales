import SortingTab from '../sorting-tab';
import TicketList from '../ticket-list';

import style from './main.module.scss';

export default function Main() {
  return (
    <div className={style.main}>
      <SortingTab />
      <TicketList />
    </div>
  );
}
