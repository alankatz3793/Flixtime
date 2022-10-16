import App from "next/app";
import React from "react";
import Router from "next/router";
import { ThemeProvider } from "styled-components";
import Layout from "../components/_App/Layout";
import Spinner from "../components/_App/Spinner";
import GlobalStyle from "../components/_App/Global.style";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import * as gtag from "../utils/gtag";

const theme = {
  colors: {
    primary: "#e7f3e2",
  },
};

const Author = styled.div`
  font-size: 14rem;
  color: gray;
  text-align: center;
  padding: 30rem 0;

  img {
    display: inline-block;
    width: 80rem;
    filter: brightness(0.8);
    margin-left: 2rem;
  }
`;

export default class MyApp extends App {
  state = { isLoading: false };

  componentDidMount() {
    Router.events.on("routeChangeStart", () => {
      this.setState({ isLoading: true });
    });

    Router.events.on("routeChangeComplete", (url) => {
      gtag.pageview(url);
      this.setState({ isLoading: false });
    });

    Router.events.on("routeChangeError", () => {
      this.setState({ isLoading: false });
    });
  }

  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    const { isLoading } = this.state;
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {isLoading && <Spinner />}
        <Layout>
          <Component {...pageProps} />
          <Author>
            {" "}
            Made by Alan Katz with <img src="/tmdb.svg" alt="tmdb" />
          </Author>
        </Layout>
      </ThemeProvider>
    );
  }
}
