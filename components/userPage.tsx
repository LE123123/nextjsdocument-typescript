// @ts-nocheck

import React from "react";
import SideBar from "./SideBar";
import Image from "next/image";

import styles from "../scss-styles/UserProfile.module.scss";
import styled, { css } from "styled-components";

import { useSelector } from "react-redux";
import { connect } from "react-redux";

const UserContent_ = styled.div`
  display: block;
  text-align: center;
  height: 4000px;
  transform: translateY(100px);
  z-index: 1;
  transition: all ease 1s;

  h1 {
    margin: 10px;
  }

  ${(props) =>
    props.fade &&
    css`
      background-color: #333;
      opacity: 0.5;
    `}
`;

export const Card = styled.div`
  width: 100%;
  height: 250px;
  position: relative;
  // 애니메이션을 추가해보자

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 100;
    opacity: 0;
    transition: opacity ease 0.5s;
  }

  &:hover:before {
    opacity: 1;
  }

  ${(props) =>
    props.ImageName === "img-1" &&
    css`
      grid-column: 1 / 3;
    `}
  ${(props) =>
    props.ImageName === "img-3" &&
    css`
      grid-row: span 2;
      min-height: 510px;
    `};

  ${(props) =>
    props.ImageName === "img-4" &&
    css`
      grid-row: span 2;
      min-height: 510px;
    `};

  ${(props) =>
    props.ImageName === "img-7" &&
    css`
      grid-column: 2 / span 3;
    `};

  ${(props) =>
    props.ImageName === "img-8" &&
    css`
      grid-column: span 2;
    `};

  ${(props) =>
    props.ImageName === "img-10" &&
    css`
      grid-row: span 3;
      min-height: 770px;
    `};

  ${(props) =>
    props.ImageName === "img-15" &&
    css`
      grid-column: 2 / span 2;
    `};
`;

export const Picture = ({ url, imageName }) => {
  return (
    <Card ImageName={imageName}>
      <div className={styles.CardInnerDiv1}></div>
      <div className={styles.CardInnerDiv2}></div>
      <Image src={url} alt="image preview" layout="fill" className={"image"} />
      <span className={styles.PictureSpan}>베너에 글씨가 나타나는 부분</span>
    </Card>
  );
};

export const UserContent = ({ sideBarClicked, user, images }) => {
  const renderImage = () => {
    return images.map((x, i) => (
      <Picture key={i} url={x.url} imageName={x.imageName} />
    ));
  };
  return (
    <UserContent_ fade={sideBarClicked}>
      <h1 style={{ marginTop: 0 }}>{user.name}</h1>
      {user.username}
      <br />
      {user.email}
      <br />

      <div className={styles.GalleryContainer}>{renderImage()}</div>
    </UserContent_>
  );
};

const UserPage = ({ userId, images }) => {
  const { sideBarClicked } = useSelector((state) => state.buttonReducer);
  const { users } = useSelector((state) => state.allUsersReducer);
  const user = users.filter((user) => user.id === userId)[0];

  return (
    <div className={styles.profileFlexOuterContainer}>
      {sideBarClicked ? (
        <SideBar opacity={0.8}></SideBar>
      ) : (
        <SideBar opacity={0}></SideBar>
      )}
      <UserContent sideBarClicked={sideBarClicked} user={user} images={images} />
    </div>
  );
};

export default connect((state) => state.allImageReducer)(UserPage);
