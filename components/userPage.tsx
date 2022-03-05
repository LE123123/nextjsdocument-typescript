// @ts-nocheck

import React, { useState, useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "../scss-styles/UserProfile.module.scss";
import styled, { css } from "styled-components";
import SideBar from "./SideBar";
import axios from "axios";
import Image from "next/image";

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

const Card = styled.div`
  /* grid-area: ${(props) => props.gridAreaName || ""}; */
`;

const Picture = ({ url, imageName }) => {
  return (
    <Card className={imageName}>
      <Image src={url} alt="image preview" width="1000px" height="1000px" />
      {/* <img src={url} alt="image preview"></img> */}
    </Card>
  );
};

const UserContent = ({ sideBarClicked, user, images }) => {
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

const UserPage = ({ userId }) => {
  const [images, setImages] = useState([]);
  const { sideBarClicked } = useSelector((state) => state.buttonReducer);
  const { users } = useSelector((state) => state.allUsersReducer);
  const user = users.filter((user) => user.id === userId)[0];

  // first rendering
  useEffect(() => {
    const getImages = async () => {
      let { data } = await axios.get("https://api.unsplash.com/photos/random", {
        params: {
          client_id: process.env.UNSPLASH_API_ACCESS_KEY,
          count: 15,
        },
      });
      // console.log(data);
      setImages([
        ...data.map((image, index) => ({
          imageName: `img-${index + 1}`,
          url: image.urls.small,
        })),
      ]);
    };
    getImages();
  }, []);
  console.log(images);

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

export default UserPage;
