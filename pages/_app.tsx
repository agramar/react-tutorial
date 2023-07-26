import wrapper from "@/store";
import GlobalStyle from "@/styles/GlobalStyle";
import { AppProps } from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";

const App = ({ Component, ...rest }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Head>
        <meta charSet="utf-8" />
        <title>REACT TUTORIAL</title>
      </Head>
      <Component {...props.pageProps} />
    </Provider>
  );
};

export default App;
