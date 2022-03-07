// @ts-nocheck

import { createAction, handleActions } from "redux-actions";
import * as types from "../types";
import axios from "axios";

import Image from "next/image";
import styled, { css } from "styled-components";

const initialImageState = {
  images: [],
};

const allImageReducer = (state = initialImageState, { type, payload }) => {
  switch (type) {
    case types.ALL_IMAGE_SUCCESS:
      return {
        ...state,
        images: payload,
      };
    case types.ALL_IMAGE_FAIL:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};

export const getImages = () => async (dispatch) => {
  try {
    let images = [];
    let { data } = await axios.get("https://api.unsplash.com/photos/random", {
      params: {
        client_id: process.env.UNSPLASH_API_ACCESS_KEY,
        count: 15,
      },
    });

    images = data.map((image, index) => ({
      imageName: `img-${index + 1}`,
      url: image.urls.small,
    }));

    // let renderImages = [];

    // renderImages = images.map((x, i) => (
    //   <Picture key={i} url={x.url} imageName={x.imageName} />
    // ));

    dispatch({
      type: types.ALL_IMAGE_SUCCESS,
      payload: images,
    });
  } catch (error) {
    dispatch({
      type: types.ALL_IMAGE_SUCCESS,
      payload: error.response.data,
    });
  }
};

export default allImageReducer;
