//@ts-nocheck

import Layout from "../components/Layout";
import type { ReactElement } from "react";
import styles from "../scss-styles/IndexPage.module.scss";
import styled, { css } from "styled-components";

const DDIV = styled.div`
  width: 400px;
  height: 500px;
  background-position: center;
  background-image: url("/img-1.jpg");
  background-size: cover;
`;

const Home = () => {
  return <DDIV>Hello</DDIV>;
};

Home.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};
export default Home;
