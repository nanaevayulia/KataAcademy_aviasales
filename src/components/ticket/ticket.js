import { addMinutes, format } from 'date-fns';

import style from './ticket.module.scss';

export default function Ticket({ ticket }) {
  const { price, carrier, segments } = ticket;

  const departureTime = (date) => format(date, 'HH:mm');
  const arrivalTime = (date, duration) => format(addMinutes(date, duration), 'HH:mm');

  const flightTime = (time) => {
    const hours = Math.floor(time / 60);
    const mins = time - hours * 60;
    return `${hours}ч ${mins}м`;
  };

  const stopsCount = (arr) => {
    const count = arr.length;
    if (count === 0) {
      return 'Без пересадок';
    } else if (count === 1) {
      return '1 пересадка';
    } else if (count < 5) {
      return `${count} пересадки`;
    } else {
      return `${count} пересадок`;
    }
  };

  return (
    <div className={style.ticket}>
      <div className={style['price_logo']}>
        <div className={style['ticket__price']}>{price.toLocaleString()}p</div>
        <img className={style['ticket__logo']} src={`//pics.avs.io/99/36/${carrier}.png`} alt="Логотип авиакомпании" />
      </div>
      {segments.map(({ origin, destination, date, stops, duration }, id) => {
        return (
          <div className={style['ticket__info']} key={id}>
            <p className={style['ticket__text']}>{`${origin} - ${destination}`}</p>
            <p className={style['ticket__text']}>В пути</p>
            <p className={style['ticket__text']}>{stopsCount(stops)}</p>
            <p className={style['ticket__data']}>{`${departureTime(date)} - ${arrivalTime(date, duration)}`}</p>
            <p className={style['ticket__data']}>{flightTime(duration)}</p>
            <p className={style['ticket__data']}>{stops.join(', ')}</p>
          </div>
        );
      })}
    </div>
  );
}
