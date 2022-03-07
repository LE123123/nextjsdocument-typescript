// @ts-nocheck
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import styles from "../../scss-styles/DynamicRouting.module.scss";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

import { wrapper } from "../../modules";
import { getImages } from "../../modules/image";
import { getUsers } from "../../modules/user";

const GalleryContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: auto;
  padding: 0;
`;

// grid container
const Gallery = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-gap: 1.5rem;
  padding: 1.5rem 1.5rem;
`;

const GalleryImg = styled.div`
  width: 100%;
  height: 25rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${(props) => props.ImageURL});
  position: relative;
  /* display: flex;
  justify-content: center;
  align-items: center; */

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.8);
    opacity: 0;
    transition: opacity 0.5s;
  }

  &:hover::before {
    opacity: 1;
  }

  // img-1
  ${(props) =>
    props.ImageURL.slice(1, -4) === "img-1" &&
    css`
      grid-row: 1/3;
      min-height: 51.5rem;
    `}
  // img-3
    ${(props) =>
    props.ImageURL.slice(1, -4) === "img-3" &&
    css`
      grid-column: 3 / span 2;
    `}
    // img-5
    ${(props) =>
    props.ImageURL.slice(1, -4) === "img-6" &&
    css`
      grid-row: span 2;
      min-height: 51.5rem;
    `}
    // img-7
    ${(props) =>
    props.ImageURL.slice(1, -4) === "img-7" &&
    css`
      grid-column: 1 / span 2;
    `};
`;

const ImageGallery = () => {
  let ImageArr = [];
  for (let i = 0; i < 8; i++) {
    ImageArr = [
      ...ImageArr,
      <GalleryImg ImageURL={`/img-${i + 1}.jpg`} key={i}>
        <div className={styles.iconContainer}>
          <FontAwesomeIcon
            icon={faCamera}
            color="white"
            size="4x"
            className={styles.faImageIcon}
          />
        </div>
      </GalleryImg>,
    ];
  }
  return (
    <GalleryContainer>
      <Gallery>{ImageArr}</Gallery>
    </GalleryContainer>
  );
};
const DynamicRouting = ({ custom }) => {
  const { users } = useSelector((state) => state.allUsersReducer);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div className={styles.outerDynamicRouting}>
        <ul>
          {users.map((user) => {
            return (
              <li key={user.id}>
                <Link href={`/DynamicRouting/${user.id}`}>
                  <a>{user.name}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <ImageGallery />
    </div>
  );
};

export const getStaticProps = wrapper.getStaticProps(
  (store) =>
    async ({ preview }) => {
      await store.dispatch(getImages());
      await store.dispatch(getUsers());
    }
);

export default DynamicRouting;
