import React from "react";

import {BiMenuAltRight} from 'react-icons/bi';
import {AiOutlinerClose} from 'react-icons/ai';

import classes from "./Header.module.scss";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.header__content}>
        <h2>navBar</h2>
      </div>
      <nav className={classes.header__content__nav}>
        <ul>
          <li>
            <a href="/">PageOne</a>
          </li>
          <li>
            <a href="/">PageTwo</a>
          </li>
          <li>
            <a href="/">PageThree</a>
          </li>
        </ul>
        <button>CTA Page</button>
      </nav>
      <div className={classes.header__content__toggle}>
          
          </div>
    </header>
  );
};

export default Header;
