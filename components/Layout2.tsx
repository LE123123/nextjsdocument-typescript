// @ts-nocheck
import React from "react";
import { wrapper } from "../modules";
import { useSelector } from "react-redux";
import { getUsers } from "../modules/user";
import { connect } from "react-redux";

const Layout2 = ({ users }) => {
  console.log("Layoutsdfgsdfg2");
  return <div>{JSON.stringify(users)}</div>;
};
Layout2.getInitialProps = ({ store, pathname, query }) => {
  store.dispatch(getUsers());
};
export default connect((state) => state.allUsersReducer)(Layout2);

// export default connect((state) => state.allUsersReducer)(Layout2);
