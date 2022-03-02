// @ts-nocheck

import "../styles/globals.css";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import type { ReactElement, ReactNode } from "react";
import { wrapper } from "../modules";
import App from "next/app";
import { getUsers } from "../modules/user";

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // const getLayout = Component.getLayout || ((page) => page);
  // return getLayout(<Component {...pageProps} />);
  console.log("pageProps >> ", pageProps);
  return <Component {...pageProps} />;
}

MyApp.getInitialProps = async (appContext) => {
  // calls page's getInitialProps and fills appProps.pageProps
  const appProps = await App.getInitialProps(appContext);
  console.log("appProps >> ", appProps);

  const userAgent = appContext.req ? req.headers["user-agent"] : "hello user-agent";

  console.log("userAgent >> ", userAgent);
  return {
    pageProps: {
      ...appProps,
      userAgent,
    },
  };
};

export default wrapper.withRedux(MyApp);
