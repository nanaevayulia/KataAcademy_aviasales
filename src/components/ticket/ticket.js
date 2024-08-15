import style from './ticket.module.scss';
import logo from './S7-Logo.png';

export default function Ticket() {
  return (
    <div className={style.ticket}>
      <div className={style['price_logo']}>
        <div className={style['ticket__price']}>13 400p</div>
        <img className={style['ticket__logo']} src={logo} />
      </div>
      <div className={style['ticket__info']}>
        <p className={style['ticket__text']}>MOW – HKT</p>
        <p className={style['ticket__text']}>В пути</p>
        <p className={style['ticket__text']}>2 пересадки</p>
        <p className={style['ticket__data']}>10:45 – 08:00</p>
        <p className={style['ticket__data']}>21ч 15м</p>
        <p className={style['ticket__data']}>HKG, JNB</p>
      </div>
      <div className={style['ticket__info']}>
        <p className={style['ticket__text']}>HKT – MOW</p>
        <p className={style['ticket__text']}>В пути</p>
        <p className={style['ticket__text']}>1 пересадка</p>
        <p className={style['ticket__data']}>11:20 – 00:50</p>
        <p className={style['ticket__data']}>13ч 30м</p>
        <p className={style['ticket__data']}>HKG</p>
      </div>
    </div>
  );
}
