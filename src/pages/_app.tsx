import * as React from "react";
import type { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import createEmotionCache from "../utility/createEmotionCache";
import { ThemeProvider } from "@dhi/react-components-lab";
import AppWrapper from "../components/AppWrapper/AppWrapper";
import TopHeader from "../components/Headers/TopHeader";
import { AppBodyWrapper } from "../styles/styles";
import CustomSnackbar from "../components/Snackbar/Snackbar";
import dynamic from "next/dynamic";

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

const MyApp: React.FunctionComponent<MyAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider>
        <CssBaseline />
        <AppWrapper>
          <TopHeader appName="NextJS-Theme-Prototype" />
          <AppBodyWrapper>
            <Component {...pageProps} />
          </AppBodyWrapper>
          <CustomSnackbar />
        </AppWrapper>
      </ThemeProvider>
    </CacheProvider>
  );
};

//export default MyApp;
export default dynamic(() => Promise.resolve(MyApp), {
  ssr: false,
});
