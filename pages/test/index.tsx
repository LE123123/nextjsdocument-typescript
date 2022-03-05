// @ts-nocheck
import React from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import styles from "../../scss-styles/testPage.module.scss";

const Test = ({ pathname, userAgent, custom }) => {
  const { users } = useSelector((state) => state.allUsersReducer);
  return (
    <div>
      <pre>{JSON.stringify(users, null, 4)}</pre>
      <hr />
      <div className={styles.testOuterContainer}>
        {pathname}
        <br />
        {userAgent}
        <br />
        {custom}
      </div>

      <hr />
      <Link href="/clock">
        <a>Clock</a>
      </Link>
    </div>
  );
};

Test.getInitialProps = (context) => {
  return {
    custom: "custom",
  };
};

export default Test;
