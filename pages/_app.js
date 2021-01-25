import { ProvideAuth } from "@/lib/auth"
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import theme from '@/styles/theme';
import { Global, css } from '@emotion/core';
import Head from 'next/head';


const GlobalStyle = ({ children }) => {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <CSSReset />
      <Global
        styles={css`
          html {
            scroll-behavior: smooth;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
        `}
      />
      {children}
    </>
  );
};



const App = ({ Component, pageProps }) => { 
  return (
    <ThemeProvider theme={theme}>
      <ProvideAuth>
      <GlobalStyle />
        
        <Component {...pageProps}/>
          </ProvideAuth>
    </ThemeProvider>
    
  ) 

}




export default App


