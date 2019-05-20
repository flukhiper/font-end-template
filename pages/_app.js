import React from 'react';
import App, { Container } from 'next/app';

import withReduxStore from '../src/libs/with-redux-store'
import { Provider } from 'react-redux'

import Layout from '../src/components/Layout'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps,reduxStore } = this.props;

    return (
      <Container>
        <Layout>
            <Provider store={reduxStore}>
                <Component {...pageProps} />
            </Provider>
        </Layout>
      </Container>
    );
  }
}

export default withReduxStore(MyApp);