// @ts-nocheck
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import type { NextPageWithLayout } from "../_app";
import styles from "../../scss-styles/HomePage.module.scss";
import Image from "next/image";
import profilePic from "../../public/happy.jpg";
import { urlObjectKeys } from "next/dist/shared/lib/utils";

const Imgae: NextPageWithLayout = () => {
  const [img, setImg] = useState<object>({});

  const onButtonClick = async () => {
    const { default: img } = await import("../../public/happy.jpg");
    console.log(img);
    setImg(img);
  };
  return (
    <div className={styles.homePageOuterContainer}>
      <h1>My Homepage</h1>
      {/* <Image
        src="/happy.jpg"
        // src={profilePic}
        alt="Picture of the author"
        width="200px"
        height="300px"
      ></Image> */}
      {Object.keys(img).length === 0 && img.constructor === Object ? (
        "has no img ..."
      ) : (
        <img src={img.src} height="400px" width="300px" alt="img preview"></img>
      )}
      <button onClick={onButtonClick}>click to laod the image</button>
      <p>Welcome to my homepage</p>
    </div>
  );
};

export default Image;
