// @ts-nocheck

import styled, { css } from "styled-components";
import { useSelector } from "react-redux";
import styles from "../scss-styles/SideBar.module.scss";

const SideBar_ = styled.div`
  position: fixed;
  color: white;
  height: 100%;
  width: auto;

  transform: translate(-100%, 100px);
  z-index: 100;
  transition: all ease 1s;

  ${(props) =>
    props.opacity === 0.8 &&
    css`
      transform: translate(0, 100px);
      background: black;
      opacity: 0.7;
    `}
`;

const UserList = ({ users }) => {
  return (
    <div className={styles.UserListContainer}>
      <h3>User List</h3>
      <ul className={styles.SideBarUlContainer}>
        {users.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </ul>
    </div>
  );
};

const SideBar = ({ children, opacity: opacityProps }) => {
  const { users } = useSelector((state) => state.allUsersReducer);

  return (
    <SideBar_ opacity={opacityProps}>
      {children}
      <UserList users={users} />
    </SideBar_>
  );
};

export default SideBar;
