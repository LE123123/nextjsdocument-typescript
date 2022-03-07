// @ts-nocheck

import React from "react";
import styles from "../../../scss-styles/DynamicRouting2.module.scss";
import { useRouter } from "next/router";
import HeaderPage from "../../../components/headerPage";
import UserPage from "../../../components/userPage";
import FooterPage from "../../../components/footerPage";
import { wrapper } from "../../../modules";
import { getImages } from "../../../modules/image";
import { getUsers } from "../../../modules/user";
import { useSelector } from "react-redux";

const EachUser = () => {
  const router = useRouter();
  const { id } = router.query;
  const { images } = useSelector((state) => state.allImageReducer);

  return (
    <div className={styles.outerLayout}>
      <HeaderPage className="headerPage" />
      <UserPage userId={parseInt(id, 10)} images={images} className="userPage" />
      <FooterPage className="footerPage" />
    </div>
  );
};

// export const getServerSideProps = wrapper.getServerSideProps(
//   (store) =>
//     async ({ req, res, ...etc }) => {
//       await store.dispatch(getImages());
//       await store.dispatch(getUsers());
//     }
// );

export default EachUser;
