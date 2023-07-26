import wrapper from "@/store/configureStore";
import GlobalStyle from "@/styles/GlobalStyle";
import Head from "next/head";

type Props = {
  Component: any;
};

const App: React.FC<Props> = ({ Component }) => {
  return (
    <>
      <GlobalStyle />
      <Head>
        <meta charSet="utf-8" />
        <title>REACT TUTORIAL</title>
      </Head>
      <Component />
    </>
  );
};

export default wrapper.withRedux(App);
