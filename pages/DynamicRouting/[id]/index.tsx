// @ts-nocheck

import React from "react";
import styles from "../../../scss-styles/DynamicRouting2.module.scss";
import { useRouter } from "next/router";
import HeaderPage from "../../../components/headerPage";
import UserPage from "../../../components/userPage";
import FooterPage from "../../../components/footerPage";

const EachUser = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className={styles.outerLayout}>
      <HeaderPage className="headerPage" />
      <UserPage userId={parseInt(id, 10)} className="userPage" />
      <FooterPage className="footerPage" />
    </div>
  );
};

export default EachUser;
