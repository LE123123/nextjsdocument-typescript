// @ts-nocheck

import React from "react";
import axios from "axios";

const Users2 = ({ users }) => {
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

export const getStaticProps = async (context) => {
  const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
  return {
    props: {
      users: data,
    },
  };
};

export default Users2;
