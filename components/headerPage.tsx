// @ts-nocheck

import React, { useCallback, useState } from "react";
import styles from "../scss-styles/HeaderPage.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { clickSideBar } from "../modules/button";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import buttonReducer from "../modules/button";

const HeaderPage = () => {
  const dispatch = useDispatch();
  const onBarClickHandler = useCallback(() => {
    dispatch(clickSideBar());
  }, [dispatch]);

  return (
    <div className={styles.HeaderContainer}>
      <div className={styles.barMenu} onClick={onBarClickHandler}>
        <FontAwesomeIcon icon={faBars} color="white" size="2x" />
      </div>
      <h3>Hyunseo&apos;s Next.js Page</h3>
    </div>
  );
};

export default HeaderPage;
