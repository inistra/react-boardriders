import React from "react";
import s from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={s.footer}>
      <div className={s.content}>
        <div className={s.top}>
          <img alt="logo" />
          <div className={s.mailing}>
            <img className={s.mail} alt="mail" />
            <input
              type="text"
              placeholder="Подпишись на рассылку и получи -10% скидку"
            />
            <button className={s.send}>
              <img alt="send" />
            </button>
          </div>
        </div>
        <div className={s.middle}>
          <div className={s.app}>
            <ul>
              <li>
                <a href="/">
                  <img alt="" />
                </a>
              </li>
              <li>
                <a href="/">
                  <img alt="" />
                </a>
              </li>
            </ul>
          </div>
          <div className={s.connection}></div>
          <div className={s.connection}></div>
          <div className={s.connection}></div>
        </div>
        <div className={s.bottom}></div>
      </div>
    </div>
  );
};

export default Footer;
