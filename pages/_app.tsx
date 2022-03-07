// @ts-nocheck

import "../styles/globals.css";
import { wrapper } from "../modules";
import App from "next/app";
import { getUsers } from "../modules/user";
function MyApp({ Component, pageProps }: any) {
  // const getLayout = Component.getLayout || ((page) => page);
  // return getLayout(<Component {...pageProps} />);
  return <Component {...pageProps} />;
}

// MyApp.getInitialProps = wrapper.getInitialAppProps((store) => async (context) => {
//   const { req } = context.ctx;
//   await store.dispatch(getUsers());
//   return {
//     pageProps: {
//       ...(await App.getInitialProps(context)).pageProps,
//       pathname: context.ctx.pathname,
//       userAgent: req ? req.headers["user-agent"] : "default user-agent",
//     },
//   };
// });

export default wrapper.withRedux(MyApp);
