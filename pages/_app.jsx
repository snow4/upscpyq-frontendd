import App from "next/app";
import { Provider } from "react-redux";
import React from "react";
import withRedux from "next-redux-wrapper";
import store from "../redux/store";
import HomePage from "./index";
// const store = Store();
class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    //Anything returned here can be accessed by the client
    return { pageProps: pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}
const makeStore = () => store;
export default withRedux(makeStore)(MyApp);
