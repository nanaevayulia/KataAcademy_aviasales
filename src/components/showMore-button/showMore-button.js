import style from './showMore-button.module.scss';

const ShowMoreButton = ({ tickets, count, onClick }) => {
  const noShowTickets = tickets.length - count;
  const text = (count) => {
    if (count >= 5) {
      return '5 билетов!';
    } else if (count >= 2) {
      return `${count} билета`;
    } else if (count >= 1) {
      return '1 билет';
    }
  };

  return (
    <>
      {noShowTickets > 0 && (
        <button className={style.button} onClick={onClick}>
          Показать еще {text(noShowTickets)}
        </button>
      )}
    </>
  );
};

export default ShowMoreButton;
