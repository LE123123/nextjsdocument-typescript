import Layout from "../components/Layout";
import type { ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";
import styles from "../scss-styles/IndexPage.module.scss";

const Home: NextPageWithLayout = () => {
  return <div className={styles.indexContainer}></div>;
};

Home.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};
export default Home;
