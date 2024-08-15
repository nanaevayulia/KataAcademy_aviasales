// import PropTypes from 'prop-types';
import Sidebar from '../sidebar';
import Main from '../main/main';

import style from './app.module.scss';
import logo from './logo-aviasales.png';

export default function App() {
  return (
    <div className={style.app}>
      <img className={style['app_logo']} src={logo} alt="logo aviasales" />
      <Sidebar />
      <Main />
    </div>
  );
}
