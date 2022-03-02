// @ts-nocheck
import React from "react";
import Layout2 from "../../components/Layout2";
import { wrapper } from "../../modules";
import { getUsers } from "../../modules/user";
import { useSelector } from "react-redux";
import { connect } from "react-redux";
import allUsersReducer from "../../modules/user";
import axios from "axios";

const DynamicRouting = ({ userAgent, users }) => {
  return <div>{userAgent}</div>;
};

// DynamicRouting.getInitialProps = async ({ req }) => {
//   const userAgent = req ? req.headers["user-agent"] : "hello";
//   return { userAgent };
// };

// export const getServerSideProps = wrapper.getServerSideProps(
//   (store) =>
//     async ({ req, res, ...etc }) => {
//       await store.dispatch(getUsers());
//     }
// );
// DynamicRouting.getLayout = (page: ReactElement) => <Layout2>{page}</Layout2>;

export const getStaticProps = async (context) => {
  const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
  return {
    props: {
      users: data,
    },
  };
};

export default DynamicRouting;
