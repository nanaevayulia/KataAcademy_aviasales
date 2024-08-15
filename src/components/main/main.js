// import Spinner from '../spinner';
import SortingTab from '../sorting-tab';
import TicketList from '../ticket-list';
// import Error from '../error/error';

import style from './main.module.scss';

export default function Main() {
  return (
    <div className={style.main}>
      <SortingTab />
      <TicketList />
    </div>
  );
}
