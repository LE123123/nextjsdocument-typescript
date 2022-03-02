// @ts-nocheck

import React from "react";
import { getUsers } from "../../modules/user";
import { wrapper } from "../../modules";
import { connect } from "react-redux";

const Users = ({ users }) => {
  return (
    <div>
      <ul>
        {users.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </ul>
    </div>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res, ...etc }) => {
      await store.dispatch(getUsers());
    }
);

export default connect((state) => state.allUsersReducer)(Users);
