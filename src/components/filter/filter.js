import style from './filter.module.scss';

export default function Filter() {
  return (
    <div className={style.filter}>
      <p className={style['filter__title']}>Количество пересадок</p>
      <div className={style['filter__wrapper']}>
        <input className={style.checkbox} type="checkbox" id="all" name="All" checked />
        <label className={style.label} htmlFor="all">
          Все
        </label>
      </div>
      <div className={style['filter__wrapper']}>
        <input className={style.checkbox} type="checkbox" id="zero_transfer" name="Zero" />
        <label className={style.label} htmlFor="zero_transfer">
          Без пересадок
        </label>
      </div>
      <div className={style['filter__wrapper']}>
        <input className={style.checkbox} type="checkbox" id="one_transfer" name="One" />
        <label className={style.label} htmlFor="one_transfer">
          1 пересадка
        </label>
      </div>
      <div className={style['filter__wrapper']}>
        <input className={style.checkbox} type="checkbox" id="two_transfer" name="Two" />
        <label className={style.label} htmlFor="two_transfer">
          2 пересадки
        </label>
      </div>
      <div className={style['filter__wrapper']}>
        <input className={style.checkbox} type="checkbox" id="three_transfer" name="Three" />
        <label className={style.label} htmlFor="three_transfer">
          3 пересадки
        </label>
      </div>
    </div>
  );
}
