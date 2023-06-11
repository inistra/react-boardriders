import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.top}>
        <div>
          <div className={styles.left}>
            <img alt="place" />
            <ul className={styles.region}>
              <p>Ваш регион доставки:</p>
              <p>Москва</p>
              <img alt="arrow" />
            </ul>
            <ul className={styles.links}>
              <li>
                <a href="/stores">Магазины</a>
              </li>
              <li>
                <a href="/help">Помощь</a>
              </li>
              <li>
                <a href="/blogs">Блоги</a>
              </li>
            </ul>
          </div>
          <ul className={styles.right}>
            <li>
              <img alt="payment" />
              <a href="/free-shipping">Бесплатная доставка*</a>
            </li>
            <li>
              <img alt="delivery" />
              <a href="/cash-on-delivery">Оплата при получении</a>
            </li>
            <li>
              <img alt="refund" />
              <a href="/returns">Возврат в течение 14 дней</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.middle}>
        <div className={styles.filter}>
          <a href="/men">Мужчинам</a>
          <a href="/women">Женщинам</a>
          <a href="/kids">Детям</a>
        </div>
        <img alt="logo" />
        <ul className={styles.options}>
          <a href="/search">
            <img alt="account" />
            <p>войти</p>
          </a>
          <a href="/search">
            <img alt="favorite" />
            <p>избранное</p>
          </a>
          <a href="/search">
            <img alt="cart" />
            <p>корзина</p>
          </a>
          <a href="/search">
            <img alt="search" />
            <p>поиск</p>
          </a>
        </ul>
      </div>
      <nav className={styles.bottom}>
        <ul className={styles.navigation}>
          <li>
            <a href="/new-arrivals">Новинки</a>
          </li>
          <li>
            <a href="/snowboards">Сноуборд</a>
          </li>
          <li>
            <a href="/skis">Лыжи</a>
          </li>
          <li>
            <a href="/skateboards">Скейт</a>
          </li>
          <li>
            <a href="/longboards">Лонгборд</a>
          </li>
          <li>
            <a href="/wakeboards">Вейкборд</a>
          </li>
          <li>
            <a href="/surfboards">Серф</a>
          </li>
          <li>
            <a href="/clothing">Одежда</a>
          </li>
          <li>
            <a href="/footwear">Обувь</a>
          </li>
          <li>
            <a href="/accessories">Аксессуары</a>
          </li>
          <li>
            <a href="/brands">Бренды</a>
          </li>
          <li>
            <a href="/sale">Распродажа</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
