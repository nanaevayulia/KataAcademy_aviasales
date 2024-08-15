import style from './sorting-tab.module.scss';

export default function SortingTab() {
  return (
    <div className={style['tabs']}>
      <div className={`${style['tabs__item']} ${style.active}`}>
        <span>Самый дешевый</span>
      </div>
      <div className={style['tabs__item']}>
        <span>Самый быстрый</span>
      </div>
      <div className={style['tabs__item']}>
        <span>Оптимальный</span>
      </div>
    </div>
  );
}
