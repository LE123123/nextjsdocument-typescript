import React, { useEffect, useState } from "react";
import styles from "../scss-styles/Layout.module.scss";
import type { NextPage } from "next";
import axios from "axios";

type LayoutPage = NextPage;

type user = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: any;
};

type users = user[] | undefined;

type layOutFetchUserProps = {
  usersData: users;
};

const LayOutFetchUser = ({ usersData }: layOutFetchUserProps) => {
  if (usersData) {
    return (
      <ul className={styles.userWrapper}>
        {usersData.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </ul>
    );
  } else {
    return <div>Laoding..</div>;
  }
};

const Layout: LayoutPage = ({ children }) => {
  const [users, setUsers] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users`
        );
        setUsers(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={styles.divLayout}>
      {children}
      {!users ? <div>Loading Users ...</div> : <LayOutFetchUser usersData={users} />}
    </div>
  );
};

export default Layout;
