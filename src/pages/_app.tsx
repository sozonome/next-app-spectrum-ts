import { Provider, defaultTheme, SSRProvider } from "@adobe/react-spectrum";

import Layout from "../components/layout";

import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <SSRProvider>
      <Provider theme={defaultTheme} colorScheme={"light"}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </SSRProvider>
  );
};

export default MyApp;
