import { useEffect } from 'react';
import { ThemeContextProvider } from '../contexts/ThemeContext';
import ThemeToggleButton from '../components/ThemeToggleButton';
import Layout from '../components/Layout';
import GlobalStyle from '../styles/GlobalStyle';
import Head from 'next/head';
import { GoogleAnalytics } from 'nextjs-google-analytics';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').then(registration => {
          console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }).catch(error => {
          console.log('ServiceWorker registration failed: ', error);
        });
      });
    }
  }, []);

  return (
    <>
      <GoogleAnalytics />
      <ThemeContextProvider>
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#000000" />
          {/* iOS meta tags */}
          <link rel="apple-touch-icon" href="/icon-180x180.png" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="apple-mobile-web-app-title" content="My PWA App" />
          {/* Windows meta tags */}
          <meta name="msapplication-TileColor" content="#000000" />
          <meta name="msapplication-TileImage" content="/icon-192x192.png" />
          <meta name="msapplication-config" content="/browserconfig.xml" />
          {/* Android meta tags */}
          <meta name="mobile-web-app-capable" content="yes" />
        </Head>
        <GlobalStyle />
        <Layout>
          <DefaultSeo
            canonical={SEO.openGraph.url}
            {...SEO}
            additionalMetaTags={[{
              name: 'keywords',
              content: SEO.openGraph.keywords,
            },
            {
              name: 'twitter:image',
              content: SEO.openGraph.images[0].url
            },
            {
              name: 'twitter:title',
              content: SEO.openGraph.title,
            },
            {
              name: 'twitter:description',
              content: SEO.openGraph.description,
            },
            {
              httpEquiv: 'x-ua-compatible',
              content: 'IE=edge; chrome=1'
            }]}
          />
          <ThemeToggleButton />
          <Component {...pageProps} />
        </Layout>
      </ThemeContextProvider>
    </>
  );
}

export default MyApp;